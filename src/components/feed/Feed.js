import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';
import sample_avatar from '../../assets/sample_avatar.png';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Feed</h2>
      </div>
      <TweetBox />
      <Post
        displayName='ali sadri'
        username='a.sadri'
        verified={true}
        text='thats coool'
        image='https://media2.giphy.com/media/pW9HxoGcgVeP9eeory/giphy.gif?cid=ecf05e47bb71077a5af6ee9ede51e192740fd8aeadfa318a&rid=giphy.gif&ct=g'
        avatar={sample_avatar}
      />
    </div>
  );
};

export default Feed;
