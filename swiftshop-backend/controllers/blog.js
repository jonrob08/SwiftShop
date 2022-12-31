const Blog = require("../models/blog");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateDatabaseId");
const cloudinaryUpload = require('../utils/cloudinary')

// Create New Blog
const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// Update Blog
const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedBlog);
  } catch (error) {
    throw new Error(error);
  }
});

//Get All Blogs
const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    res.json(allBlogs);
  } catch (error) {
    throw new Error(error);
  }
});

// Get A Blog
const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getBlog = await Blog.findById(id)
      .populate("likes")
      .populate("dislikes");
    await Blog.findByIdAndUpdate(
      id,
      {
        // increment views by 1
        $inc: { views: 1 },
      },
      {
        new: true,
      }
    );
    res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete A Blog
const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    res.json(deletedBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// Like A Blog
const likeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  validateMongoDbId(blogId);

  // Find the blog
  const blog = await Blog.findById(blogId);
  const loginUserId = req?.user?._id;
  const isLiked = blog?.isLiked;
  const alreadyDisliked = blog?.dislikes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );
  if (alreadyDisliked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
    res.json(blog);
  }
  if (isLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        // remove user from the likes array
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        // pull is an update operation that adds values to the field array
        // add user to the likes array
        $push: { likes: loginUserId },
        isLiked: true,
      },
      { new: true }
    );
    res.json(blog);
  }
});

// Dislike A Blog
const dislikeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  validateMongoDbId(blogId);

  // Find the blog
  const blog = await Blog.findById(blogId);
  // Find the logged in user
  const loginUserId = req?.user?._id;
  // Check if user has disliked the blog
  const isDisliked = blog?.isDisliked;
  // Check if the user has liked the blog
  const alreadyLiked = blog?.likes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );
  if (alreadyLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        // pull is an update operation that removes all instances of the value from the field
        // remove user from the dislikes array
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
    res.json(blog);
  }
  if (isDisliked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        // remove user from the dislikes array
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        // pull is an update operation that adds values to the field array
        // add user to the likes array
        $push: { dislikes: loginUserId },
        isDisliked: true,
      },
      { new: true }
    );
    res.json(blog);
  }
});

// Upload Blog Images
const uploadImages = asyncHandler(async (req, res) => {
  const {id} = req.params
  validateMongoDbId(id)
  try {
    const uploader = async (path) => cloudinaryUpload(path, "images")
      const urls = []
      const files = req.files
      for (const file of files) {
        const { path } = file
        const newpath = await uploader(path)
        urls.push(newpath)
      }
      const findBlog = await Blog.findByIdAndUpdate(id, {
        images: urls.map((file) => {
          return file
        })
      },{
        new: true
      })
      res.json(findBlog)
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImages
};
