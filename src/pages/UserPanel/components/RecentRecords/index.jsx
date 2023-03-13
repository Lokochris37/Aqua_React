import React, { useState } from "react";
import styles from "./RecentRecords.module.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../global/firebase";

const api = {
  A1: {
    hour: "14:00",
    cloro: "19.4 ppm",
    action: "Mantenimiento semanal realizado",
  },
};

function RecentRecords(props) {
  const [data, setData] = useState("");
  const [actions, setActions] = useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "users", props.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const doc = await docSnap.data().actions; 
        setData(doc);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    fetchData();
  }, []);
  React.useEffect(() => {
    console.log(data);
    if (data.length >= 3){
      setActions(data.slice(-3))
      console.log(actions);

    }else{
      setActions(data)
    }
  }, [data]);


  return (
    <div className={styles.container}>
      <h2 className={styles.Title}>Historial reciente</h2>
      <div className={styles.records__container}>
        {actions ? actions.map((action) => { 
          const formattedDate = new Date(action.date).toLocaleString();

          return (
          <div className={styles.record}>
            <div className={styles.param__container}>
              <span className={styles.param__legend}>
                <img src="" alt="" />
                <p className={styles.param__text}>Parametros</p>
              </span>
              <span className={styles.param__hour}>{formattedDate}</span>
            </div>
            <span className={styles.parameters}>
              <p className={styles.parameter}>Cloro Libre: </p>
              <p className={styles.param__variable}>{action.cloro}</p>
            </span>
            <span className={styles.action}>
              <img src="" alt="" />
              <p className={styles.action__legend}>Accion Realizada</p>
            </span>
            <p className={styles.action__text}>{action.realitedAction}</p>
          </div>
        );
      }) : (
      <h1>Cargando...</h1>
        )}
      </div>
      <button className={styles.btn__seeMore}>Ver mas</button>
    </div>
  );
}

export { RecentRecords };
