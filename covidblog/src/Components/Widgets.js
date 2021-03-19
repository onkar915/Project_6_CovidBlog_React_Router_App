import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__widgetContainer'>
        <h2>What's happening</h2>

        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='WHO'
          options={{ height: 1000 }}
        />

        <TwitterShareButton
          url={
            'https://twitter.com/WHO?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
          }
        />
      </div>
    </div>
  );
}

export default Widgets;
