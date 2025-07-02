"use client";
import { useState, useEffect } from "react";

export default function OTPVerification() {
  const [timer, setTimer] = useState(60);
  const [isActive, setIsActive] = useState(true);
  //   const [interval, setInterval] = useState(true);

  useEffect(() => {
    let interval;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    // return () => clearInterval(interval);
  }, [isActive, timer]);

  const handleResend = () => {
    setTimer(60);
    setIsActive(true);
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h2>Enter OTP</h2>
      <div style={{ fontSize: "24px", marginBottom: "10px" }}>
        {timer > 0 ? `00:${timer < 10 ? `0${timer}` : timer}` : "00:00"}
      </div>
      <button onClick={handleResend} disabled={timer > 0}>
        Resend Code
      </button>
    </div>
  );
}
