import { useEffect, useState } from "react";
const RedirectToOpenCrew = () => {
    const [change, setChange] = useState(null);
    useEffect(() => {
      window.open('https://opencrew.onrender.com/')
    }, [change]);

    return (
      <div className={`flex flex-col py-10`}>
        <h2 className={`font-courier font-semibold text-5xl text-gradient w-full text-center text-gradient`}>
          Redirecting to OpenCrew, FOSS-CIT's Recruitment Portal <br/>
          the Gateway of Open Source World
        </h2>
      </div>
    );
  }

export default RedirectToOpenCrew;