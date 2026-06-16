'use client'
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import UploadForm from './UploadForm';
import CaptionForm from "./CaptionForm";
import UserForm from "./UserForm";
import AiReviewForm from "./AiReviewForm";

const FormStage = () => {
const { stage } = useSelector((state: RootState) => state.stage);

  if (stage == "upload") {
   return <UploadForm/>
}

else if (stage == "caption") {
return <CaptionForm/>
}

else if (stage == "form") {
return <UserForm/>
}

else if (stage == "ai-review") {
return <AiReviewForm/>
}

}

export default FormStage
