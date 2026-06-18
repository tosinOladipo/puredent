'use client'

import { CreateAndEditEntryType } from "@/utils/schema";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner"
import { createVoteAction, getEntryVoteAction } from "../actions/vote/action";
import { VoterType } from "../types";
import { voterInfo } from "@/app/store/slices/voteSlice";


export function useVoteHook() {

    const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
const [votes, setVotes] = useState<VoterType[]>([]);


  //Submit vote
  const submitVote = async (values: VoterType) => {
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const voteCast = await createVoteAction(values);

      if (voteCast) {
        dispatch(voterInfo(voteCast));
        setSuccess("Voted successfully!");
        toast("Voted successfully",{
          description: "Cast your next vote in the next 24hrs",
        })
      } else {
        throw new Error("Failed to cast vote");
      }
    } catch (err: unknown) {
      setError("Something went wrong. Please try again.");
      toast(error, {
            description: "Unable to vote",
          })
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  // Return the state and the submit function



  //Fetch vote count
  const fetchUserVotes = async (username: string) => {
      setLoading(true);
      try {
        const counts = await getEntryVoteAction(username);
        if (counts) {
        setVotes(counts);
      } else {
        throw new Error("Failed to cast vote");
      }
      } catch (err) {
        console.error("Failed to fetch entries:", err);
        setError("Failed to fetch entries.");
      } finally {
        setLoading(false);
      }
    };




    return {
    loading,
    success,
    error,
    submitVote,
    fetchUserVotes,
    votes
  }
}