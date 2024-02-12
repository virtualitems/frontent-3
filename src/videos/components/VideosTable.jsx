import React from 'react';
import css from './VideosTable.module.css';

/**
 * @description 
 * @param {Object} props
 * @returns {JSX.Element}
 */
function VideosTable(props) {

  const propsitems = [
    {
      name: 'Afiliado Master',
      videos: 8,
      size: '7.3 GB',
      lastModification: '30/may/2023'
    },
    {
      name: 'BeMaster',
      videos: 21,
      size: '1.4 GB',
      lastModification: '22/jun/2022'
    },
    {
      name: 'Comizzión',
      videos: 10,
      size: '284 MB',
      lastModification: '11/sep/2021'
    },
    {
      name: 'Creador de Contenido',
      videos: 2,
      size: '4.3 GB',
      lastModification: '21/jun/2023'
    },
    {
      name: 'Exportados Wil',
      videos: 14,
      size: '500 MB',
      lastModification: '5/abr/2023'
    },
    {
      name: 'Afiliado Master',
      videos: 8,
      size: '7.3 GB',
      lastModification: '30/may/2023'
    },
    {
      name: 'BeMaster',
      videos: 21,
      size: '1.4 GB',
      lastModification: '22/jun/2022'
    },
    {
      name: 'Comizzión',
      videos: 10,
      size: '284 MB',
      lastModification: '11/sep/2021'
    },
    {
      name: 'Creador de Contenido',
      videos: 2,
      size: '4.3 GB',
      lastModification: '21/jun/2023'
    },
    {
      name: 'Exportados Wil',
      videos: 14,
      size: '500 MB',
      lastModification: '5/abr/2023'
    },
    {
      name: 'Afiliado Master',
      videos: 8,
      size: '7.3 GB',
      lastModification: '30/may/2023'
    },
    {
      name: 'BeMaster',
      videos: 21,
      size: '1.4 GB',
      lastModification: '22/jun/2022'
    },
    {
      name: 'Comizzión',
      videos: 10,
      size: '284 MB',
      lastModification: '11/sep/2021'
    },
    {
      name: 'Creador de Contenido',
      videos: 2,
      size: '4.3 GB',
      lastModification: '21/jun/2023'
    },
    {
      name: 'Exportados Wil',
      videos: 14,
      size: '500 MB',
      lastModification: '5/abr/2023'
    },
  ];


  return (
    <div className="row">
      <div class="col-12">

        <table width="100%" className={css.table}>
          <colgroup>
            <col width="5%" />
            <col width="45%" />
            <col width="15%" />
            <col width="15%" />
            <col width="21%" />
          </colgroup>
          <thead className={css.thead}>
            <tr className={css.trHeader}>
              <th className={css.thCell}>
                <div className={css.selectBox}>
                  <input type="checkbox" />
                </div>
              </th>
              <th className={css.thCell}>Nombre</th>
              <th className={css.thCell}>Videos</th>
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
                    <td>{item.videos}</td>
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
