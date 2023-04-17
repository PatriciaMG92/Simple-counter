import React from "react";
import { useState } from "react";

const NumberFour =()=>{
    const [time, setTime] = useState(0);

    useState(() => {
        const timer = setInterval(() => {
          setTime(time => (time + 1) % 10);
        }, 1000000);
    
        return () => clearInterval(timer);
      }, []);
    
      return <div>{time}</div>;
}

export default NumberFour;