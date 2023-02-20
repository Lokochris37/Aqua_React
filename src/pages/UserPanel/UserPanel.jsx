import React from "react";
import { WithAuth } from "../../global/components/withAuth/withAuth";
import { Navbar } from "../../global/components/Navbar/index";
import { Index } from "./components/Index";
import { RecentRecords } from "./components/RecentRecords";
import { AddUser } from "./components/AddUser";

function UserPanel(){

    return (
      <>
        <Navbar />
        <Index>
          <RecentRecords />
          <AddUser />
        </Index>
      </>
    );
}


const UserPanelWithAuth = WithAuth(UserPanel)
export {UserPanelWithAuth}