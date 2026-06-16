import { UploadType } from "@/utils/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BadgeCheck, Smile, Sparkles } from "lucide-react";

const EntryCarousel = ({ entry }: { entry: UploadType }) => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <img
            src={entry.imageUrl}
            alt={entry.username}
            className="w-full h-100 object-cover rounded-md"
          />
        </CarouselItem>

        <CarouselItem>
          <section className="flex flex-col gap-3 justify-center items-center h-full">
            <Smile className="w-20 h-20" />
            <h3 className="text-lg font-bold">Smile</h3>
            <h1 className="text-5xl font-bold">{entry.smilePoint}%</h1>
            <p className="text-muted-foreground text-center px-2">
              {entry.smileReason}
            </p>
          </section>
        </CarouselItem>

        <CarouselItem>
          <div className="flex flex-col gap-3 justify-center items-center h-full">
            <BadgeCheck className="w-20 h-20" />
            <h3 className="text-lg font-bold">Confidence</h3>
            <h1 className="text-5xl font-bold">{entry.confidencePoint}%</h1>
            <p className="text-muted-foreground text-center px-2">
              {entry.confidenceReason}
            </p>
          </div>
        </CarouselItem>

       

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default EntryCarousel;
