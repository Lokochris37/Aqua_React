import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase";

const WithAuth = (Component) => {
  const WrappedComponent = (props) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const auth = getAuth(app);
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setIsLoading(false);
      });
      return () => unsubscribe();
    }, []);

    if (isLoading) {
      return <h1>Cargando...</h1>;
    } else if (user !== null) {
      console.log(user);
      return <Component {...props} />
    } else {
      return <Navigate to="/login" replace={true} />;
    }
  };

  return WrappedComponent;
};

export { WithAuth };
