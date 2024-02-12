import React from 'react';
import SideMenu from './components/SideMenu';
import VideosManager from './components/VideosManager';
import css from './VideosPage.module.css';


/**
 * @description Videos web page
 * @param {Object} props
 * @returns {JSX.Element}
 */
function VideosPage(props) {
  return (
    <div className="row p-3">
      <div className="col-3">
        <SideMenu />
      </div>
      <div className="col-9">
        <VideosManager />
      </div>
    </div>
  )
}


export default VideosPage;
