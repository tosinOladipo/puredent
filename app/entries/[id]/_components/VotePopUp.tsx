"use client";
import { useEffect, useState } from "react";
import { useVoteHook } from "@/utils/custom-hooks/voteCustomHook";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const VotePopUp = ({ id }: { id: string }) => {
  const { submitVote } = useVoteHook();
  const { voter } = useSelector((state: RootState) => state.voter);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const storedData = localStorage.getItem("voter");

    if (!storedData) return;

    const voter = JSON.parse(storedData);
    const createdAt = new Date(voter.createdAt).getTime();

    const twentyFourHours = 24 * 60 * 60 * 1000;

    if (Date.now() - createdAt > twentyFourHours) {
      localStorage.removeItem("voter");
    }
  }, []);

  if (!mounted) return null;

  const handleVote = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    submitVote({ username: id });
  };

  return (
    <section>
      {voter ? (
        <button
          disabled
          className="flex items-center gap-2 bg-gray-300 text-white text-sm px-6 py-3 mt-6 rounded-lg transition cursor-pointer group"
        >
          Check back again to vote{" "}
        </button>
      ) : (
        <button
          onClick={handleVote}
          className="flex items-center gap-2 bg-black hover:bg-black/95 text-white text-sm px-6 py-3 mt-6 rounded-lg transition cursor-pointer group"
        >
          <div className="relative overflow-hidden">
            <span className="block transition-transform duration-200 group-hover:-translate-y-full">
              Vote for Tosin ❤️
            </span>
            <span className="absolute top-0 left-0 block transition-transform duration-200 group-hover:translate-y-0 translate-y-full">
              Vote for Tosin ❤️
            </span>
          </div>
        </button>
      )}
    </section>
  );
};

export default VotePopUp;
