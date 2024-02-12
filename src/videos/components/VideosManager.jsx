import React from 'react';
import css from './VideosManager.module.css';
import VideosTable from './VideosTable';
import { useNavigate } from 'react-router-dom';


/**
 * @description Videos manager
 * @param {Object} props
 * @returns {JSX.Element}
 */
function VideosManager(props) {

  const navigate = useNavigate();

  const tableItems = [
    {
      name: 'Entrenamiento.mp4',
      size: '7.3 GB',
      duration: '04:11:37',
      lastModification: '30/may/2023',
    },
    {
      name: 'Salida-al-mercado-versión nueva.mp4',
      size: '1.4 GB',
      duration: '47:55',
      lastModification: '22/jun/2022',
    },
    {
      name: 'Como-cerrar-una-venta.mp4',
      size: '284 MB',
      duration: '10:12',
      lastModification: '11/sep/2021',
    },
    {
      name: 'Crea-un-ticket-valioso.mp4',
      size: '4.3 GB',
      duration: '03:50:22',
      lastModification: '21/jun/2023',
    },
    {
      name: 'Conquista-el-mercado-digital.mp4',
      size: '500 MB',
      duration: '5:00',
      lastModification: '5/abr/2023',
    },
    {
      name: 'Entrenamiento.mp4',
      size: '7.3 GB',
      duration: '04:11:37',
      lastModification: '30/may/2023',
    },
    {
      name: 'Salida-al-mercado-versión nueva.mp4',
      size: '1.4 GB',
      duration: '47:55',
      lastModification: '22/jun/2022',
    },
    {
      name: 'Como-cerrar-una-venta.mp4',
      size: '284 MB',
      duration: '10:12',
      lastModification: '11/sep/2021',
    },
    {
      name: 'Crea-un-ticket-valioso.mp4',
      size: '4.3 GB',
      duration: '03:50:22',
      lastModification: '21/jun/2023',
    },
    {
      name: 'Conquista-el-mercado-digital.mp4',
      size: '500 MB',
      duration: '5:00',
      lastModification: '5/abr/2023',
    }
  ];

  return (
    <section className={css.videosManager}>
      <div className="row">
        <div className="col-12 mb-5">

          <div className="d-inline-block mr-3">
            <button className={css.buttonBack} onClick={() => { navigate('/') }}>
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>

          <div className="d-inline-block">
          <span className={css.breadCrumb}>Home /</span>
          <span className={css.breadCrumbActive}>&nbsp;BeMaster</span>
          </div>
        </div>
        <div className="col-12 mb-1">
          <VideosTable items={tableItems} />
        </div>
      </div>
    </section>
  );
}


export default VideosManager;
