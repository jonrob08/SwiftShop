import React from "react";
import { Container } from "../components";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const PrivacyPolicy = () => {
  const title = "Privacy Policy";
  return (
    <>
      <Meta title={title} />
      <BreadCrumb title={title} />
      <Container class1="policy-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h3>Header 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse iaculis, neque sit amet lacinia suscipit, odio nisl
                vulputate nisi, eget eleifend libero metus ac lacus. Maecenas
                tempus eget lacus id porta. Proin a elit augue. Etiam ipsum est,
                tempus quis velit id, vehicula molestie felis. Nulla placerat
                arcu quis dolor rutrum ultrices. Nunc quam sem, lobortis eget
                vehicula a, suscipit quis tellus. Mauris vulputate quis risus
                eget dictum. In luctus dapibus justo, ac blandit est pharetra a.
                Morbi vitae porttitor magna. Morbi ullamcorper id ipsum sit amet
                gravida.
              </p>
              <h3>Header 2</h3>
              <p>
                Vestibulum aliquet, eros sed ullamcorper efficitur, lectus
                libero scelerisque purus, vitae mollis magna mi nec leo.
                Vestibulum faucibus blandit semper. Praesent in lorem tristique,
                laoreet magna at, ultricies lorem. Proin dapibus est ac feugiat
                pretium. Morbi nec ligula non ligula vehicula tempor. Sed massa
                metus, sodales ut pretium sit amet, interdum vitae sapien. Duis
                varius dapibus euismod. Duis auctor metus sem, in consectetur
                neque dapibus ac. Sed eros turpis, fermentum a laoreet sit amet,
                pretium ac sem. Suspendisse lorem quam, sollicitudin a posuere
                at, placerat sit amet nisi. Morbi ut malesuada enim. Mauris
                imperdiet eros quam, et accumsan sapien semper quis. Mauris
                maximus, quam consectetur efficitur aliquam, mauris eros varius
                ex, a semper elit arcu sodales metus. Nulla facilisi.
              </p>
              <h3>Header 3</h3>
              <p>
                Donec rhoncus, sapien in ullamcorper pulvinar, lacus leo
                scelerisque ligula, sit amet consequat dolor libero vel tellus.
                Quisque vel vehicula tellus. Cras consectetur nec nunc sed
                pharetra. Aliquam neque odio, ullamcorper non ultricies vitae,
                feugiat in ipsum. Morbi feugiat non velit vitae aliquam. In hac
                habitasse platea dictumst. Nulla dignissim dolor vitae ipsum
                scelerisque semper. Quisque iaculis nisl quis fringilla congue.
                Donec in bibendum leo, imperdiet blandit ligula. Vivamus lacus
                dui, facilisis ut ante ut, venenatis fermentum odio. Morbi id
                tristique urna. Curabitur ac eleifend arcu. Phasellus ac dui
                risus. Integer lorem dui, lobortis eu tincidunt ac, dignissim
                eget tortor. Fusce commodo sit amet lorem a placerat. Vestibulum
                et purus at nisi porta suscipit.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
