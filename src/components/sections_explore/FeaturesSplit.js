import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
// import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';

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
  
  pushLeft,
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

  const tilesClasses = classNames(
    'tiles-wrap',
    'self-tiles',
    pushLeft && 'push-left'
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
                <u className="explore_collection_tilte">Collections</u>
              </div>
            </div>
          </div>
          <div className={splitClasses}>

            <div className={tilesClasses} style={{marginTop: "50px"}}>

                <div className="topAdver" >
                  <div className="slide-item-tablecell design hx home-explore">
                      <div className="nft-img">
                        <a href="/nft_page">
                        <Image src={require('./../../assets/images/c4.jpg')} 
                              width={444}
                              height={517}/>
                        </a>
                      </div>
                  </div>

                  <div className="slide-item-tablecell design hx home-explore top_title_explore">
                    <div className="nft-img">
                        <div className="most-detail-explore">
                          <div className="right-cnt-explore">
                            <div className="astro_title_explore" style={{color: "red"}}>Strata</div>
                            <div className="astro_text_explore" style={{color: "red"}}>Lorem ipsm dolor sit amet concectepture elit. Sed
                              ulamcoopre concequer odio, user trishq rish  amet.
                              Pellentesque
                            </div>
                            <a className="slide-btn noselect" href="/collection"><u style={{color: "red"}}>View Collection</u></a>
                          </div>
                        </div>
                    </div>
                  </div>

              </div>

                {/* <div className="topAdver"> */}
                  
                  <div className="slide-item-tablecell design hx home-explore">
                    <div className="nft-img">
                      <a href="/nft_page">
                      <Image src={require('./../../assets/images/c4.jpg')} 
                            width={444}
                            height={517}/>
                      </a>
                    </div>
                    <div className="nft-details_explore_explore">
                          <h2 className = "slide_title_feature_split">Glaxtic Tokyo</h2>
                          <div>Collection by : <u className="price_feature_split">Satosh Nakamoto</u></div>
                    </div>
                  </div>

                  <div className="slide-item-tablecell design hx home-explore">
                  <div className="nft-img">
                    <a href="/nft_page">
                    <Image src={require('./../../assets/images/c4.jpg')} 
                        width={444}
                        height={517}/>
                    </a>
                  </div>
                  <div className="nft-details_explore_explore">
                      <h2 className = "slide_title_feature_split">Glaxtic Tokyo</h2>
                      <div>Collection by : <u className="price_feature_split">Satosh Nakamoto</u></div>
                  </div>
                </div>
            
                {/* </div> */}
            </div>
                
            <div className="tiles-item-inner">
              <div className="features-tiles-item-content-explore-feature">
                <div className="main_right_top_explore_feature">
                  <button className="see_more_explore" onClick={() => {alert("See more")}}>See more</button>
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