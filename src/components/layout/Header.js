import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);

  const [clicked, setClicked] = useState('');

  const handleClick = (menu_name) => {
    setClicked(menu_name);
    closeMenu();
  };

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          
          {!hideNav &&
            <>
              <button
                className="header-nav-toggle" 
                
              >
                {/* <span className="screen-reader">Menu</span> */}
                <span>
                  <Link className="header_logo top-logo" to="/">
                    <img data={require('./../../assets/images/logo.svg')} width="131" height="13.55"  srcSet={require('./../../assets/images/logo.svg')} />
                  </Link>
                </span>
                <button ref={hamburger} onClick={isActive ? closeMenu : openMenu} style={{backgroundColor: 'black', border: 'none'}}>
                  <span className="hamburger" >
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </button>
              {/* <Link className="header_logo top-logo" to="/">
                <img data={require('./../../assets/images/logo.svg')} width="131" height="13.55"  srcSet={require('./../../assets/images/logo.svg')} />
              </Link> */}
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <div className={
                    classNames(
                      'list-reset text-xs',
                      'top-navbar',
                      'div-ul',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                      <div  className="header_first_group">
                        <div style={{marginRight: '20px'}} className="header-logo-li div-li">
                          <Link className="header_logo" to="/">
                            <img data={require('./../../assets/images/logo.svg')} width="131" height="13.55"  srcSet={require('./../../assets/images/logo.svg')} />
                          </Link>
                        </div>
                        <div className="search-bar-li div-li">
                          <div className="search-bar">
                              <i className="fa fa-search"></i>
                              <input type="text" className="header-search-bar" placeholder="Search by creators or collection" />
                          </div>
                        </div>
                    </div>
                    <div  className="header_second_group">
                      <div className={(clicked==='explore'?'active div-li':'') || "div-li"} >
                        <Link to="/explore" onClick={() => {handleClick('explore')}}>Explore</Link>
                      </div>
                      <div className={(clicked==='myitems'?'active div-li myitems':'') || "div-li myitems"}>
                        <Link to="/myitems" onClick={() => {handleClick('myitems')}}>My Items</Link>
                      </div>
                      <div className="last_two_btn">
                        <div className={(clicked==='collection_create'?'active div-li mint-header':'') || "div-li mint-header"}>
                          <Link to="/collection_create" onClick={() => {handleClick('collection_create')}}>Mint</Link>
                        </div>
                        <div className="connect-wallet div-li">
                          <Link to="/connect_wallet" className="connect_wallet"  onClick={closeMenu}><span className="connect-wallet-label">Connect Wallet</span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
