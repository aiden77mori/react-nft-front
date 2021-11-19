import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const [bidModalActive, setBidModalactive] = useState(false);

  const openModal = (e) => {
    setBidModalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setBidModalactive(false);
  }

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // }   

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      
      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses}>
          
            <div className="tiles-item reveal-from-bottom top-has-shadow" style={{marginTop: '-20px'}}>
              <Image
                className="has-shadow"
                src={require('./../../assets/images/imagen.png')}
                alt="Hero"
                width={530}
                height={418}
                onClick={openModal}
                /> 
            </div>

            <div className="tiles-item reveal-from-bottom left-title"  data-reveal-delay="200">
              <div className="tiles-item-inner">
                
                <div className="features-tiles-item-content">
                  <div className="main_right_top">
                    Presenting:
                  </div>
                  <div className="main_right_middle">
                    Bloodshed
                  </div>
                  <div className="main_right_top">
                   By <Link to="/artists"><u style={{color: "red"}}>KIDEIGHT</u></Link>
                  </div>
                  <div className="main_right_top">
                  <button className="bid" onClick={() => {alert("BID BOW")}}>BID NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Modal show={bidModalActive} handleClose={closeModal} style={{padding: "10px"}}>
            <div className="bid_modal_home" >
            <Image
                className="has-shadow"
                src={require('./../../assets/images/imagen.png')}
                alt="Hero"
                width={750}
                height={500}
                onClick={openModal}
                /> 
            </div>
          </Modal>
            
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;