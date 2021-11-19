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
  ...props
}) => {

  const outerClasses = classNames(
    'features-split2 section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    'collection-feature',
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

            <div className="split-item collection_feature_split">
              <div className="center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="most-detail-collection-one">
                  <div className="right-cnt-collection">
                    <div className="astro_title_collection">Strata</div>
                    <div className="astro_text_collection">
                      <p>Lorem ipsm dolor sit amet concectepture </p> 
                      <p>elit. Sed ulamcoopre concequer odio, a semper</p> 
                      <p>url tansqury user trishq rish  amet. Pellentesque</p>
                     </div>
                    <Link className="slide-btn noselect" to="/profile">Artist <u><Link to="/profile">KidEights</Link></u></ Link>
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