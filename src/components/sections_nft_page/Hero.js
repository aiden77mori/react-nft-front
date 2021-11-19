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
  const [bidModalActive, setBidModalactive] = useState(false);

  const openModal1 = (e) => {
    // e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal1 = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const openModal = (e) => {
    setBidModalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setBidModalactive(false);
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

  const buy = () => {
    alert("dd");
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      
      <div className="container">
        <div className={innerClasses} style={{marginTop: "-50px"}}>
          <div className={tilesClasses}>
          
            <div className="reveal-from-bottom topic top-img-nft">
              <Image
                className="has-shadow"
                src={require('./../../assets/images/imagen.png')}
                alt="Hero"
                width={625}
                height={470} /> 
            </div>

            <div className="reveal-from-bottom topic" data-reveal-delay="200">
              <div className="tiles-item-inner-nft-page">
                
                <div className="features-tiles-item-content explain-nft-page">
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
                  <div style={{height: "300px", overflowY: "scroll"}} className="scrroll-effect">
                    <div className="main_right_desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante diam, iaculis ac pretium nec, efficitur sit amet erat. Integer neque felis
                    </div>
                    <div className="main_right_desc1">
                      &gt; Highest Bid: 3.7 wETH by JohnMcMillan
                    </div>
                    <div className="main_right_desc">
                      <div>1 wETH by xGg</div>
                      <div>0.73 wETH by DamnU71</div>
                      <div>0.73 wETH by DamnU71</div>
                      <div>0.73 wETH by DamnU71</div>
                      <div>0.5 wETH by DamnU71</div>
                      <div>0.5 wETH by DamnU71</div>
                      <div>0.5 wETH by DamnU71</div>
                      <div>0.5 wETH by DamnU71</div>
                      <div>0.5 wETH by DamnU71</div>
                    </div>
                  </div>
                  <div className="main_right_desc2 both_title">
                    <div>Artist <u>KidEight</u></div>
                    <div style={{marginLeft: "70px"}}>Owner <u>ETH</u></div>
                  </div>
                  
                  <div className="tiles-item-inner-collection-create">
                    <div className="features-tiles-item-content-collection-create">
                      <div className="main_right_top_collection_create">
                        <button onClick={openModal1} className="create_collection_btn">Own for 10 ETH</button>
                        <span> or </span>
                        <button onClick={openModal} className="cancel_collection_btn">Bid</button>
                      </div>
                    </div>
                  </div>



                  <div className="main_right_top part2">
                    Past
                  </div>
                  <div className="main_right_desc_part2">
                    <div>3 months ago <u>lview txl</u></div>
                  </div>
                  <div className="main_right_desc_part2">
                    <div>3 months ago <u>lview txl</u></div>
                    <div>3 months ago <u>lview txl</u></div>
                  </div>
                  <div className="main_right_desc_part2">
                    <div>3 months ago <u>lview txl</u></div>
                    <div>3 months ago <u>lview txl</u></div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <Modal show={bidModalActive} handleClose={closeModal}>
            <div className="bid_modal">

            <div className="main_right_desc_top">
              Lorem ipsum dolor sit amet,asdfds <span style={{fontSize: '20px'}}>Both Of Us</span> by <u>KIDEIGHT</u> adipiscing elit. Donec ante diam
            </div>

            <div className="main_right_desc2_top">
              <div>10 ETH</div>
            </div>

            <div className="main_right_desc_top">
              <div>Your balance <span style={{ marginLeft: '50px' }}>0 ETH</span></div>
              <div>Your balance <span style={{ marginLeft: '50px' }}>0.021 wETH</span></div>
              <div>Your balance <span style={{ marginLeft: '50px' }}>0.021 wETH</span></div>
            </div>

            <div className="main_right_desc_top_btn_group">
              <button className="create_collection_btn" onClick={() => {alert("Place Bid")}}>Place Bid</button>
              <span>No enough funds</span>
            </div>
            

            </div>
          </Modal>

          <Modal show={videoModalActive} handleClose={closeModal1}>
            <div className="bid_modal">

            <div className="main_right_desc_top">
              You are about to buy <br /><span style={{fontSize: '20px'}}>Both Of Us</span> by <u>KIDEIGHT</u>
            </div>

            <div className="main_right_desc2_top">
              <div>10 ETH</div>
            </div>

            <div className="main_right_desc_top">
              <div>Your balance <span style={{ marginLeft: '50px' }}>0 ETH</span></div>
              <div>Your balance <span style={{ marginLeft: '50px' }}>0.021 wETH</span></div>
              <div>Your balance <span style={{ marginLeft: '50px' }}>0.021 wETH</span></div>
            </div>

            <div className="main_right_desc_top_btn_group">
              <button className="create_collection_btn" onClick={() => {alert("Procced")}}>Proceed</button>
              <span>Cancel</span>
            </div>

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