import React from 'react';
import Router from './Router';
import VideosPage from './videos/VideosPage'
import VideoFoldersPage from './videos/VideoFoldersPage';

function Bootstrap() {
  return (
    <Router
      routes={[
        { path: '/', component: <VideoFoldersPage /> },
        { path: '/videos', component: <VideosPage /> },
      ]}
    />
  )
}


export default Bootstrap;
