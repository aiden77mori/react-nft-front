import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
        <div className="widget">
          <ul>
            <li><a href="/artists">Artists</a></li>
            <li><a href="/collection">Collection</a></li>
          </ul>
        </div>
        <div className="widget">
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Reddit</a></li>
            <li><a href="#">Discort</a></li>
            <li><a href="#">Email</a></li>
            <li><a href="#">Telegram</a></li>
          </ul>
        </div>
        <div className="widget">
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="#">Confused about NFT</a></li>
          </ul>
        </div>
    </nav>
  );
}

export default FooterNav;