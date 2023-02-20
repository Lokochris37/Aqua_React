import React from 'react'
import styles from './LandingScreen.module.css'
import {  useNavigate } from 'react-router-dom';

function LandingScreen() {
  const navigate = useNavigate();

  return (
    <div className={styles.grid}>
      <div className={styles.container__info}>
        <aside className={styles.title__container}>
          <h2 className={styles.subtitle}>
            Todo <br /> es mas facil con
          </h2>
          <h1 className={styles.title}>AQUA</h1>
          <p className={styles.text}>
            Con Aqua podras administrar todo lo que respecte a las zonas humedas
            de tu propiedad horizontal, usarla es facil.
          </p>
        </aside>
        <div className={styles.btn__container}>
          <button
            onClick={() => navigate("/register")}
            className={`${styles.button} ${styles.btn__variant1}`}
          >
            Empecemos
          </button>
          <button
            onClick={() => navigate("/panel")}
            className={`${styles.button} ${styles.btn__variant2}`}
          >
            Panel de usuario
          </button>
        </div>
      </div>
      <div className={styles.container__images}></div>
    </div>
  );
}

export {LandingScreen}