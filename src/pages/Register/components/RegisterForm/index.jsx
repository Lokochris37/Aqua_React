import React from "react";
import styles from './RegisterForm.module.css'
import { useScreenSize } from "../../../../hooks/useMedia";
import { Link } from "react-router-dom";

function RegisterForm(){

    const width = useScreenSize();

    return (
      <>
        <div className={styles.container}>
          {width && (
            <div className={styles.desktop__container}>
              <div className={styles.back_desktop}>
                <img
                  className={styles.img_desktop}
                  src="/img/form__image.svg"
                  alt=""
                />
                <h3 className={styles.desktop_title}>Bienvenido</h3>
                <p className={styles.text_desktop}>
                  Para acceder a la aplicacion debes iniciar sesión, si no estas
                  registrado, puedes hacerlo con el boton de abajo{" "}
                </p>
              </div>
            </div>
          )}
          <div className={styles.sub_container}>
            <figure>
              <img src="/img/logo.png" alt="" className={styles.form__logo} />
            </figure>
            <div className={styles.form__container}>
              <h2 className={styles.form__title}>REGISTRATE</h2>
              <h3 className={styles.form__subtitle}>Bienvenido a Aqua</h3>
              <form action="" className={styles.form}>
                <label htmlFor="email" className={styles.form__label}>
                  Correo electronico
                </label>
                <input
                  placeholder="Ingresa tu e-mail"
                  type="email"
                  id="email"
                  className={styles.form__input}
                />
                <label htmlFor="user" className={styles.form__label}>
                  Nombre de usuario
                </label>
                <input
                  placeholder="Nombre de usuario"
                  type="text"
                  id="user"
                  className={styles.form__input}
                />
                <label htmlFor="Password" className={styles.form__label}>
                  Contraseña
                </label>
                <input
                  placeholder="••••••••••••••"
                  type="password"
                  id="Password"
                  className={styles.form__input}
                />
                <Link to={"/login"} className={styles.form__register_link}>
                  ¿Ya tienes una cuenta?
                </Link>

                <button type="submit" className={styles.form__submit_btn}>
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export {RegisterForm}