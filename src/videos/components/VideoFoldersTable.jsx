import React from 'react';
import css from './VideoFoldersTable.module.css';

/**
 * @description Videos table component
 * @param {Object} props
 * @returns {JSX.Element}
 */
function VideoFoldersTable(props) {

  const items = props.items;

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
              <th className={css.thCell}>Videos</th>
              <th className={css.thCell}>Tamaño</th>
              <th className={css.thCell}>Última modificación</th>
            </tr>
          </thead>
          <tbody className={css.tbody}>
            {
              items.map((item, index) => {
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


export default VideoFoldersTable;
