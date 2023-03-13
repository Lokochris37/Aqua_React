import React from "react";
import styles from "./Calculator.module.css";

function Calculator() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Calcula ...</h1>
      <form action="" className={styles.form}>
        <div className={styles.cont__form}>
          <aside>
            <label htmlFor="" className={styles.label}>
              Realmente no lo se
            </label>
            <input type="text" className={styles.input} />
          </aside>
          <aside>
            <label htmlFor="" className={styles.label}>
              Realmente no lo se
            </label>
            <input type="text" className={styles.input} />
          </aside>
          <aside>
            <label htmlFor="" className={styles.label}>
              Realmente no lo se
            </label>
            <input type="text" className={styles.input} />
          </aside>
          <aside>
            <label htmlFor="" className={styles.label}>
              Realmente no lo se
            </label>
            <input type="text" className={styles.input} />
          </aside>
          <aside>
            <label htmlFor="" className={styles.label}>
              Realmente no lo se
            </label>
            <input type="text" className={styles.input} />
          </aside>
        </div>

        <button className={styles.inputn_btn}>Calcular</button>
      </form>
    </div>
  );
}

export { Calculator };
