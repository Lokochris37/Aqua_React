import { useEffect, useState } from "react";
import { app } from "../global/firebase";
import {
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";


function useAuth(config) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return ()=> unsubscribe();;
  }, []);

  const SignInWithEmailAndPassword = async(auth, email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Usuario ha iniciado sesión
        const user = userCredential.user;
        navigate("/");
        });
    }catch(error) {
        // Error de inicio de sesión
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
        console.log(errorCode, errorMessage);
    }
  }
  const CreateUserWithEmailAndPassword = async(auth, email, password) => {
    try {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          console.log("Usuario registrado:", userCredential.user);
          navigate("/login");
        }
      );
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error al registrar usuario:", error);
    }
  }
return{
    user,
    SignInWithEmailAndPassword,
    CreateUserWithEmailAndPassword,
}
}

export {useAuth}