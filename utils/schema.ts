import * as z from 'zod';

export const createAndEditAuthSchema = z.object({
  name: z.string().min(0, {
    message: 'firstname must be at least 2 characters.',
  }),

  email: z.string().min(2, {
    message: 'location must be at least 2 characters.',
  }),
  password: z.string().min(6, {
    message: 'password must be at least 6 characters.',
  }),
  
});
export type CreateAndEditAuthType = z.infer<typeof createAndEditAuthSchema>;





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
