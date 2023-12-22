import { useState } from "react";
import { useEffect } from "react";

let ClockTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Interval Set up");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Cleared Interval");
    };
  }, []);

  return (
    <div className="fw-bold">
      This is the current time: {time.toLocaleString()}
    </div>
  );
};

export default ClockTime;
