import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { UploadType } from "@/utils/types";
import PreviewCard from "./PreviewCard";
import { Button } from "@/components/ui/button";
import EntryCarousel from "./EntryCarousel";

const PopUp = ({ entry }: { entry: UploadType }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <PreviewCard entry={entry} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{entry.fullname}</DialogTitle>
        </DialogHeader>
        <EntryCarousel entry={entry} />
        <DialogDescription>
           {entry.caption}
          </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PopUp;
