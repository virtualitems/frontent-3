import React from 'react';
import css from './VideosTable.module.css';

/**
 * @description Videos table component
 * @param {Object} props
 * @returns {JSX.Element}
 */
function VideosTable(props) {

  const propsitems = [
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
    <div className="row">
      <div class="col-12 p-0">

        <table width="100%" className={css.table}>
          <colgroup>
            <col width="5%" />
            <col width="48%" />
            <col width="12%" />
            <col width="12%" />
            <col width="21%" />
          </colgroup>
          <thead>
            <tr className={css.trHeader}>
              <th className={css.thCell}>
                <div className={css.selectBox}>
                  <input type="checkbox" />
                </div>
              </th>
              <th className={css.thCell}>Nombre</th>
              <th className={css.thCell}>Duración</th>
              <th className={css.thCell}>Tamaño</th>
              <th className={css.thCell}>Última modificación</th>
            </tr>
          </thead>
          <tbody className={css.tbody}>
            {
              propsitems.map((item, index) => {
                return (
                  <tr key={index} className={css.trItem}>
                    <td>
                      <div className={css.selectBox}>
                        <input type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className={css.iconItem}>
                        <i className="fa-regular fa-folder"></i>
                      </div>
                      {item.name}
                    </td>
                    <td>{item.duration}</td>
                    <td>{item.size}</td>
                    <td>{item.lastModification}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>
    </div>
  );
}


export default VideosTable;
