import SidebarItem from './SidebarItem';
import './Sidebar.css';
import Button from '@mui/material/Button';

// MUI Icons
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Sidebar = () => {
  return (
    <div classname='sidebar'>
      <TwitterIcon />

      <SidebarItem active Icon={HomeIcon} text='Home' />
      <SidebarItem Icon={SearchIcon} text='Explore' />
      <SidebarItem Icon={NotificationsNoneIcon} text='Notifications' />
      <SidebarItem Icon={MailOutlineIcon} text='Messages' />
      <SidebarItem Icon={BookmarkBorderIcon} text='Bookmarks' />
      <SidebarItem Icon={ListAltIcon} text='Lists' />
      <SidebarItem Icon={PermIdentityIcon} text='Profile' />
      <SidebarItem Icon={MoreHorizIcon} text='More' />

      <Button variant='outlined' className='sidebar__tweet' fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
