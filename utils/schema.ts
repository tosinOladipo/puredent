import * as z from 'zod';

export const createAndEditUserSchema = z.object({
  name: z.string().min(0, {
    message: 'firstname must be at least 2 characters.',
  }),

  username: z.string().min(2, {
    message: 'location must be at least 2 characters.',
  }),
  phonenumber: z.string().min(6, {
    message: 'password must be at least 6 characters.',
  }),
  checkIn: z.enum(["morning", "midday", "evening"], {
    message: 'checkIn must be one of "morning", "midday", or "evening".',
  }),
  
});
export type CreateAndEditUserType = z.infer<typeof createAndEditUserSchema>;




export const createAndEditVoterSchema = z.object({
  username: z.string().min(2, {
    message: 'location must be at least 2 characters.',
  }),

  saveAt: z.string().min(6, {
    message: 'password must be at least 6 characters.',
  }),
  
});
export type CreateAndEditVoterType = z.infer<typeof createAndEditVoterSchema>;





export const createAndEditCaptionSchema = z.object({
  caption: z.string().min(0, {
    message: 'caption must be at least 2 characters.',
  }),
  
});
export type CreateAndEditCaptionType = z.infer<typeof createAndEditCaptionSchema>;







export const uploadSchema = z.object({
  image: z
    .custom<FileList>()
    .refine((files) => files && files.length > 0, "Image file is required"),
});
export type UploadSchemaType = z.infer<typeof uploadSchema>;





export const createAndEditEntrySchema = z.object({
  fullname: z.string().min(0, {
    message: 'firstname must be at least 2 characters.',
  }),

  username: z.string().min(2, {
    message: 'username must be at least 2 characters.',
  }),
  phonenumber: z.string().min(6, {
    message: 'phone number must be at least 6 characters.',
  }),
  imageUrl: z.string().min(2, {
    message: 'imageUrl must be at least 2 characters.',
  }),
  caption: z.string().min(2, {
    message: 'caption must be at least 2 characters.',
  }),
  confidencePoint: z.int().min(0, {
    message: 'Id must be at least 2 characters.',
  }),
  confidenceReason: z.string().min(2, {
    message: 'confidenceReason must be at least 2 characters.',
  }),
  smilePoint: z.int().min(0, {
    message: 'smilePoint must be at least 2 characters.',
  }),
  smileReason: z.string().min(2, {
    message: 'smileReason must be at least 2 characters.',
  }),
  creativityPoint: z.int().min(0, {
    message: 'creativityPoint must be at least 2 characters.',
  }),
  creativityReason: z.string().min(2, {
    message: 'creativityReason must be at least 2 characters.',
  }),
  totalPoint: z.int().min(0, {
    message: 'totalPoint must be at least 2 characters.',
  })
  
});
export type CreateAndEditEntryType = z.infer<typeof createAndEditEntrySchema>;