import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Payment = () => {
  const title = "Payment";

  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} />
    </>
  );
};

export default Payment;
