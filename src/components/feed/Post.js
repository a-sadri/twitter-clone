import { Avatar } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import './Post.css';

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src='' />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post_headerText'>
            <h3>
              ALi Sadri{' '}
              <span className='post__headerSpecial'>
                <VerifiedUserIcon className='post__badge' /> @asadri
              </span>
            </h3>
          </div>

          <div className='post__headerDescription'>
            <p>building twitter clone with react</p>
          </div>
        </div>

        <img
          src='https://media2.giphy.com/media/pW9HxoGcgVeP9eeory/giphy.gif?cid=ecf05e47bb71077a5af6ee9ede51e192740fd8aeadfa318a&rid=giphy.gif&ct=g'
          alt=''
        />

        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  );
};

export default Post;
