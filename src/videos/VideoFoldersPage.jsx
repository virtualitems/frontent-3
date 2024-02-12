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
  return (
    <div className="row p-3">
      <div className="col-3">
        <SideMenu />
      </div>
      <div className="col-9">
        <VideoFoldersManager />
      </div>
    </div>
  )
}


export default VideoFoldersPage;
