import React from "react";
import { WithAuth } from "../../global/components/withAuth/withAuth";
import { Navbar } from "../../global/components/Navbar/index";
import { Index } from "./components/Index";
import { RecentRecords } from "./components/RecentRecords";
import { AddUser } from "./components/AddUser";
import styles from './UserPanel.module.css'

function UserPanel(){

    return (
      <div classname={styles.container}>
        <Navbar />
        <Index>
          <RecentRecords />
          <AddUser />
        </Index>
      </div>
    );
}


const UserPanelWithAuth = WithAuth(UserPanel)
export {UserPanelWithAuth}