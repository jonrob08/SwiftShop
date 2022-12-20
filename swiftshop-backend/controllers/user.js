const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/token");
const validateMongoDbId = require("../utils/validateDatabaseId");
const { generateRefreshToken } = require("../config/refreshToken");
const jwt = require("jsonwebtoken");
const sendEmail = require("./email");
const crypto = require("crypto");

// Create a User
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User Already Exists");
  }
});

// Login a User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const foundUser = await User.findOne({ email });
  if (foundUser && (await foundUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(foundUser?._id);
    const updateUser = await User.findByIdAndUpdate(
      foundUser._id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: foundUser?._id,
      firstname: foundUser?.firstname,
      lastname: foundUser?.lastname,
      email: foundUser?.email,
      mobile: foundUser?.mobile,
      token: generateToken(foundUser?._id),
    });
  } else {
    throw new Error("Email or Password is incorrect");
  }
});

// Handle Refresh Token
const refreshTokenHandler = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  // console.log(cookie)
  if (!cookie?.refreshToken)
    throw new Error("No Refresh Token Available in Cookies");
  const refreshToken = cookie.refreshToken;
  // console.log(refreshToken)
  const user = await User.findOne({ refreshToken });
  if (!user) throw new Error("No Refresh Token Available");
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    // console.log(decoded)
    if (err || user.id !== decoded.id) {
      throw new Error("There is an Issue with the Refresh Token");
    }
    const accessToken = generateToken(user?._id);
    res.json({ accessToken });
  });
});

// Logout a User
const logoutUser = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken)
    throw new Error("No Refresh Token Available in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204); // forbidden
  }

  await User.findOneAndUpdate(refreshToken, {
    refreshToken: "",
  });
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204); // forbidden
});

// Get all Users
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

// Get a single User
const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.json({
      user,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// Update a User

const updateUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json({
      updatedUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// Delete a single User
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.json({
      deletedUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// Block/Unblock a User from the site
const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const blockedUser = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: true,
      },
      {
        new: true,
      }
    );
    res.json({
      message: `User ${blockedUser.firstname} has been blocked`,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const unblockedUser = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: false,
      },
      {
        new: true,
      }
    );
    res.json({
      message: `User ${unblockedUser.firstname} has been unblocked`,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// Update password

const updatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongoDbId(_id);
  const user = await User.findById(_id);

  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
});

// Forgot Password
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Error("No user found with this email");
  try {
    // Generate reset token
    const token = await user.createPasswordResetToken();
    // Save new temp token to user
    await user.save();
    const resetURL = `Hello valued customer! Please follow this link to reset your password. This link will expire in 10 minutes. <a href='http://localhost:3002/api/user/reset-password/${token}'>Click Here</a>`;
    const data = {
      to: email,
      text: "Hey there,",
      subject: "Forgot Password Link",
      htm: resetURL,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    throw new Error(error);
  }
});

// Reset Password
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user)
    throw new Error("Token has Expired. Please Try Sending Another Reset Link");
  user.password = password;
  // Once we change the password we can get rid of the token
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save()
  res.json(user)
});

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  refreshTokenHandler,
  logoutUser,
  updatePassword,
  forgotPassword,
  resetPassword
};
