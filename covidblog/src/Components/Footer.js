import React from 'react';
import './Footer.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

import FacebookIcon from '@material-ui/icons/Facebook';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className='main-footer'>
        <div className='container'>
          <div className='row'>
            {/* Column1 */}
            <div className='col'>
              <h2>CovidSafe</h2>
              <a href='https://www.youtube.com/channel/UCyV1cy9ycsMnp4Krdx2GVZw'>
                <YouTubeIcon />
              </a>
              <a href='https://www.youtube.com/channel/UCyV1cy9ycsMnp4Krdx2GVZw'>
                <InstagramIcon />
              </a>
              <a href='https://www.youtube.com/channel/UCyV1cy9ycsMnp4Krdx2GVZw'>
                <FacebookIcon />
              </a>

              <a href='https://www.youtube.com/channel/UCyV1cy9ycsMnp4Krdx2GVZw'>
                <TwitterIcon />
              </a>
              {/* <p>
                &copy;{new Date().getFullYear()} CovidSafe. All Rights Reserved.
              </p> */}
            </div>

            {/* <p>
                Made with <FavoriteOutlinedIcon style={{ color: 'red' }} />{' '}
                Heidelberg
              </p> */}

            {/* Column2 */}
            {/* <div className='col'>
              <h3>Where we work</h3>
              <dl>
                <dt>Gründer Institut,</dt>
                <dt>Kurfürsten-Anlage 52</dt>
                <dt>69115 Heidelberg, Germany</dt>
              </dl>
            </div> */}
            {/* Column3 */}
            {/* <div className='col__social'>
              <h2>Find us on</h2>
              <div className='banner_icon'>
                <a href='https://www.instagram.com/spheriearth/'>
                  <InstagramIcon />
                </a>
                <a href='https://www.facebook.com/Spheriearth/'>
                  <FacebookIcon />
                </a>
                <a href='https://www.youtube.com/channel/UCyV1cy9ycsMnp4Krdx2GVZw'>
                  <YouTubeIcon />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
