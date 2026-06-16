"use client";
import { Brain } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RootState } from "@/app/store/store";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import * as z from "zod";
import { createAndEditEntrySchema, CreateAndEditEntryType } from "@/utils/schema";
import { aiResultType } from "@/utils/types";
import { Button } from "@/components/ui/button";
import { useEntryForm } from "@/utils/custom-hooks/entryCustomHook";

const AiReviewForm = () => {

   const { submitEntryForm } = useEntryForm();
    
  const [loading, setLoading] = useState(true);
  const [aiResult, setAiResult] = useState<aiResultType | null>(null);

  const { user } = useSelector((state: RootState) => state.user);
  const { imgUpload } = useSelector((state: RootState) => state.imgUpload);
  const { caption } = useSelector((state: RootState) => state.caption);

  const form = useForm<z.infer<typeof createAndEditEntrySchema>>({
    resolver: zodResolver(createAndEditEntrySchema),
    defaultValues: {
      fullname: user?.name ?? "",
      username: user?.username ?? "",
      phonenumber: user?.phonenumber ?? "",
      imageUrl: imgUpload ?? "",
      caption: caption ?? "",
      confidencePoint: 0,
      confidenceReason: "",
      smilePoint: 0,
      smileReason: "",
      creativityPoint: 0,
      creativityReason: "",
      totalPoint: 0,
    },
  });

  const aiInput = {
    imageUrl: imgUpload ?? "",
  };

  const GenerateAIscore = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/ai-model", aiInput);
      const content = result?.data?.content;

      const cleaned = content.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      setAiResult(parsed);
    } catch (error) {
      toast("Server Error, Try Again");
    } finally {
      setLoading(false);
    }
  };


   useEffect(() => {
      GenerateAIscore();
    }, []);


   // update form values when AI result arrives
  useEffect(() => {
    if (aiResult) {
      form.reset({
        ...form.getValues(),
        confidencePoint: aiResult.confidence.confidencePoint,
        confidenceReason: aiResult.confidence.confidenceReason,
        smilePoint: aiResult.smile.smilePoint,
        smileReason: aiResult.smile.smileReason,
        creativityPoint: aiResult.creativity.creativityPoint,
        creativityReason: aiResult.creativity.creativityReason,
        totalPoint: aiResult.totalPoints,
      });
    }
  }, [aiResult, form]);


  const onSubmit = async (values: CreateAndEditEntryType) => {
    await submitEntryForm(values);
  };

  return (
    <section className="flex flex-col gap-3">
      <article className="cursor-pointer w-full flex-col gap-3 justify-center items-center text-center border border-gray-400 border-dashed py-12 rounded-2xl">
        <Brain className="w-12 h-12 text-blue-500 mx-auto" />
        <p className="font-semibold text-gray-700">
          AI is reviewing your submission...
        </p>
      </article>

    {!loading && aiResult && (
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4"
      >
        <Button
          type="submit"
          className="w-full py-6 capitalize font-bold cursor-pointer"
        >
          Submit Your Entry
        </Button>
      </form>
    )}
    </section>
  );
};

export default AiReviewForm;
