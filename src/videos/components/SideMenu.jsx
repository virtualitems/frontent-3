import React, { useState } from 'react';
import css from './SideMenu.module.css';
import PlanCard from './PlanCard';


/**
 * @description Left side menu
 * @param {Object} props
 * @returns {JSX.Element}
 */
function SideMenu(props) {

  const propsitems = [
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
    }
  ];

  propsitems.push(
    {
      text: 'Ayuda',
      icon: 'fas fa-question-circle',
      active: false,
    }
  );

  const items = propsitems;

  return (
    <div className={`rounded ${css.sideMenu}`}>
      <div className="row">

        <div className="col-12">
          <div className={css.header}>
            <img src="/images/menu-hero.png" alt="menu hero" width="100%" />
          </div>
        </div>

        {
          items.map((item, index) => {
            return (
              <div key={index} className={`col-12 ${css.itemContainer}`}>
                <div className={`${css.item} ${item.active ? css.itemActive : ''}`}>
                  <div className={css.itemIcon}>
                    <i className={item.icon}></i>
                  </div>
                  <div className={css.itemText}>
                    <span>{item.text}</span>
                  </div>
                </div>
              </div>
            )
          })
        }

        <div className={`col-12 ${css.planCardContainer}`}>
          <PlanCard />
        </div>

      </div>
    </div>
  );
}


export default SideMenu;
