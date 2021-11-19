import React from 'react';
// import sections
import FeaturesSplit from '../components/sections_collection/FeaturesSplit';
import Testimonial from '../components/sections_collection/Testimonial';

const Collection = () => {

  return (
    <>

      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider /> 
      
    </>
  );
}

export default Collection;