import React, { useState } from 'react';
import '../css/TweetBox.css';
import { Avatar, Button } from '@mui/material';
import db from '../firebase';
import firebase from 'firebase/compat/app';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault(); //stop the refresh

    db.collection('posts').add({
      displayName: 'Thomas DEBLAY',
      username: 'tommmyyyyy',
      verified: false,
      text: tweetMessage,
      image: tweetImage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      avatar:
        'https://lh3.googleusercontent.com/a-/AFdZucpsLDncLtJZJIOSwHHxN40bRTRgQ6_RrPu4GmuG=s96-c',
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/a-/AFdZucpsLDncLtJZJIOSwHHxN40bRTRgQ6_RrPu4GmuG=s96-c" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Quoi de neuf?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optionnel: Entrer l'url d'une image"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
