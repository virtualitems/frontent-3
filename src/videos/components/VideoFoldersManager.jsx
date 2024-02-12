import React from 'react';
import css from './VideoFoldersManager.module.css';
import VideoFoldersTable from './VideoFoldersTable';

/**
 * @description Videos manager
 * @param {Object} props
 * @returns {JSX.Element}
 */
function VideoFoldersManager(props) {
  return (
    <section className={css.videoFoldersManager}>
      <div className="row">
        <div className="col-12 mb-1">
          <div className={css.buttonsRow}>
            <div className={css.leftButtons}>

              <div className={`${css.leftButton} ${css.leftButtonActive} mr-4`}>
                <i className="fa-solid fa-layer-group mr-2"></i>
                Biblioteca
              </div>

              <div className={css.leftButton}>
                <i className="fa-solid fa-trash-alt mr-2"></i>
                Papelera
              </div>

            </div>
            <div className={css.rightButtons}>

              <div className={`${css.rightButton} mr-4`}>
                <button>
                  <i className="fa-regular fa-folder mr-2"></i>
                  Nueva carpeta
                </button>
              </div>

              <div className={`${css.rightButton} ${css.rightButtonActive} mr-4`}>
                <button>
                  <i className="fa-regular fa-circle-play mr-2"></i>
                  Nuevo video
                </button>
              </div>

            </div>
          </div>
        </div>
        <div className="col-12 mb-1">
          <div className={css.searchField}>
            <span className={css.searchFieldIcon}>
              <i className="fas fa-search"></i>
            </span>
            <input className={css.inputSearch} type="search" placeholder="Buscar video" />
          </div>
        </div>
        <div className="col-12 mb-1">
          <VideoFoldersTable />
        </div>
      </div>
    </section>
  );
}


export default VideoFoldersManager;
