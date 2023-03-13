import React from "react";
import styles from "./AddUser.module.css";

function AddUser() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Registrar entrada de usuarios</h1>
      <form action="" className={styles.form}>
        <label className={styles.label}>Nombre</label>
        <input type="text" className={styles.input} />
        <label className={styles.label}>Apto</label>
        <input type="number" className={styles.input} />
        <label className={styles.label}>Calidad</label>
        <select type="text" className={styles.input}>
          <option value="Visitante">Visitante</option>
          <option value="Residente">Residente</option>
        </select>
        <button type="submit" className={styles.submit}>Registrar</button>
      </form>
    </div>
  );
}

export { AddUser };
