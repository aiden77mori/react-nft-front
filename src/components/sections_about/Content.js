import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Content = ({
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

  // const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // }   

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
    'hero-inner-content section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      
      <div className="container about_content">
        <div className={innerClasses}>
          <div className={tilesClasses}>
          
            <div className="tiles-item reveal-from-bottom">
              <div className="features-tiles-item-content">
                  <div className="main_right_top_about">
                    <div>You are here</div>
                    <div>We are all here</div>
                    <div>At the new down of creative economy</div>
                  </div>
                  <div className="main_right_top_about">
                    <div>Fair</div>
                    <div>Transdivarent</div>
                    <div>Decentalized</div>
                    <div>And self governed</div>
                  </div>
                  <div className="main_right_top_about">
                   <div>We are early</div>
                   <div>We are still in the embryo</div>
                  </div>
                  <div className="main_right_top_about">
                    <div>You are on of us</div>
                    <div>We are one</div>
                    <div>We are one</div>
                  </div>
              </div>
            </div>

            {/* <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                
                <div className="features-tiles-item-content">
                  <div className="main_right_top">
                    Presenting:
                  </div>
                  <div className="main_right_middle">
                    Bloodshed
                  </div>
                  <div className="main_right_top">
                   By <u>KIDEIGHT</u>
                  </div>
                  <div className="main_right_top">
                  <button className="bid">BID NOW</button>
                  </div>
                </div>

              </div>
            </div> */}
          </div>
            
        </div>
      </div>
    </section>
  );
}

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;