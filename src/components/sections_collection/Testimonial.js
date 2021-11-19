import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
// import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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

  const outerClasses = classNames(
    'testimonial1 section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    // topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    'self-tiles-collection',
    pushLeft && 'push-left'
  );

  // const sectionHeader = {
  //   title: 'Customer testimonials',
  //   paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  // };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses}>

            <div className="slide-item-tablecell design hx home-explore">
              <div className="nft-img">
                <a href="/nft_page">
                <Image src={require('./../../assets/images/c4.jpg')} 
                      width={370}
                      height={494}/>
                </a>
              </div>
              <div className="nft-details_collection">
                <h2 className = "slide_title">Nothing else matter</h2>
                <div>Reserve : <span className="price">1ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>

            <div className="slide-item-tablecell design hx home-explore">
              
              <div className="nft-img">
                <a href="/nft_page">
                <Image src={require('./../../assets/images/c4.jpg')} 
                     width={370}
                     height={494}/>
                </a>
              </div>
              <div className="nft-details_collection">
                <h2 className = "slide_title">Never mind</h2>
                <div>Reserve : <span className="price">10.2ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>

            <div className="slide-item-tablecell design hx home-explore">
              
              <div className="nft-img">
                <a href="/nft_page">
                <Image src={require('./../../assets/images/c4.jpg')} 
                      width={370}
                      height={494}/>
                </a>
              </div>
              <div className="nft-details_collection">
                <h2 className = "slide_title">Never mind</h2>
                <div>Reserve : <span className="price">10.2ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>
            <div className="slide-item-tablecell design hx home-explore">
              
              <div className="nft-img">
                <a href="/nft_page">
                <Image src={require('./../../assets/images/c4.jpg')} 
                      width={370}
                      height={494}/>
                </a>
              </div>
              <div className="nft-details_collection">
                <h2 className = "slide_title">Never mind</h2>
                <div>Reserve : <span className="price">10.2ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>
            <div className="slide-item-tablecell design hx home-explore">
              
              <div className="nft-img">
                <a href="/nft_page">
                <Image src={require('./../../assets/images/c4.jpg')} 
                      width={370}
                      height={494}/>
                </a>
              </div>
              <div className="nft-details_collection">
                <h2 className = "slide_title">Never mind</h2>
                <div>Reserve : <span className="price">10.2ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>

            <div className="slide-item-tablecell design hx home-explore">
              <div className="nft-img">
                <a href="/nft_page">
                <Image src={require('./../../assets/images/c4.jpg')} 
                     width={370}
                     height={494}/>
                </a>
              </div>
              <div className="nft-details_collection">
                <h2 className = "slide_title">Never mind</h2>
                <div>Reserve : <span className="price">10.2ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>
          
          </div>

          <div className="tiles-item-inner">
            <div className="features-tiles-item-content-explore">
              <div className="main_right_top_explore">
                <button className="Load_more" onClick={() => {alert("Load more")}}>Load more ...</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;