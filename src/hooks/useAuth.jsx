import { useEffect, useState } from "react";
import { app } from "../global/firebase";
import {
  onAuthStateChanged,
  getAuth
} from "firebase/auth";


    function useAuth(config) {

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
        return () => unsubscribe();
      }, []);

      return { user };
    };

export {useAuth}