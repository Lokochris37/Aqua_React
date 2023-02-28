import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
import { useScreenSize } from "../../../hooks/useMedia";

function Navbar(){

    const [isCollapse, setIsCollapse] = React.useState(false);
    const width = useScreenSize();

    React.useEffect(()=>{
        setIsCollapse(!width);
    },[width])

    return (
      <navbar className={styles.navbar}>
        <div className={styles.container}>
          <figure className={styles.logo__container}>
            <img src="/Aqua_React/img/logo.png" alt="" className={styles.logo} />
          </figure>
          <div className={styles.grid}>
            {isCollapse ? <p>A</p> : <Link to={"/Aqua_React/"}>Home</Link>}
          </div>
        </div>
      </navbar>
    );
}

export {Navbar}
