import React from "react";
import { useState } from "react";

const NumberThree =()=>{
    const [time, setTime] = useState(0);

    useState(() => {
        const timer = setInterval(() => {
          setTime(time => (time + 1) % 10);
        }, 100000);
    
        return () => clearInterval(timer);
      }, []);
    
      return <div>{time}</div>;
}

export default NumberThree;