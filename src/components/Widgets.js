import React from 'react';
import '../css/Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="SearchTwitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's up</h2>
        <TwitterTweetEmbed tweetId="1564283022375063561" />

        {/* <TwitterTimelineEmbed
          options={{ tweetLimit: '5', height: 300 }}
          sourceType="profile"
          screenName="TommyShelbiiiii"
          className="Widgets__twitterTimeline"
          placeholder={<div css={{ height: 400 }} />}
        /> */}
      </div>
    </div>
  );
};

export default Widgets;
