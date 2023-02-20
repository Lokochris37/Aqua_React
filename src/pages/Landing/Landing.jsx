import React from "react";
import { Navbar  } from "../../global/components/Navbar";
import { LandingScreen } from "./components/landingScreen";

function Landing(){
    return(
        <>
            <Navbar/>
            <LandingScreen/> 

        </>
    )
}

export {Landing}