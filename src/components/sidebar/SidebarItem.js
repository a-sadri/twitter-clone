import './SidebarItem.css';

const SidebarItem = ({ active, text, Icon }) => {
  return (
    <div className={`sidebarItem ${active && 'sidebarItem--active'}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarItem;
