"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CustomFormTextArea } from "@/components/form-components/FormComponents";
import { createAndEditCaptionSchema, CreateAndEditCaptionType } from '@/utils/schema';
import { Button } from "@/components/ui/button";

const CaptionForm = () => {


    // 1. Define your form.
      const form = useForm<z.infer<typeof createAndEditCaptionSchema>>({
        resolver: zodResolver(createAndEditCaptionSchema),
        defaultValues: {
          caption: "",
        },
      });
    
      const onSubmit = async (values: CreateAndEditCaptionType) => {
        
      };

  return (
    <form 
    onSubmit={form.handleSubmit(onSubmit)}
    className='w-full flex-col gap-3'>
        <CustomFormTextArea
              name="caption"
              labelText="Your Caption"
              control={form.control}
              placeholder="caption your confidence moment"
              className="border h-30 bg-blue-50 py-4 text-black"
            />
            <div className="space-x-3 mt-4 text-green-700">
                <span className="bg-green-100 text-xs font-semibold p-2 rounded-full">#SmileRevolutionNG</span>
                <span className="bg-green-100 text-xs font-semibold p-2 rounded-full">#12HourConfidence</span>
                <span className="bg-green-100 text-xs font-semibold p-2 rounded-full">#PuredentGlow</span>        
            </div>
            <Button type="submit" className="w-full p-6 mt-4 bg-blue-400">Submit</Button>
    </form>
  )
}

export default CaptionForm
