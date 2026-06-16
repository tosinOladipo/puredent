"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CustomFormField } from "@/components/form-components/FormComponents";
import { createAndEditUserSchema, CreateAndEditUserType } from "@/utils/schema";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "@/app/store/slices/userSlice";
import { aiStage } from "@/app/store/slices/stageSlice";
import { RootState } from "@/app/store/store";

const UserForm = () => {

    const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  // 1. Define your form.
  const form = useForm<z.infer<typeof createAndEditUserSchema>>({
    resolver: zodResolver(createAndEditUserSchema),
    defaultValues: {
      name: user?.name ?? "",
      username: user?.username ?? "",
      phonenumber: user?.phonenumber ?? "",
      checkIn: "morning",
    },
  });

  const onSubmit = async (values: CreateAndEditUserType) => {
        dispatch(profile(values));
        dispatch(aiStage());
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4"
    >
      
      <CustomFormField
        name="name"
        labelText="Your Full Name"
        control={form.control}
        placeholder="Enter your full name"
        className="border bg-blue-50 py-4 text-black text-xs"
      />

      <CustomFormField
        name="username"
        labelText="Your Username"
        control={form.control}
        placeholder="Enter your username"
        className="border bg-blue-50 py-4 text-black"
      />

    <CustomFormField
        name="phonenumber"
        labelText="Your Phone Number"
        control={form.control}
        placeholder="Enter your phone number"
        className="border  bg-blue-50 py-4 text-black"
      />

 <Button type="submit" className="w-full p-6 mt-4 bg-blue-400">Next</Button>
    </form>
  );
};

export default UserForm;
