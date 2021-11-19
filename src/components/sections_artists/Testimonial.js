import React, { useState, useRef, useEffect } from 'react';
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
    'testimonial-artists section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner-artists testimonial-artists',
    // topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap-artists',
    'self-tiles',
    pushLeft && 'push-left'
  );

  // const sectionHeader = {
  //   title: 'Customer testimonials',
  //   paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  // };

  const [isPop, setPop] = useState(false);
  const popUpClick = () => {
    setPop(!isPop);
    setPop1(false);
    setPop2(false);
    setPop3(false);
    setPop4(false);
    setPop5(false);
    setPop6(false);
    setPop7(false);
    setPop8(false);
    setPop9(false);
    setPop10(false);
    setPop11(false);
  };

  const [isPop1, setPop1] = useState(false);
  const popUpClick1 = () => {
    setPop1(!isPop1);
    setPop(false);
    setPop2(false);
    setPop3(false);
    setPop4(false);
    setPop5(false);
    setPop6(false);
    setPop7(false);
    setPop8(false);
    setPop9(false);
    setPop10(false);
    setPop11(false);
  };

  const [isPop2, setPop2] = useState(false);
  const popUpClick2 = () => {
    setPop2(!isPop2);
    setPop1(false);
    setPop(false);
    setPop3(false);
    setPop4(false);
    setPop5(false);
    setPop6(false);
    setPop7(false);
    setPop8(false);
    setPop9(false);
    setPop10(false);
    setPop11(false);
  };

  const [isPop3, setPop3] = useState(false);
  const popUpClick3 = () => {
    setPop3(!isPop3);
    setPop1(false);
    setPop2(false);
    setPop(false);
    setPop4(false);
    setPop5(false);
    setPop6(false);
    setPop7(false);
    setPop8(false);
    setPop9(false);
    setPop10(false);
    setPop11(false);
  };

  const [isPop4, setPop4] = useState(false);
  const popUpClick4 = () => {
    setPop4(!isPop4);
    setPop1(false);
    setPop2(false);
    setPop3(false);
    setPop(false);
    setPop5(false);
    setPop6(false);
    setPop7(false);
    setPop8(false);
    setPop9(false);
    setPop10(false);
    setPop11(false);
  };

  const [isPop5, setPop5] = useState(false);
  const popUpClick5 = () => {
    setPop5(!isPop5);
    setPop1(false);
    setPop2(false);
    setPop3(false);
    setPop4(false);
    setPop(false);
    setPop6(false);
    setPop7(false);
    setPop8(false);
    setPop9(false);
    setPop10(false);
    setPop11(false);
  };

  const [isPop6, setPop6] = useState(false);
  const popUpClick6 = () => {
    setPop6(!isPop6);
    setPop1(false);
    setPop2(false);
    setPop3(false);
    setPop4(false);
    setPop5(false);
    setPop(false);
    setPop7(false);
    setPop8(false);
    setPop9(false);
    setPop10(false);
    setPop11(false);
  };

  const [isPop7, setPop7] = useState(false);
  const popUpClick7 = () => {
    setPop7(!isPop7);
    setPop1(false);
    setPop2(false);
    setPop3(false);
    setPop4(false);
    setPop5(false);
    setPop6(false);
    setPop(false);
    setPop8(false);
    setPop9(false);
    setPop10(false);
    setPop11(false);
  };

  const [isPop8, setPop8] = useState(false);
  const popUpClick8 = () => {
    setPop8(!isPop8);
    setPop1(false);
    setPop2(false);
    setPop3(false);
    setPop4(false);
    setPop5(false);
    setPop6(false);
    setPop7(false);
    setPop(false);
    setPop9(false);
    setPop10(false);
    setPop11(false);
  };

  const [isPop9, setPop9] = useState(false);
  const popUpClick9 = () => {
    setPop9(!isPop9);
    setPop1(false);
    setPop2(false);
    setPop3(false);
    setPop4(false);
    setPop5(false);
    setPop6(false);
    setPop7(false);
    setPop8(false);
    setPop(false);
    setPop10(false);
    setPop11(false);
  };

  const [isPop10, setPop10] = useState(false);
  const popUpClick10 = () => {
    setPop10(!isPop10);
    setPop1(false);
    setPop2(false);
    setPop3(false);
    setPop4(false);
    setPop5(false);
    setPop6(false);
    setPop7(false);
    setPop8(false);
    setPop9(false);
    setPop(false);
    setPop11(false);
  };

  const [isPop11, setPop11] = useState(false);
  const popUpClick11 = () => {
    setPop11(!isPop11);
    setPop1(false);
    setPop2(false);
    setPop3(false);
    setPop4(false);
    setPop5(false);
    setPop6(false);
    setPop7(false);
    setPop8(false);
    setPop9(false);
    setPop10(false);
    setPop(false);
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container artists_page">
        <div className={innerClasses}>
          <div className="section-header1 center-content">
            <div className="container-xs-custom">
              <div className="mt-0 mb-16 pl-40">
                <u>Artists</u>
              </div>
            </div>
            

            <div className="tiles-item-inner-artists">
              <div className="tiles-photo">
                <Image
                    src={require('./../../assets/images/cc.png')}
                    alt="Features tile icon 01"
                    width={60}
                    height={60} />
              </div>
              <div className="tiles-info">
                <div className="tiles-info-title"><Link to="/profile"><u>KIDEIGHT</u></Link></div>
              </div>
              
            </div>
            
          </div>

          <div className={tilesClasses}>

            <div className="slide-item-tablecell design hx home-explore">
              <div className="explore-design-artists">
                <div className="right mp threedot" style={{cursor: 'pointer'}}>
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
              <div className="nft-img">
                <a href="/nft_page">
                <Image src={require('./../../assets/images/c4.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details_explore">
                <h2 className = "slide_title">Nothing else matter</h2>
                <div>Reserve : <span className="price">1ETH</span></div>
                <a className="bid-blc-btn noselect" style={{zIndex: '9999'}} href="/nft_page">BID NOW</a>
              </div>
            </div>
            
            <div className="slide-item-tablecell design hx home-explore">
              <div className="explore-design-artists">
                <div className="right mp threedot" style={{cursor: 'pointer'}}>
                  <ul onClick={() => {popUpClick1();}}>
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
                      className={isPop1 === true ? 'dropdownshow' : 'dropdownhide'}
                    >
                      <div style={{position: 'absolute', zIndex: '9999', display: 'flex', flexDirection: 'column'}}>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>option1</div>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>optoin2</div>
                      </div>
                </div>
                </div>
                
              </div>
              <div className="nft-img">
                <a href="/nft_page">
                  <Image src={require('./../../assets/images/c4.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details_explore">
                <h2 className = "slide_title">Nothing else matter</h2>
                <div>Reserve : <span className="price">1ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>

            <div className="slide-item-tablecell design hx home-explore">
              <div className="explore-design-artists">
                <div className="right mp threedot" style={{cursor: 'pointer'}}>
                  <ul onClick={() => {popUpClick2();}}>
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
                      className={isPop2 === true ? 'dropdownshow' : 'dropdownhide'}
                    >
                      <div style={{position: 'absolute', zIndex: '9999', display: 'flex', flexDirection: 'column'}}>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>option1</div>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>optoin2</div>
                      </div>
                </div>
                </div>
                
              </div>
              <div className="nft-img">
                <a href="/nft_page">
                <Image src={require('./../../assets/images/c4.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details_explore">
                <h2 className = "slide_title">Nothing else matter</h2>
                <div>Reserve : <span className="price">1ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>

            <div className="slide-item-tablecell design hx home-explore">
              <div className="explore-design-artists">
                <div className="right mp threedot" style={{cursor: 'pointer'}}>
                  <ul onClick={() => {popUpClick3();}}>
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
                      className={isPop3 === true ? 'dropdownshow' : 'dropdownhide'}
                    >
                      <div style={{position: 'absolute', zIndex: '9999', display: 'flex', flexDirection: 'column'}}>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>option1</div>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>optoin2</div>
                      </div>
                </div>
                </div>
              </div>
              <div className="nft-img">
                <a href="/nft_page">
                <Image src={require('./../../assets/images/c4.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details_explore">
                <h2 className = "slide_title">Nothing else matter</h2>
                <div>Reserve : <span className="price">1ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>
 
          </div>
        </div>

        <div className={innerClasses}>
          <div className="tiles-item-inner-artists">
              <div className="tiles-photo">
                <Image
                    src={require('./../../assets/images/cc.png')}
                    alt="Features tile icon 01"
                    width={60}
                    height={60} />
              </div>
              <div className="tiles-info">
                <div className="tiles-info-title"><Link to="/profile"><u>KIDEIGHT</u></Link></div>
              </div>
            </div>

          <div className={tilesClasses}>
            <div className="slide-item-tablecell design hx home-explore">
              <div className="explore-design-artists">
                <div className="right mp threedot" style={{cursor: 'pointer'}}>
                  <ul onClick={() => {popUpClick4();}}>
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
                      className={isPop4 === true ? 'dropdownshow' : 'dropdownhide'}
                    >
                      <div style={{position: 'absolute', zIndex: '9999', display: 'flex', flexDirection: 'column'}}>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>option1</div>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>optoin2</div>
                      </div>
                </div>
                </div>
              </div>
              <div className="nft-img">
                <a href="/nft_page">
                <Image src={require('./../../assets/images/c4.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details_explore">
                <h2 className = "slide_title">Nothing else matter</h2>
                <div>Reserve : <span className="price">1ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>
            
            <div className="slide-item-tablecell design hx home-explore">
              <div className="explore-design-artists">
                <div className="right mp threedot" style={{cursor: 'pointer'}}>
                  <ul onClick={() => {popUpClick5();}}>
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
                      className={isPop5 === true ? 'dropdownshow' : 'dropdownhide'}
                    >
                      <div style={{position: 'absolute', zIndex: '9999', display: 'flex', flexDirection: 'column'}}>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>option1</div>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>optoin2</div>
                      </div>
                </div>
                </div>
              </div>
              <div className="nft-img">
                <a href="/nft_page">
                <Image src={require('./../../assets/images/c4.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details_explore">
                <h2 className = "slide_title">Nothing else matter</h2>
                <div>Reserve : <span className="price">1ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>

            <div className="slide-item-tablecell design hx home-explore">
              <div className="explore-design-artists">
                <div className="right mp threedot" style={{cursor: 'pointer'}}>
                  <ul onClick={() => {popUpClick6();}}>
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
                      className={isPop6 === true ? 'dropdownshow' : 'dropdownhide'}
                    >
                      <div style={{position: 'absolute', zIndex: '9999', display: 'flex', flexDirection: 'column'}}>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>option1</div>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>optoin2</div>
                      </div>
                </div>
                </div>
              </div>
              <div className="nft-img">
                <a href="/nft_page">
                <Image src={require('./../../assets/images/c4.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details_explore">
                <h2 className = "slide_title">Nothing else matter</h2>
                <div>Reserve : <span className="price">1ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>

            <div className="slide-item-tablecell design hx home-explore">
              <div className="explore-design-artists">
                <div className="right mp threedot" style={{cursor: 'pointer'}}>
                  <ul onClick={() => {popUpClick7();}}>
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
                      className={isPop7 === true ? 'dropdownshow' : 'dropdownhide'}
                    >
                      <div style={{position: 'absolute', zIndex: '9999', display: 'flex', flexDirection: 'column'}}>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>option1</div>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>optoin2</div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="nft-img">
                <a href="/nft_page">
                  <Image src={require('./../../assets/images/c4.jpg')} 
                        width={250}
                        height={377}/>
                </a>
              </div>
              <div className="nft-details_explore">
                <h2 className = "slide_title">Nothing else matter</h2>
                <div>Reserve : <span className="price">1ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={innerClasses}>
          <div className="tiles-item-inner-artists">
              <div className="tiles-photo">
                <Image
                    src={require('./../../assets/images/cc.png')}
                    alt="Features tile icon 01"
                    width={60}
                    height={60} />
              </div>
              <div className="tiles-info">
                <div className="tiles-info-title"><Link to="/profile"><u>KIDEIGHT</u></Link></div>
              </div>
            </div>

          <div className={tilesClasses}>
            <div className="slide-item-tablecell design hx home-explore">
              <div className="explore-design-artists">
                <div className="right mp threedot" style={{cursor: 'pointer'}}>
                  <ul onClick={() => {popUpClick8();}}>
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
                      className={isPop8 === true ? 'dropdownshow' : 'dropdownhide'}
                    >
                      <div style={{position: 'absolute', zIndex: '9999', display: 'flex', flexDirection: 'column'}}>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>option1</div>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>optoin2</div>
                      </div>
                </div>
                </div>
              </div>
              <div className="nft-img">
                <a href="/nft_page">
                <Image src={require('./../../assets/images/c4.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details_explore">
                <h2 className = "slide_title">Nothing else matter</h2>
                <div>Reserve : <span className="price">1ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>
            
            <div className="slide-item-tablecell design hx home-explore">
              <div className="explore-design-artists" style={{cursor: 'pointer'}}>
                <div className="right mp threedot">
                  <ul onClick={() => {popUpClick9();}}>
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
                      className={isPop9 === true ? 'dropdownshow' : 'dropdownhide'}
                    >
                      <div style={{position: 'absolute', zIndex: '9999', display: 'flex', flexDirection: 'column'}}>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>option1</div>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>optoin2</div>
                      </div>
                </div>
                </div>
              </div>
              <div className="nft-img">
                <a href="/nft_page">
                <Image src={require('./../../assets/images/c4.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details_explore">
                <h2 className = "slide_title">Nothing else matter</h2>
                <div>Reserve : <span className="price">1ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>

            <div className="slide-item-tablecell design hx home-explore">
              <div className="explore-design-artists">
                <div className="right mp threedot" style={{cursor: 'pointer'}}>
                  <ul onClick={() => {popUpClick10();}}>
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
                      className={isPop10 === true ? 'dropdownshow' : 'dropdownhide'}
                    >
                      <div style={{position: 'absolute', zIndex: '9999', display: 'flex', flexDirection: 'column'}}>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>option1</div>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>optoin2</div>
                      </div>
                </div>
                </div>
              </div>
              <div className="nft-img">
                <a href="/nft_page">
                <Image src={require('./../../assets/images/c4.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details_explore">
                <h2 className = "slide_title">Nothing else matter</h2>
                <div>Reserve : <span className="price">1ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>

            <div className="slide-item-tablecell design hx home-explore">
              <div className="explore-design-artists">
                <div className="right mp threedot" style={{cursor: 'pointer'}}>
                  <ul onClick={() => {popUpClick11();}}>
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
                      className={isPop11 === true ? 'dropdownshow' : 'dropdownhide'}
                    >
                      <div style={{position: 'absolute', zIndex: '9999', display: 'flex', flexDirection: 'column'}}>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>option1</div>
                        <div style={{height: '40px', fontSize:'16px', color: 'white'}}>optoin2</div>
                      </div>
                </div>
                </div>
              </div>
              <div className="nft-img">
                <a href="/nft_page">
                <Image src={require('./../../assets/images/c4.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details_explore">
                <h2 className = "slide_title">Nothing else matter</h2>
                <div>Reserve : <span className="price">1ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>
          </div>

          <div className="tiles-item-inner">
            <div className="features-tiles-item-content-artists">
              <div className="main_right_top_artists">
                <button className="load_more" onClick={() => {alert("Load more")}}>Load more...</button>
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