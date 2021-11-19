
import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Workflow that just works',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

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
          <div className="section-header center-content" style={{marginBottom: '-80px'}}>
            <div className="container-xs-custom-1">
              <div className="mt-0 mb-16">
                <u>Most Viewed</u>
              </div>
            </div>
          </div>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">

                <div className="row threespote">
                  <div className="most-upper" style={{fontSize: '10px', marginBottom: '-5px'}}>
                    <span className="mr-4 ml-4">Artist <strong>Kid Eight</strong></span>
                    <span>Owner <strong>ETH</strong></span>
                    <div className="share" style={{cursor: 'pointer'}}>
                      <ul onClick={() => {popUpClick();}}>
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
                          width: "150px",
                          height: "100px",
                          alignItems: 'center',
                        }} 
                        className={isPop === true ? 'dropdownshow' : 'dropdownhide'}
                      >
                        <div style={{position: 'absolute', zIndex: '9999', display: 'flex', flexDirection: 'column'}}>
                          <div style={{height: '40px', fontSize:'16px'}}>option1</div>
                          <div style={{height: '40px', fontSize:'16px'}}>optoin2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Rectangle 70-2.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
                </div>
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="most-detail">
                  <div className="right-cnt">
                    <div className="eye-img">
                      <Image
                      src={require('./../../assets/images/Icon metro-eye.svg')}/>
                    </div>
                    <div className="astro_title">601K</div>
                    <div className="astro_text">Astronout aboard </div>
                    <div className="astro_text_1">Reserve : 20</div>
                    <a className="slide-btn noselect" href="/nft_page">BID NOW</a>
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

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;