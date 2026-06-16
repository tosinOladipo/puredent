'use client'

import { CreateAndEditEntryType } from "@/utils/schema";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner"
import { createEntryAction, getEntriesAction } from "../actions/entry/action";
import { aiStage } from "@/app/store/slices/stageSlice";
import { UploadType } from "../types";
import { fetchEntries } from "@/app/store/slices/entrySlice";


export function useEntryForm() {

    const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploads, setUploads] = useState<UploadType[]>([]);

  //Submit entry form
  const submitEntryForm = async (values: CreateAndEditEntryType) => {
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      await createEntryAction(values);
      setSuccess("Entry submitted successfully!");
      toast("User created",{
        description: "AI is reviewing your entry, please wait for the feedback",
      })
    } catch (err: unknown) {
      setError("Something went wrong. Please try again.");
      toast(error, {
            description: "Unable to submit entry",
          })
      console.error(err);
    } finally {
      setLoading(false);
      dispatch(aiStage());
    }
  };
  // Return the state and the submit function



//Fetch entry list
const fetchAllEntries = async () => {
    setLoading(true);
    try {
      const entryList = await getEntriesAction();
      setUploads(entryList.data);
      dispatch(fetchEntries(entryList.data));
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
    submitEntryForm,
    fetchAllEntries,
    uploads,
  }
}