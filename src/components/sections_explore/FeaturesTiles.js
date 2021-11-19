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
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap-home center-content',
    pushLeft && 'push-left'
  );

  // const sectionHeader = {
  //   title: 'High rollers',
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
            <div className="container-xs-custom">
              <div className="mt-0 mb-16">
                <u>New Artists</u>
              </div>
            </div>
          </div>

          <div className={tilesClasses}>

            <div className="tiles-item-explore reveal-from-bottom">
              <div className="tiles-item-inner">
                <span className="tiles-num">
                  1
                </span>
                <div className="tiles-photo">
                  <Image
                      src={require('./../../assets/images/cc.png')}
                      alt="Features tile icon 01"
                      width={60}
                      height={60} />
                </div>
                <div className="tiles-info">
                  <Link to="/artists"><Link to="/artists"><div className="tiles-info-title">KIDEIGHT</div></Link></Link>
                  <div className="tiles-info-content">119ETH</div>
                </div>
                
              </div>
            </div>

            <div className="tiles-item-explore reveal-from-bottom" data-reveal-delay="100">
              <div className="tiles-item-inner">
                <span className="tiles-num">
                  2
                </span>
                <div className="tiles-photo">
                  <Image
                      src={require('./../../assets/images/cc.png')}
                      alt="Features tile icon 01"
                      width={60}
                      height={60} />
                </div>
                <div className="tiles-info">
                  <Link to="/artists"><div className="tiles-info-title">KIDEIGHT</div></Link>
                  <div className="tiles-info-content">90.8ETH</div>
                </div>
                
              </div>
            </div>

            <div className="tiles-item-explore reveal-from-bottom" data-reveal-delay="300">
              <div className="tiles-item-inner">
                <span className="tiles-num">
                  3
                </span>
                <div className="tiles-photo">
                  <Image
                      src={require('./../../assets/images/cc.png')}
                      alt="Features tile icon 01"
                      width={60}
                      height={60} />
                </div>
                <div className="tiles-info">
                  <Link to="/artists"><div className="tiles-info-title">KIDEIGHT</div></Link>
                  <div className="tiles-info-content">119ETH</div>
                </div>
                
              </div>
            </div>

            <div className="tiles-item-explore reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <span className="tiles-num">
                  4
                </span>
                <div className="tiles-photo">
                  <Image
                      src={require('./../../assets/images/cc.png')}
                      alt="Features tile icon 01"
                      width={60}
                      height={60} />
                </div>
                <div className="tiles-info">
                  <Link to="/artists"><div className="tiles-info-title">KIDEIGHT</div></Link>
                  <div className="tiles-info-content">90.8ETH</div>
                </div>
                
              </div>
            </div>
            <div className="tiles-item-explore reveal-from-bottom" data-reveal-delay="500">
            <div className="tiles-item-inner">
                <span className="tiles-num">
                  5
                </span>
                <div className="tiles-photo">
                  <Image
                      src={require('./../../assets/images/cc.png')}
                      alt="Features tile icon 01"
                      width={60}
                      height={60} />
                </div>
                <div className="tiles-info">
                  <Link to="/artists"><div className="tiles-info-title">KIDEIGHT</div></Link>
                  <div className="tiles-info-content">119ETH</div>
                </div>
                
              </div>
            </div>
            <div className="tiles-item-explore reveal-from-bottom">
              <div className="tiles-item-inner">
                <span className="tiles-num">
                  6
                </span>
                <div className="tiles-photo">
                  <Image
                      src={require('./../../assets/images/cc.png')}
                      alt="Features tile icon 01"
                      width={60}
                      height={60} />
                </div>
                <div className="tiles-info">
                  <Link to="/artists"><div className="tiles-info-title">KIDEIGHT</div></Link>
                  <div className="tiles-info-content">119ETH</div>
                </div>
                
              </div>
            </div>

            <div className="tiles-item-explore reveal-from-bottom" data-reveal-delay="100">
              <div className="tiles-item-inner">
                <span className="tiles-num">
                  7
                </span>
                <div className="tiles-photo">
                  <Image
                      src={require('./../../assets/images/cc.png')}
                      alt="Features tile icon 01"
                      width={60}
                      height={60} />
                </div>
                <div className="tiles-info">
                  <Link to="/artists"><div className="tiles-info-title">KIDEIGHT</div></Link>
                  <div className="tiles-info-content">90.8ETH</div>
                </div>
                
              </div>
            </div>

            <div className="tiles-item-explore reveal-from-bottom" data-reveal-delay="300">
              <div className="tiles-item-inner">
                <span className="tiles-num">
                  8
                </span>
                <div className="tiles-photo">
                  <Image
                      src={require('./../../assets/images/cc.png')}
                      alt="Features tile icon 01"
                      width={60}
                      height={60} />
                </div>
                <div className="tiles-info">
                  <Link to="/artists"><div className="tiles-info-title">KIDEIGHT</div></Link>
                  <div className="tiles-info-content">119ETH</div>
                </div>
                
              </div>
            </div>

          </div>
          <div className="tiles-item-inner">
            <div className="features-tiles-item-content-explore">
              <div className="main_right_top_explore">
                <button className="see_more" onClick={() => {alert("See more")}}>See more</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;