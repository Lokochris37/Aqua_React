import React from "react";
import { WithAuth } from "../../global/components/withAuth/withAuth";
import { Navbar } from "../../global/components/Navbar/index";
import { Index } from "./components/Index";
import { RecentRecords } from "./components/RecentRecords";
import { AddUser } from "./components/AddUser";
import styles from './UserPanel.module.css'
import { Calculator } from "./components/Calculator";
import { useParams } from "react-router-dom";

function UserPanel(props){
  const {userId} = useParams()
    return (
      <>
        <Navbar />
        <Index>
          <RecentRecords  id={userId}/>
          <AddUser />
          <Calculator/>
        </Index>
      </>
    );
}


const UserPanelWithAuth = WithAuth(UserPanel)
export {UserPanelWithAuth}