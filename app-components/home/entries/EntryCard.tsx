import Like from "@/app-components/global/Like";
import View from "@/app-components/global/View";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UploadType } from "@/utils/types";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EntryCard = ({
  id,
  imageUrl,
  username,
  caption,
  smilePoint,
  totalPoint,
}: UploadType) => {
  return (
    <Link href={`/entries/${username}`} className="col-span-1">
      <Card className="col-span-1 shadow-lg">
        <Image
          src={imageUrl}
          alt="face-image"
          width={200}
          height={400}
          className="w-full max-h-120 object-cover"
        />
        <CardHeader>
          <CardTitle>{username}</CardTitle>
          <CardDescription>{caption}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <div className="flex gap-3">
            <Like likes={smilePoint} />
            <View views={totalPoint} />
          </div>
          <div>{totalPoint}</div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default EntryCard;
