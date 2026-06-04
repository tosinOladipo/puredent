import {
  Control,
  Controller,
  FieldValues,
  Path,
} from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";

import { Image } from "lucide-react";



type OptionType = {
  name: string;
};

type CustomFormFieldProps = {
  name: string;
  labelText?: string;
  control: Control<any>;
  placeholder?: string;
  className?: string;
};


type CustomFormTextAreaProps<T extends FieldValues> = {
  name: Path<T>;
  labelText?: string;
  control: Control<T>;
  placeholder?: string;
  className?: string;
};


type CustomSelectProps = {
  name: string;
  control: Control<any>;
  items: OptionType[];
  placeholder?: string;
  labelText?: string;
  className?: string;
};


//Custom Text Input Field
export function CustomFormField({
  name,
  control,
  labelText,
  placeholder,
  className,
}: CustomFormFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="form-rhf-demo-title">{labelText}</FieldLabel>
          <Input
            {...field}
            id="form-rhf-demo-title"
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            autoComplete="off"
            className={cn(className)}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}


//Custom Password Field
export function CustomFormPasswordField({
  name,
  control,
  labelText,
  className,
}: CustomFormFieldProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="form-rhf-demo-title">{labelText}</FieldLabel>
          <Input
            {...field}
            id="form-rhf-demo-title"
            aria-invalid={fieldState.invalid}
            autoComplete="off"
            className={cn(className)}
            type="password"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}


// Custom TextArea Field
export function CustomFormTextArea<T extends FieldValues>({
  name,
  control,
  labelText,
  placeholder,
  className,
}: CustomFormTextAreaProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="form-rhf-demo-title">{labelText}</FieldLabel>
          <Textarea
            {...field}
            id="form-rhf-demo-title"
            aria-invalid={fieldState.invalid}
            autoComplete="off"
            placeholder={placeholder}
            className={cn(className)}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}


//Custom Image Input Field
export function CustomImageUploadField({
  name,
  control,
  labelText,
  placeholder,
  className,
}: CustomFormFieldProps) {
  return (
    <Controller
  name={name}
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor="image-upload">{labelText}</FieldLabel>

      <label
        htmlFor="image-upload"
        className="w-full py-6 border flex flex-col items-center justify-center cursor-pointer"
      >
        <Image />
        <span>{labelText}</span>

        <Input
          id="image-upload"
          aria-invalid={fieldState.invalid}
          placeholder={placeholder}
          autoComplete="off"
          className={cn(className)}
          type="file"
          hidden
          onChange={(e) => field.onChange(e.target.files?.[0])}
        />
      </label>

      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
  );
}






