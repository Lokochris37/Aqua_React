import React from "react";
import styles from './RecentRecords.module.css'

function RecentRecords(){
    return (
      <div className={styles.container}>
        <h2 className={styles.Title}>Historial reciente</h2>
        <div className={styles.records__container}>
          <div className={styles.record}>
            <div className={styles.param__container}>
                <span className={styles.param__legend}>
                    <img src="" alt="" />
                    <p className={styles.param__text}>Parametros</p>
                </span>
                <span className={styles.param__hour}>14:00</span>
            </div>
            <span className={styles.parameters}>
                <p className={styles.parameter}>Cloro Libre: </p>
                <p className={styles.param__variable}>19.4 ppm</p>
            </span>
            <span className={styles.action}>
                <img src="" alt="" />
                <p className={styles.action__legend}>Accion Realizada</p>
            </span>
            <p className={styles.action__text}>Mantenimiento semanal realizado</p>
          </div>
          <div className={styles.record}>
            <div className={styles.param__container}>
                <span className={styles.param__legend}>
                    <img src="" alt="" />
                    <p className={styles.param__text}>Parametros</p>
                </span>
                <span className={styles.param__hour}>14:00</span>
            </div>
            <span className={styles.parameters}>
                <p className={styles.parameter}>Cloro Libre: </p>
                <p className={styles.param__variable}>19.4 ppm</p>
            </span>
            <span className={styles.action}>
                <img src="" alt="" />
                <p className={styles.action__legend}>Accion Realizada</p>
            </span>
            <p className={styles.action__text}>Mantenimiento semanal realizado</p>
          </div>
          <div className={styles.record}>
            <div className={styles.param__container}>
                <span className={styles.param__legend}>
                    <img src="" alt="" />
                    <p className={styles.param__text}>Parametros</p>
                </span>
                <span className={styles.param__hour}>14:00</span>
            </div>
            <span className={styles.parameters}>
                <p className={styles.parameter}>Cloro Libre: </p>
                <p className={styles.param__variable}>19.4 ppm</p>
            </span>
            <span className={styles.action}>
                <img src="" alt="" />
                <p className={styles.action__legend}>Accion Realizada</p>
            </span>
            <p className={styles.action__text}>Mantenimiento semanal realizado</p>
          </div>
        </div>
        <button className={styles.btn__seeMore}>Ver mas</button>
      </div>
    );
}

export {RecentRecords}