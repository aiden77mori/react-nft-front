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
    'features-split3 section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner3 section-inner',
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
          <div className="section-header-collection-create center-content">
            <div className="container-xs-custom-1">
              <div className="mt-0 mb-16">
                <span>Edit Profile</span>
              </div>
            </div>
          </div>
          <div className={splitClasses}>

            <div className="split-item collection_feature_split_create">
              <div className="center-content-mobile reveal-from-left edit-profile-up" data-reveal-container=".split-item">
                <div className="edit-profile">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="About you" />
                  <input type="text" placeholder="Instagram" />
                  <input type="text" placeholder="Twitter" />
                  <span className="file_choose_coll_create">Upload profile pic<input onClick={() => {alert("File Choose")}} type="text" placeholder="No File Selected" /></span>
                  <div className="small_info">JPG, PNG or GIF</div>
                </div>

                <div className="tiles-item-inner-collection-create">
                  <div className="features-tiles-item-content-collection-create">
                    <div className="main_right_top_collection_create">
                      <button className="create_collection_btn" onClick={() => {alert("Save")}}>Save</button>
                      <span> or </span>
                      <button className="cancel_collection_btn" onClick={() => {alert("Cancel")}}>Cancel</button>
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

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;