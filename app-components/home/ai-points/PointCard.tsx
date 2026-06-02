
import { Button } from "@/components/ui/button";
import React from "react";

type AipointType = {
  icon: React.ReactNode;
  point: number;
  topic: string;
  desc: string
};

const PointCard = ({icon, point, topic, desc} : AipointType) => {


  return (
    <div className=" col-span-1 md:col-span-3 flex flex-col rounded-xl p-6 border border-violet-200 gap-4 max-w-sm bg-white">
      <Button size="icon" className=" bg-blue-300 rounded-full w-10 h-10">{icon}</Button>
      <div className="space-y-2">
        <span className="text-2xl text-blue-500 font-bold">{point}</span>
        <h3 className="text-base font-semibold text-slate-700">{topic}</h3>
        <p className="text-sm text-slate-600">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default PointCard;
