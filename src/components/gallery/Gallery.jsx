import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import c1 from '../../assets/images/1.jpeg'
import c2 from '../../assets/images/2.jpeg'
import c3 from '../../assets/images/3.jpeg'
import c4 from '../../assets/images/4.jpeg'
import c5 from '../../assets/images/5.jpeg'
import c6 from '../../assets/images/6.jpeg'
import c7 from '../../assets/images/7.jpeg'
import c8 from '../../assets/images/8.jpeg'
import c9 from '../../assets/images/9.jpeg'
import c10 from '../../assets/images/10.jpeg'
import c11 from '../../assets/images/11.jpeg'
import c12 from '../../assets/images/12.jpeg'
import c13 from '../../assets/images/13.jpeg'
import c14 from '../../assets/images/14.jpeg'
import c15 from '../../assets/images/15.jpeg'
import c16 from '../../assets/images/16.jpeg'
import c17 from '../../assets/images/17.jpeg'
import c18 from '../../assets/images/18.jpeg'
import c19 from '../../assets/images/19.jpeg'
import c20 from '../../assets/images/20.jpeg'
import c21 from '../../assets/images/21.jpeg'
import c22 from '../../assets/images/22.jpeg'
import c23 from '../../assets/images/23.jpeg'
import c24 from '../../assets/images/24.jpeg'
import c25 from '../../assets/images/25.jpeg'
import c26 from '../../assets/images/26.jpeg'
import c27 from '../../assets/images/27.jpeg'
import c28 from '../../assets/images/28.jpeg'
import c29 from '../../assets/images/29.jpeg'
import c30 from '../../assets/images/30.jpeg'
import c31 from '../../assets/images/31.jpeg'
import c32 from '../../assets/images/32.jpeg'
import c33 from '../../assets/images/33.jpeg'
import c34 from '../../assets/images/34.jpeg'
import c35 from '../../assets/images/35.jpeg'
import c36 from '../../assets/images/36.jpeg'
import c37 from '../../assets/images/oneV.jpeg'
import c38 from '../../assets/images/twoV.jpeg'
import c39 from '../../assets/images/three.jpeg'
import c40 from '../../assets/images/four.jpeg'
import c41 from '../../assets/images/five.jpeg'
import c42 from '../../assets/images/six.jpeg'

const images = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14,
c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30,
c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42,]; // Use actual image variables

function Gallery() {
  return(
    <div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter='20px'>
            {images.map((image, i) => (
              <img key={i} src={image} style={{ width: '100%', display: 'block' }} alt='' />
            ))}
          </Masonry>
        </ResponsiveMasonry>
    </div>
  );
}

export default Gallery;