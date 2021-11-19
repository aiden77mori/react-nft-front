import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    'self-tiles',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };

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
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}  style={{marginBottom: '-100px'}}>
          <div className="section-header center-content" style={{paddingBottom: '-80px'}}>
            <div className="container-xs-custom-1">
              <div className="mt-0 mb-16">
                <u>Hot Auctions</u>
              </div>
            </div>
          </div>
          <div className={tilesClasses}>

            <div className="slide-item-tablecell design homt_testimo hx home-explore">
              <div className="explore-design">
                <span>Artist <strong><Link to="/artists">KIDEIGHT</Link></strong></span>
                <span style={{marginLeft:'15px'}}>Owner <strong>ETH</strong></span>
                <div className="right mp" style={{cursor: 'pointer'}}>
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
                <Image src={require('./../../assets/images/c2.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details">
                <h2 className = "slide_title">Never mind</h2>
                <div>Reserve : <span className="price">10.2ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>

            <div className="slide-item-tablecell design homt_testimo hx home-explore">
              <div className="explore-design">
                <span>Artist <strong><Link to="/artists">KIDEIGHT</Link></strong></span>
                <span style={{marginLeft:'15px'}}>Owner <strong>ETH</strong></span>
                <div className="right mp" style={{cursor: 'pointer'}}>
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
                <Image src={require('./../../assets/images/c2.jpg')} 
                     width={250}
                     height={377}/>
                </a>
              </div>
              <div className="nft-details">
                <h2 className = "slide_title">Never mind</h2>
                <div>Reserve : <span className="price">10.2ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>

            <div className="slide-item-tablecell design homt_testimo hx home-explore">
              <div className="explore-design">
                <span>Artist <strong><Link to="/artists">KIDEIGHT</Link></strong></span>
                <span style={{marginLeft:'15px'}}>Owner <strong>ETH</strong></span>
                <div className="right mp" style={{cursor: 'pointer'}}>
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
                <Image src={require('./../../assets/images/c2.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details">
                <h2 className = "slide_title">Never mind</h2>
                <div>Reserve : <span className="price">10.2ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>
            <div className="slide-item-tablecell design homt_testimo hx home-explore">
              <div className="explore-design">
                <span>Artist <strong><Link to="/artists">KIDEIGHT</Link></strong></span>
                <span style={{marginLeft:'15px'}}>Owner <strong>ETH</strong></span>
                <div className="right mp" style={{cursor: 'pointer'}}>
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
                <Image src={require('./../../assets/images/c2.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details">
                <h2 className = "slide_title">Never mind</h2>
                <div>Reserve : <span className="price">10.2ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>
            <div className="slide-item-tablecell design homt_testimo hx home-explore">
              <div className="explore-design">
                <span>Artist <strong><Link to="/artists">KIDEIGHT</Link></strong></span>
                <span style={{marginLeft:'15px'}}>Owner <strong>ETH</strong></span>
                <div className="right mp" style={{cursor: 'pointer'}}>
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
                <Image src={require('./../../assets/images/c2.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details">
                <h2 className = "slide_title">Never mind</h2>
                <div>Reserve : <span className="price">10.2ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>

            <div className="slide-item-tablecell design homt_testimo hx home-explore">
              <div className="explore-design">
                <span>Artist <strong><Link to="/artists">KIDEIGHT</Link></strong></span>
                <span style={{marginLeft:'15px'}}>Owner <strong>ETH</strong></span>
                <div className="right mp" style={{cursor: 'pointer'}}>
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
                <Image src={require('./../../assets/images/c2.jpg')} 
                     width={250}
                     height={377}/>
                </a>
              </div>
              <div className="nft-details">
                <h2 className = "slide_title">Never mind</h2>
                <div>Reserve : <span className="price">10.2ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>

            <div className="slide-item-tablecell design homt_testimo hx home-explore">
              <div className="explore-design">
                <span>Artist <strong><Link to="/artists">KIDEIGHT</Link></strong></span>
                <span style={{marginLeft:'15px'}}>Owner <strong>ETH</strong></span>
                <div className="right mp" style={{cursor: 'pointer'}}>
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
                <Image src={require('./../../assets/images/c2.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details">
                <h2 className = "slide_title">Never mind</h2>
                <div>Reserve : <span className="price">10.2ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
              </div>
            </div>
            <div className="slide-item-tablecell design homt_testimo hx home-explore">
              <div className="explore-design">
                <span>Artist <strong><Link to="/artists">KIDEIGHT</Link></strong></span>
                <span style={{marginLeft:'15px'}}>Owner <strong>ETH</strong></span>
                <div className="right mp" style={{cursor: 'pointer'}}>
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
                <Image src={require('./../../assets/images/c2.jpg')} 
                      width={250}
                      height={377}/>
                </a>
              </div>
              <div className="nft-details">
                <h2 className = "slide_title">Never mind</h2>
                <div>Reserve : <span className="price">10.2ETH</span></div>
                <a className="bid-blc-btn noselect" href="/nft_page">BID NOW</a>
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