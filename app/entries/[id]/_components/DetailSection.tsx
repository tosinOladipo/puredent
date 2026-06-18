"use client";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useEntryForm } from "@/utils/custom-hooks/entryCustomHook";
import { RootState } from "@/app/store/store";
import PopUp from "./PopUp";

import { Heart, Calendar, Gift, Award, HeartIcon } from "lucide-react";
import VotePopUp from "./VotePopUp";
import { useVoteHook } from "@/utils/custom-hooks/voteCustomHook";

const DetailSection = ({ id }: { id: string }) => {
  const { allEntries } = useSelector((state: RootState) => state.entries);
  const { fetchAllEntries } = useEntryForm();
  const { votes, fetchUserVotes } = useVoteHook();

  useEffect(() => {
    if (allEntries === null) {
      fetchAllEntries();
    }
  }, [allEntries, fetchAllEntries]);


  useEffect(() => {
    fetchUserVotes(id)
  }, []);


  const totalScore = allEntries
    ?.filter((entry) => entry.username === id)
    .reduce((sum, entry) => sum + entry.totalPoint, 0);

  return (
    <section className="flex flex-col items-center bg-linear-to-b from-slate-50 to-blue-50 text-black pb-12">
      <img src="/img/welcome.png" alt="Welcome" className="w-50 mt-6" />

      <h1 className="flex gap-2 text-4xl md:text-6xl/18 font-medium mb-6 bg-clip-text leading-tight tracking-tighter">
        Smile Diary{" "}
        <span className="text-blue-600 flex">
          Tosin
          <img
            src="/img/spark.png"
            alt="Welcome"
            className="w-5 h-5 md:w-10 md:h-10"
          />
        </span>
      </h1>

      <p className="text-sm md:text-base/6 text-zinc-600 bg-clip-text text-center max-w-lg mt-2 px-4">
        This is your space to shine, share your smile journey and inspire others
        every single day.
      </p>

      <div className="flex flex-wrap justify-center bg-white p-6 gap-6 mt-10 mb-10 md:rounded-lg md:shadow-lg">
        <div className="flex items-center gap-2">
          <Calendar className="text-blue-600" />
          <span>Track Progress</span>
        </div>

        <div className="flex items-center gap-2">
          <Heart className="text-blue-600" />
          <span>Inspire Confidence</span>
        </div>

        <div className="flex items-center gap-2">
          <Gift className="text-blue-600" />
          <span>Win Rewards</span>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="badge flex items-center">
          <Award className="w-6 h-6" />
          <span className="text-2xl font-bold">{totalScore}</span>
        </div>
        <div className="likes flex items-center">
          <HeartIcon className="w-6 h-6" />
          <span className="text-2xl font-bold">{votes.length}</span>
        </div>
      </div>

      <VotePopUp id={id}/>

      <p className="mt-3 text-gray-500 text-xs">
        Every vote brings you closer to the top!
      </p>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 px-4">
        {allEntries
          ?.filter((entry) => entry.username === id)
          .map((entry) => (
            <PopUp key={entry.id} entry={entry} />
          ))}
      </div>
    </section>
  );
};

export default DetailSection;
