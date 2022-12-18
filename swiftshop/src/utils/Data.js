import {
  BsTruck,
  BsGift,
  BsHeadset,
  BsCurrencyDollar,
  BsCreditCard2Back,
} from "react-icons/bs";

export const services = [
  {
    title: "Free Shipping",
    tagline: "On all orders over $100",
    image: <BsTruck size="50" />,
  },
  {
    title: "Daily Login Gifts",
    tagline: "Save up to 25% off",
    image: <BsGift size="50" />,
  },
  {
    title: "24/7 Live Support",
    tagline: "Shopping experts await your call",
    image: <BsHeadset size="50" />,
  },
  {
    title: "Always Affordable",
    tagline: "Price Match Guarantee",
    image: <BsCurrencyDollar size="50" />,
  },
  {
    title: "Secure Payments",
    tagline: "Wide variety of secure payment options",
    image: <BsCreditCard2Back size="50" />,
  },
];
