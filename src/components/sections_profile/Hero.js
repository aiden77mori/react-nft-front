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


  const [clicked, setClicked] = useState('onSale');

  const tabClick = (menu_name) => {
    setClicked(menu_name);
  }

  const [isPop, setPop] = useState(false);
  const popUpClick = () => {
    setPop(!isPop);
  };

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
    'hero-inner-profile section-inner',
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

        <div className="section-header-profile center-content">
            <div className="container-xs-custom">
              <div className="mt-0 mb-16 pl-40">
                /Artists
              </div>
            </div>
        </div>
          
        <div className={tilesClasses}>
        
          <div className="reveal-from-bottom topic top-img-profile">
            <div className="features-tiles-item-content-profile1">

                <div className="tiles-item-inner-profile">
                    
                    <div className="tiles-photo">
                      <Image
                          src={require('./../../assets/images/cc.png')}
                          alt="Features tile icon 01"
                          width={50}
                          height={50} />
                    </div>
                    <div className="tiles-info-profile">
                      <div className="tiles-info-title">@KIDEIGHT</div>
                      <div className="right mp threedot">
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
                </div>
                <div className="main_right_desc_profile">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante diam, iaculis ac pretium nec, efficitur sit amet erat. Integer neque felis
                </div>
                <div className="main_right_desc_profile_bottom">
                  <div>Twitter</div>
                  <div>Instagram</div>
                </div>

            </div>
          </div>

          <div className="reveal-from-bottom topic" data-reveal-delay="200">
            <div className="tiles-item-inner-profile1">
              <div className="features-tiles-item-content-profile explain-profile">
                <div className="main_right_top_profile">
                  <div onClick={() => tabClick("onSale")} className={(clicked==='onSale'?'active_red tab':'') || "tab"}>On Sale</div>
                  <div onClick={() => tabClick("owned")} className={(clicked==='owned'?'active_red tab':'') || "tab"}>Owned</div>
                  <div onClick={() => tabClick("collections")} className={(clicked==='collections'?'active_red tab':'') || "tab"}>Collections</div>
                </div>

                <div className="tiles-wrap center-content border-left-tiles">
                  {/* <div className={tilesClasses}> */}

                  {clicked == 'onSale' ? (
                      <div className={tilesClasses}>
                        <div className="tiles-item-profile-self ">
                          <div className="tiles-item-inner-profile2">
                            <div className="tiles-photo">
                              <Image
                                  src={require('./../../assets/images/cc.png')}
                                  alt="Features tile icon 01"
                                  width={50}
                                  height={50} />
                            </div>
                            <div className="tiles-info">
                              <div className="tiles-info-title">MBSJQ</div>
                              <div className="tiles-info-content">119ETH</div>
                            </div>
                            
                          </div>
                        </div>
                        <div className="tiles-item-profile-self ">
                          <div className="tiles-item-inner-profile2">
                            <div className="tiles-photo">
                              <Image
                                  src={require('./../../assets/images/cc.png')}
                                  alt="Features tile icon 01"
                                  width={50}
                                  height={50} />
                            </div>
                            <div className="tiles-info">
                              <div className="tiles-info-title">MBSJQ</div>
                              <div className="tiles-info-content">90.8ETH</div>
                            </div>                       
                          </div>
                        </div>
                        <div className="tiles-item-profile-self ">
                          <div className="tiles-item-inner-profile2">
                      
                            <div className="tiles-photo">
                              <Image
                                  src={require('./../../assets/images/cc.png')}
                                  alt="Features tile icon 01"
                                  width={50}
                                  height={50} />
                            </div>
                            <div className="tiles-info">
                              <div className="tiles-info-title">MBSJQ</div>
                              <div className="tiles-info-content">90.8ETH</div>
                            </div>
                            
                          </div>
                        </div>
                        <div className="tiles-item-profile-self ">
                          <div className="tiles-item-inner-profile2">
                      
                            <div className="tiles-photo">
                              <Image
                                  src={require('./../../assets/images/cc.png')}
                                  alt="Features tile icon 01"
                                  width={50}
                                  height={50} />
                            </div>
                            <div className="tiles-info">
                              <div className="tiles-info-title">MBSJQ</div>
                              <div className="tiles-info-content">90.8ETH</div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    ) : 
                    <div className={tilesClasses}>
                      <div className="tiles-item-profile-self ">
                        <div className="tiles-item-inner-profile2">
                          <div className="tiles-photo">
                            <Image
                                src={require('./../../assets/images/cc.png')}
                                alt="Features tile icon 01"
                                width={50}
                                height={50} />
                          </div>
                          <div className="tiles-info">
                            <div className="tiles-info-title">MBSJQ</div>
                            <div className="tiles-info-content">119ETH</div>
                          </div>
                          
                        </div>
                      </div>
                      <div className="tiles-item-profile-self ">
                        <div className="tiles-item-inner-profile2">
                    
                          <div className="tiles-photo">
                            <Image
                                src={require('./../../assets/images/cc.png')}
                                alt="Features tile icon 01"
                                width={50}
                                height={50} />
                          </div>
                          <div className="tiles-info">
                            <div className="tiles-info-title">MBSJQ</div>
                            <div className="tiles-info-content">90.8ETH</div>
                          </div>
                          
                        </div>
                      </div>
                      <div className="tiles-item-profile-self ">
                          <div className="tiles-item-inner-profile2">
                            <div className="tiles-photo">
                              <Image
                                  src={require('./../../assets/images/cc.png')}
                                  alt="Features tile icon 01"
                                  width={50}
                                  height={50} />
                            </div>
                            <div className="tiles-info">
                              <div className="tiles-info-title">MBSJQ</div>
                              <div className="tiles-info-content">119ETH</div>
                            </div>
                            
                          </div>
                        </div>
                        <div className="tiles-item-profile-self ">
                          <div className="tiles-item-inner-profile2">
                            <div className="tiles-photo">
                              <Image
                                  src={require('./../../assets/images/cc.png')}
                                  alt="Features tile icon 01"
                                  width={50}
                                  height={50} />
                            </div>
                            <div className="tiles-info">
                              <div className="tiles-info-title">MBSJQ</div>
                              <div className="tiles-info-content">90.8ETH</div>
                            </div>                       
                          </div>
                        </div>
                        <div className="tiles-item-profile-self ">
                          <div className="tiles-item-inner-profile2">
                      
                            <div className="tiles-photo">
                              <Image
                                  src={require('./../../assets/images/cc.png')}
                                  alt="Features tile icon 01"
                                  width={50}
                                  height={50} />
                            </div>
                            <div className="tiles-info">
                              <div className="tiles-info-title">MBSJQ</div>
                              <div className="tiles-info-content">90.8ETH</div>
                            </div>
                            
                          </div>
                        </div>
                        <div className="tiles-item-profile-self ">
                          <div className="tiles-item-inner-profile2">
                      
                            <div className="tiles-photo">
                              <Image
                                  src={require('./../../assets/images/cc.png')}
                                  alt="Features tile icon 01"
                                  width={50}
                                  height={50} />
                            </div>
                            <div className="tiles-info">
                              <div className="tiles-info-title">MBSJQ</div>
                              <div className="tiles-info-content">90.8ETH</div>
                            </div>
                            
                          </div>
                        </div>
                    </div>
                  }

                    
                {/* </div> */}
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