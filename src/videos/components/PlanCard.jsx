import React from 'react';
import css from './PlanCard.module.css';


/**
 * @description User's plan state overview card
 * @param {Object} props
 * @returns {JSX.Element}
 */
function PlanCard(props) {
  return (
    <div className={`${css.card} rounded`}>
      <div className="row">
        <div className="col-12">
          <h1 className={css.title}>
            Mi Plan - Plus
          </h1>
          <span className={css.renewal}>
            El uso se renueva el: 3-May-23
          </span>
        </div>
        <div className="col-12">
          <div className={css.currentStorage}>
            <span className={css.consumptionName}>Almacenamiento</span>
            <span className={css.consumptionValue}>24.5 GB/1 TB</span>
          </div>
          <div className={css.consumptionBar}>
            <progress value="80" max="100"></progress>
          </div>
        </div>
        <div className="col-12">
          <div className={css.currentBandwidth}>
            <span className={css.consumptionName}>Banda Mensual</span>
            <span className={css.consumptionValue}>3.4 TB/5 TB</span>
          </div>
          <div className={css.consumptionBar}>
            <progress value="70" max="100"></progress>
          </div>
        </div>
        <div className={`col-12 ${css.managePlan}`}>
          <button className={css.btnPrimary}>Administrar Plan</button>
        </div>
      </div>
    </div>
  );
}


export default PlanCard;
