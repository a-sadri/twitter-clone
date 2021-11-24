import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';
import './Widgets.css';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon classname='widgets__searchIcon' />
        <input type='text' placeholder='Search twitter' />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What's Happening</h2>

        <TwitterTweetEmbed tweetId='858551177860055040' />

        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='clever'
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={'https://facebook.com/#'}
          options={{ text: 'some text', via: 'dsadsa' }}
        />
      </div>
    </div>
  );
};

export default Widgets;
