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

type CustomFormFieldProps<T extends FieldValues> = {
  name: Path<T>;
  labelText?: string;
  control: Control<T>;
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
export function CustomFormField<T extends FieldValues>({
  name,
  control,
  labelText,
  placeholder,
  className,
}: CustomFormFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="form-rhf-demo-title" className="text-xs text-gray-500">{labelText}</FieldLabel>
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


//Disabled Custom Text Input Field
export function CustomFormDisabledField<T extends FieldValues>({
  name,
  control,
  labelText,
  placeholder,
  className,
}: CustomFormFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="form-rhf-demo-title" className="text-xs text-gray-500">{labelText}</FieldLabel>
          <Input
            {...field}
            id="form-rhf-demo-title"
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            autoComplete="off"
            className={cn(className)}
            disabled
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}


//Custom Password Field
export function CustomFormPasswordField<T extends FieldValues>({
  name,
  control,
  labelText,
  className,
}: CustomFormFieldProps<T>) {
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









