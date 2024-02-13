import React, { useState } from 'react';
import css from './SideMenu.module.css';
import PlanCard from './PlanCard';


/**
 * @description Left side menu
 * @param {Object} props
 * @returns {JSX.Element}
 */
function SideMenu(props) {

  const items = props.items;

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
                  <div className={`${css.itemIcon} ${item.active ? css.itemIconActive : ''}`}>
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
