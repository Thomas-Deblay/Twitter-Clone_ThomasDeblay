import React, { useEffect, useState } from 'react';
import '../css/Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from '../firebase';
import FlipMove from 'react-flip-move';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp')
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.reverse().map((doc) => doc.data()))
      );
  }, []);

  const fetchTweetData = (tweets) => {
    return tweets
      .sort((x, y) => {
        return new Date(x.timestamp) < new Date(y.timestamp) ? 1 : -1;
      })
      .reverse();
  };

  console.log(posts);
  console.log(fetchTweetData(posts));

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* Tweet Box  */}
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
