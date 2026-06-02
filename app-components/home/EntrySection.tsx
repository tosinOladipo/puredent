import { Button } from "@/components/ui/button";
import entryData from "@/utils/data/entry";
import EntryCard from "./entries/EntryCard";
import CardList from "./entries/CardList";
import Container from "../global/Container";

const EntrySection = () => {
  return (
    <Container className="flex flex-col gap-6 py-12">
      <span className="text-xs border rounded-lg font-semibold w-28 text-center">
        LEADERBOARD
      </span>
      <h2 className="text-4xl font-bold">This week's brightest smiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-9">
        <p className="col-span-1 md:col-span-6 text-gray-400">
          Updated live as votes and views roll in.
        </p>
        <div className="col-span-1 md:col-span-3 gap-3 grid grid-cols-3">
          <div className="col-span-1"><Button>Most Liked</Button></div>
          <div className="col-span-1"><Button>Most Viewed</Button></div>
          <div className="col-span-1"><Button>Most Creative</Button></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {entryData.map((entry) => {
            return (
                <EntryCard key={entry.username} image={entry.image} username={entry.username} caption={entry.caption} likes={entry.likes} views={entry.views} score={entry.score}/>
            )
        })}
      </div>

        <div className="w-full rounded-4xl shadow-lg my-12">
            {entryData.map((list) => {
                return (
                    <CardList key={list.username} image={list.image} username={list.username} caption={list.caption} likes={list.likes} views={list.views} score={list.score}/>
                )
            })}
        </div>

    </Container>
  );
};

export default EntrySection;
