import { Avatar, Button } from '@mui/material';
import './TweetBox.css';
import sample_avatar from '../../assets/sample_avatar.png';

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src={sample_avatar} />
          <input type='text' placeholder="What's happening?" />
        </div>
        <input
          className='tweetBox__imageInput'
          type='text'
          placeholder='Enter image URL'
        />
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
