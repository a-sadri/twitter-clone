import TweetBox from './TweetBox';
import './Feed.css';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Feed</h2>
      </div>
      <TweetBox />
    </div>
  );
};

export default Feed;
