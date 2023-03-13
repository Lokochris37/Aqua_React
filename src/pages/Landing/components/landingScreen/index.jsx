import React, { useState } from "react";
import styles from "./LandingScreen.module.css";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../../../../global/firebase";


function LandingScreen() {
  const [id, setId] =  useState('')
  React.useEffect(() => {
          const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // El usuario está autenticado, aquí puedes acceder a su sesión
        setId(user.uid);
      } else {
        // El usuario no está autenticado
        console.log("No hay sesión activa");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
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
            onClick={() => navigate(`/panel/${id}/`)}
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

export { LandingScreen };
