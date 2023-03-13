import React, {useState} from "react";
import styles from './RegisterForm.module.css'
import { useScreenSize } from "../../../../hooks/useMedia";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../../../global/firebase.js";
import { getAuth  } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../../../global/firebase.js";
import { doc, setDoc, collection } from "firebase/firestore";

const auth = getAuth(app);


function RegisterForm(){
  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [coPassword, setCoPassword] = useState("");
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCoPasswordChange = (event) => {
    setCoPassword(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

   const CreateUserWithEmailAndPassword = async (
     auth,
     name,
     email,
     password
   ) => {
     try {
       const userCredential = await createUserWithEmailAndPassword(
         auth,
         email,
         password
       );
       const user = userCredential.user;
       await setDoc(doc(db, "users", user.uid), { name, email });
       navigate("/login");
     } catch (error) {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.error("Error al registrar usuario:", error);
     }
   };

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    if(password === coPassword){
      CreateUserWithEmailAndPassword(auth, name, email, password);
    } 
    else{
      alert("Las contraseñas no coinciden")
    }
    
  }


    const width = useScreenSize();

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
                onClick={() => navigate("/Aqua_React")}
              />
            </figure>
            <div className={styles.form__container}>
              <h2 className={styles.form__title}>REGISTRATE</h2>
              <h3 className={styles.form__subtitle}>Bienvenido a Aqua</h3>
              <form
                action=""
                onSubmit={handleFormSubmit}
                className={styles.form}
              >
                <label htmlFor="email" className={styles.form__label}>
                  Nombre de usuario
                </label>
                <input
                  placeholder="Nombre"
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className={styles.form__input}
                  required={true}
                />
                <label htmlFor="email" className={styles.form__label}>
                  Correo electronico
                </label>
                <input
                  placeholder="Ingresa tu e-mail"
                  type="email"
                  id="email"
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
                  required={true}
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={styles.form__input}
                />
                <label htmlFor="co-password" className={styles.form__label}>
                  Contraseña
                </label>
                <input
                  placeholder="••••••••••••••"
                  type="password"
                  id="co-password"
                  name="co-password"
                  value={coPassword}
                  required={true}
                  onChange={handleCoPasswordChange}
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