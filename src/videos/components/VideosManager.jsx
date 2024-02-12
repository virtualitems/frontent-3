import React from 'react';
import css from './VideosManager.module.css';
import VideosTable from './VideosTable';

/**
 * @description Videos manager
 * @param {Object} props
 * @returns {JSX.Element}
 */
function VideosManager(props) {
  return (
    <section className={css.videosManager}>
      <div className="row">
        <div className="col-12 mb-5">

          <div className="d-inline-block mr-3">
            <button className={css.buttonBack}>
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>

          <div className="d-inline-block">
          <span className={css.breadCrumb}>Home /</span>
          <span className={css.breadCrumbActive}>&nbsp;BeMaster</span>
          </div>
        </div>
        <div className="col-12 mb-1">
          <VideosTable />
        </div>
      </div>
    </section>
  );
}


export default VideosManager;
