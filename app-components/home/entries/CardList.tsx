import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EntryType } from "@/utils/types";
import View from "@/app-components/global/View";
import Like from "@/app-components/global/Like";

const CardList = ({image, caption, username, views, likes, score}: EntryType) => {
  return (
    <div className="py-6 p-6 w-full grid grid-cols-2">
      <div className="col-span-1 flex gap-3">
        <span>#</span>
        <Avatar>
          <AvatarImage
            src={image}
            alt="@shadcn"
            className="grayscale"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <article>
            <h2 className="font-bold">{username}</h2>
            <p className="xs"></p>
        </article>
      </div>
      <div className="col-span-1 flex justify-end">
        <article className="flex gap-3">
            <View views={views}/>
            <Like likes={likes}/>
        </article>
      </div>
    </div>
  );
};

export default CardList;
