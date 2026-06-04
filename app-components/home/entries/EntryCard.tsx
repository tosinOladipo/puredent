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
import { EntryType } from "@/utils/types";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EntryCard = ({
  id,
  image,
  username,
  caption,
  likes,
  views,
  score,
}: EntryType) => {
  return (
    <Link href={`/entries/${id}`}>
      <Card className="col-span-1 shadow-lg">
        <Image
          src={image}
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
            <Like likes={likes} />
            <View views={views} />
          </div>
          <div>{score}</div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default EntryCard;
