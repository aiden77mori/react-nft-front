import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

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

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

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
    'hero-inner-nft section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const [isPop, setPop] = useState(false);
  const popUpClick = () => {
    setPop(!isPop);
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      
      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses}>
          
            <div className="reveal-from-bottom topic top-img">
              <Image
                className="has-shadow"
                src={require('./../../assets/images/imagen.png')}
                alt="Hero"
                width={600}
                height={470} /> 
            </div>

            <div className="reveal-from-bottom topic" data-reveal-delay="200">
              <div className="tiles-item-inner-nft">
                
                <div className="features-tiles-item-content explain">
                  <div className="main_right_top heading_title">
                    <div style={{width: '50%'}}><b>Both of us</b></div>
                    <div style={{fontSize: "14px", width: "50%", textAlign: "right"}}>@ 1.9k</div>
                    <div className="right mp threedot" style={{textAlign: "right"}}>
                      <ul onClick={() => {popUpClick();}} style={{width: "30px", cursor: 'pointer'}}>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                      </ul>
                      <div 
                        style={{position: 'absolute', 
                          zIndex: '9999', 
                          display: 'flex', 
                          flexDirection: 'column', 
                          backgroundColor: 'black',
                          width: "70px",
                          height: "50px",
                          alignItems: 'center',
                        }} 
                        className={isPop === true ? 'dropdownshow' : 'dropdownhide'}
                      >
                        <div style={{position: 'absolute', zIndex: '9999', display: 'flex', flexDirection: 'column'}}>
                          <div style={{height: '40px', fontSize:'16px', color: 'white'}}>option1</div>
                          <div style={{height: '40px', fontSize:'16px', color: 'white'}}>optoin2</div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="main_right_desc">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante diam, iaculis ac pretium nec, efficitur sit amet erat. Integer neque felis
                  </div>
                  <div className="main_right_desc1" style={{fontSize: "18px"}}>
                    Current bid 3.7 ETH
                  </div>

                  <div className="main_right_desc2 both_title" style={{marginTop: "170px"}}>
                    <div>Artist <u>KidEight</u></div>
                    <div style={{marginLeft: "70px"}}>Owner <u>ETH</u></div>
                  </div>
                  
                  <div className="tiles-item-inner-collection-create">
                    <div className="features-tiles-item-content-collection-create">
                      <div className="main_right_top_collection_create">
                        <button className="create_collection_btn_options" onClick={() => {alert("Collect for 10 ETH")}}>Collect for 10 ETH</button>
                        <span> or </span>
                        <button className="cancel_collection_btn_options" onClick={() => {alert("Bid")}}>Bid</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;