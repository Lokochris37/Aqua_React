import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useScreenSize } from "../../../../hooks/useMedia";
import { Link } from "react-router-dom";
import { app } from "../../../../global/firebase.js";
import { getAuth } from "firebase/auth";
import { useAuth } from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

function LoginForm() {

  const navigate = useNavigate();

  const width = useScreenSize();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    SignInWithEmailAndPassword(auth, email, password);
  };
  const SignInWithEmailAndPassword = async (auth, email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Usuario ha iniciado sesión
          const user = userCredential.user;
          navigate("/");
        }
      );
    } catch (error) {
      // Error de inicio de sesión
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
      console.log(errorCode, errorMessage);
    }
  };
  return (
    <>
      <div className={styles.container}>
        {width && (
          <div className={styles.desktop__container}>
            <div className={styles.back_desktop}>
              <img
                className={styles.img_desktop}
                src="/Aqua_React/img/form__image.svg"
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
            <img
              src="/Aqua_React/img/logo.png"
              alt=""
              className={styles.form__logo}
            />
          </figure>
          <div className={styles.form__container}>
            <h2 className={styles.form__title}>INICIA SESION</h2>
            <h3 className={styles.form__subtitle}>Bienvenido a Aqua</h3>
            <form onSubmit={handleFormSubmit} action="" className={styles.form}>
              <label htmlFor="email" className={styles.form__label}>
                Correo electronico
              </label>
              <input
                placeholder="Correo electronico"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className={styles.form__input}
                required={true}
              />
              <label htmlFor="password" className={styles.form__label}>
                Contraseña
              </label>
              <input
                placeholder="••••••••••••••"
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className={styles.form__input}
                required={true}
              />
              <Link to={"/register"} className={styles.form__register_link}>
                ¿No estas registrado?
              </Link>

              <button type="submit" className={styles.form__submit_btn}>
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export { LoginForm };
