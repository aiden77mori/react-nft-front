import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
// import SectionHeader from './partials/SectionHeader';
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
    'features-split1 section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    'explore-feature',
    // topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  // const sectionHeader = {
  //   title: 'Workflow that just works',
  //   paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  // };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className="section-header center-content">
            <div className="container-xs-custom-1">
              <div className="mt-0 mb-16">
                <u>Collections</u>
              </div>
            </div>
          </div>
          <div className={splitClasses}>

            <div className="split-item explore_feature_split">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">

                <div className={
                classNames(
                  'split-item-image-explore center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Rectangle 70-2.png')}
                  alt="Features split 01"
                  width={444}
                  height={517} />
                </div>
              </div>
              <div className="center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="most-detail-explore">
                  <div className="right-cnt-explore">
                    {/* <div className="eye-img">
                      <Image
                      src={require('./../../assets/images/Icon metro-eye.svg')}/>
                    </div> */}
                    <div className="astro_title_explore">Strata</div>
                    <div className="astro_text_explore">Lorem ipsm dolor sit amet concectepture elit. Sed
                      ulamcoopre concequer odio, user trishq rish  amet.
                      Pellentesque
                     </div>
                    {/* <div className="astro_text_1_explore">Reserve : 10.1 ETH</div> */}
                    <a className="slide-btn noselect" href="/nft"><u>View Collection</u></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="split-item explore_feature_split">
              
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">

                <div className={
                  classNames(
                    'split-item-image-explore center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src={require('./../../assets/images/Rectangle 70-2.png')}
                    alt="Features split 01"
                    width={444}
                    height={517} />
                </div>
                <div className="nft-details_explore_feature_split">
                  <h2 className = "slide_title_feature_split">Glaxtic Tokyo</h2>
                  <div>Collection by : <u className="price_feature_split">Satosh Nakamoto</u></div>
                </div>

              </div>

              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">

                <div className={
                classNames(
                  'split-item-image-explore center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Rectangle 70-2.png')}
                  alt="Features split 01"
                  width={444}
                  height={517} />
                </div>
                <div className="nft-details_explore_feature_split">
                  <h2 className = "slide_title_feature_split">Glaxtic Tokyo</h2>
                  <div>Collection by : <u className="price_feature_split">Satosh Nakamoto</u></div>
                </div>

              </div>
            
            </div>
                
            <div className="tiles-item-inner">
              <div className="features-tiles-item-content-explore-feature">
                <div className="main_right_top_explore_feature">
                  <button className="see_more">See more</button>
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