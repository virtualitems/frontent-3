import React from 'react';
import SideMenu from './components/SideMenu';
import VideoFoldersManager from './components/VideoFoldersManager';
import css from './VideoFoldersPage.module.css';


/**
 * @description Videos web page
 * @param {Object} props
 * @returns {JSX.Element}
 */
function VideoFoldersPage(props) {

  const menuItems = [
    {
      text: 'Dashboard',
      icon: 'fa-solid fa-bars-progress',
      active: false,
    },
    {
      text: 'Videos',
      icon: 'fa-regular fa-folder',
      active: true,
    },
    {
      text: 'Player',
      icon: 'fa-regular fa-circle-play',
      active: false,
    },
    {
      text: 'Analytics',
      icon: 'fa-solid fa-chart-column',
      active: false,
    },
    {
      text: 'Configuraciones',
      icon: 'fa-solid fa-gear',
      active: false,
    },
  ];

  return (
    <div className="row p-3">
      <div className="col-3">
        <SideMenu items={menuItems} />
      </div>
      <div className="col-9">
        <VideoFoldersManager />
      </div>
    </div>
  )
}


export default VideoFoldersPage;
