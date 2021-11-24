import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Feed</h2>
      </div>
      <TweetBox />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
