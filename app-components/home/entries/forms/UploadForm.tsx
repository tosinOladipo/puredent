"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadSchema, UploadSchemaType } from "@/utils/schema";
import { useDispatch } from "react-redux";
import { LuUpload } from "react-icons/lu";
import { toast } from "sonner";
import { upload } from "@/app/store/slices/imageUploadSlice";
import { captionStage } from "@/app/store/slices/stageSlice";

const UploadForm = () => {
  const dispatch = useDispatch();
  const [preview, setPreview] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  // ✅ NEW: Track upload/server status
  const [status, setStatus] = useState<
    "idle" | "uploading" | "processing" | "done"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UploadSchemaType>({
    resolver: zodResolver(uploadSchema),
  });

  const onSubmit = async (data: UploadSchemaType) => {
    const file = data.image[0];
    const formData = new FormData();
    formData.append("image", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/image-upload");

    setStatus("uploading"); // ✅ Start upload

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        const percent = Math.round((e.loaded / e.total) * 100);
        setProgress(percent);

        if (percent === 100) {
          setStatus("processing"); // ✅ Upload finished, waiting for server
        }
      }
    };

    xhr.onload = () => {
      try {
        const res = JSON.parse(xhr.responseText);

        if (!res?.success) {
          toast("Server Error", { description: "Unable to upload image" });
          setStatus("idle");
          return;
        }

        dispatch(upload(res.imageUrl));
        dispatch(captionStage());
        setStatus("done"); // ✅ Completed
        toast("Upload Successful ✅", {
          description: "TV file uploaded successfully.",
        });
      } catch {
        toast("Upload Failed ❌", { description: "Invalid server response" });
        setStatus("idle");
      }
    };

    xhr.onerror = () => {
      toast("Network Error ❌", { description: "Unable to upload file" });
      setStatus("idle");
    };

    xhr.send(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <article className="flex flex-col gap-3">
        <label
          className="cursor-pointer w-full flex-col gap-3 justify-center items-center text-center border border-gray-400 border-dashed py-12 rounded-2xl"
          htmlFor="image-upload"
        >
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-20 h-20 mx-auto object-cover"
            />
          ) : (
            <div className="flex flex-col gap-3">
              <LuUpload className="w-5 h-5 mx-auto" />{" "}
              <h3 className="text-lg font-bold">Drop a photo</h3>
            </div>
          )}
          <span className="text-sm text-gray-500">
            JPG or PNG max 10mb 9:16 recommended
          </span>

          {progress > 0 && (
          <div className="w-[50%] lg:w-[30%] mx-auto bg-gray-600 rounded-full h-3 mt-4">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

          {/* ✅ Pending server message */}
        {status === "processing" && (
          <p className="text-blue-300 text-sm mt-2">
            Please wait file is uploading...
          </p>
        )}
        </label>

        <input
          id="image-upload"
          className="w-0 lg:w-0 mx-auto"
          type="file"
          accept="image/*"
          {...register("image")}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setPreview(URL.createObjectURL(file));
          }}
        />

       

      

        {preview && (
          <button
            className="border-blue-500 w-full mx-auto px-7 py-3 rounded-lg text-lg font-bold bg-blue-300"
            type="submit"
            disabled={status === "uploading" || status === "processing"}
          >
            {status === "uploading" && `Uploading... ${progress}%`}
            {status === "processing" && "Processing... please wait"}
            {status === "idle" && "UPLOAD"}
            {status === "done" && "Uploaded ✅"}
          </button>
        )}

        {errors.image?.message && (
          <p className="text-black">{String(errors.image.message)}</p>
        )}
      </article>
    </form>
  );
};

export default UploadForm;
