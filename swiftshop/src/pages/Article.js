import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Article = () => {
    const title = "Dynamic Blog Name"
    return (
        <>
            <Meta title={title} />
            <BreadCrumb title={title} /> 
            <div className="blog-wrapper py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                 <div className="article-card">
                    <Link to="/blog" className='d-flex align-items-center gap-10'>
                    <HiOutlineArrowLeft className='fs-4' />
                        Go Back To Blogs
                    </Link>
                    <h3 className='title'>
                        A Beautiful Day To Spend Inside VR
                    </h3>
                    <img src="images/blog-1.jpg" className="img-fluid w-100 my-4" alt="" />
                    <p className="description">Ever feel like you're missing something, trust us your wildest dreams will come true after you've read this. Maecenas tempus eget lacus id porta. Proin a elit augue. Etiam ipsum est, tempus quis velit id, vehicula molestie felis. Nulla placerat arcu quis dolor rutrum ultrices. Nunc quam sem, lobortis eget vehicula a, suscipit quis tellus. Mauris vulputate quis risus eget dictum. In luctus dapibus justo, ac blandit est pharetra a. Morbi vitae porttitor magna. Morbi ullamcorper id ipsum sit amet gravida.</p>
                 </div>
                </div>
            </div>
        </div>
      </div>
        </>
    )
}

export default Article