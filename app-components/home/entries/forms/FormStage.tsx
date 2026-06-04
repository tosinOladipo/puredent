'use client'
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import UploadForm from './UploadForm';
import CaptionForm from "./CaptionForm";

const FormStage = () => {
const { stage } = useSelector((state: RootState) => state.stage);

  if (stage == "upload") {
   return <UploadForm/>
}

else if (stage == "caption") {
return <CaptionForm/>
}

}


export default FormStage
