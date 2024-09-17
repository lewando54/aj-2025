"use client";

import { useEffect, useState } from "react";
import { Montserrat } from "../Fonts";

export interface ITimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Counter({weddingDate}: {weddingDate: string}) {
  const weddingDateTime = new Date(weddingDate);
  const currentDate = new Date();
  const timeDifference = weddingDateTime.getTime() - currentDate.getTime();
  const [time, setTime] = useState<ITimeLeft>({
    months: Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30)),
    days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
  });

  const addY = (number: number) => {
    return [2, 3, 4].includes(number % 10) && !([12, 13, 14].includes(number)) ? 'y' : number === 1 ? 'a' : '';
  };

  const yOrE = (number: number) => {
    return [2, 3, 4].includes(number % 10) && !([12, 13, 14].includes(number)) ? 'ące' : 'ęcy';
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const weddingDateTime = new Date(weddingDate);
      const currentDate = new Date();
      const timeDifference = weddingDateTime.getTime() - currentDate.getTime();
      setTime({
        months: Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30)),
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="m-10 text-center bg-amber-500 bg-opacity-20 border border-amber-400 border-opacity-20 backdrop-blur-md rounded-xl flex flex-col p-10 w-min">
        <h1 className="text-4xl">Do ślubu pozostało:</h1>
        <div className="flex justify-center">
            <div className="flex flex-col items-center m-5 w-20">
                <span className={`text-6xl ${Montserrat.className}`}>{time.months}</span>
                <span className="text-lg">{`Miesi${yOrE(time.months)}`}</span>
            </div>
            <div className="flex flex-col items-center m-5 w-20">
                <span className={`text-6xl ${Montserrat.className}`}>{time.days}</span>
                <span className="text-lg">{time.days === 1 ? 'Dzień' : 'Dni'}</span>
            </div>
            <div className="flex flex-col items-center m-5 w-20">
                <span className={`text-6xl ${Montserrat.className}`}>{time.hours}</span>
                <span className="text-lg">{`Godzin${addY(time.hours)}`}</span>
            </div>
            <div className="flex flex-col items-center m-5 w-20">
                <span className={`text-6xl ${Montserrat.className}`}>{time.minutes}</span>
                <span className="text-lg">{`Minut${addY(time.minutes)}`}</span>
            </div>
            <div className="flex flex-col items-center m-5 w-20">
                <span className={`text-6xl ${Montserrat.className}`}>{time.seconds}</span>
                <span className="text-lg">{`Sekund${addY(time.seconds)}`}</span>
            </div>
        </div>
    </div>
  );
}