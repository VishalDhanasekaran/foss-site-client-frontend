import { useEffect, useRef } from "react";
import GetStarted from "../GetStarted";

const RedirectToOpenCrew = () => {
    const hasRedirected = useRef(false);

    /*useEffect(() => {
      if(!hasRedirected.current)
      {
        hasRedirected.current = true;
        window.open('https://opencrew.onrender.com/', '_blank');
      }
      
    }, []);*/

    return (
      <div className={`flex flex-col py-10`}>
        <h2 className={`font-courier font-semibold text-5xl text-gradient w-full text-center text-gradient`}>
          Redirect to OpenCrew, FOSS-CIT's Recruitment Portal <br/>
          the Gateway of Open Source World
        </h2>
        <GetStarted text={'Click here'}/>
      </div>
    );
  }

export default RedirectToOpenCrew;