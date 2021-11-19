import React from 'react';
// import sections
import Hero from '../components/sections_explore/Hero';
import FeaturesTiles from '../components/sections_explore/FeaturesTiles';
import FeaturesSplit from '../components/sections_explore/FeaturesSplit';
import Testimonial from '../components/sections_explore/Testimonial';

const Explore = () => {

  return (
    <>
      <Testimonial topDivider /> 
      <FeaturesTiles />
      
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      
    </>
  );
}

export default Explore;