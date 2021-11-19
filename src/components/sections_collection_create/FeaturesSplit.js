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
                <span>Create A Collectible</span>
              </div>
            </div>
          </div>
          <div className={splitClasses}>

            <div className="split-item collection_feature_split_create">
              <div className="center-content-mobile reveal-from-left first_collection_feature" data-reveal-container=".split-item">
                <div className="collection-create">
                  <input type="text" placeholder="Title" />
                  <input type="text" placeholder="Description" />
                  <input type="text" placeholder="Tags" />
                  <input type="text" placeholder="Editions" />
                  <input type="text" placeholder="Royalties" />
                  <span className="file_choose_coll_create">Browse...<input type="text" onClick={() => {alert("Choose File")}} placeholder="No File Selected" /></span>
                  <div className="small_info">PNG, GIF, WEBP, MP4 or MP3, Max, 100mb</div>
                  
                  <div className="radio_group">
                    <span className="radio_btn">Fixed Price <input type="radio" value="Fixed Price" name="radio_btn" /></span>
                    <span className="radio_btn">Bid <input type="radio" value="Bid" name="radio_btn" defaultChecked /></span>
                  </div>

                  <div className="radio_desc_group">
                    <input type="text" placeholder="Reserve Price" />
                    <input type="text" placeholder="24 Hours" />
                  </div>

                </div>

                <div className="tiles-item-inner-collection-create">
                  <div className="features-tiles-item-content-collection-create">
                    <div className="main_right_top_collection_create">
                      <button className="create_collection_btn" onClick={() => {alert("Create")}}>Create</button>
                      <span> or </span>
                      <button className="cancel_collection_btn" onClick={() => {alert("Cancel")}}>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            
              
              <div className="most-detail-collection">
                <div className="astro_title_collection_preview">Preview</div>
                <div className="right-cnt-collection-create">
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