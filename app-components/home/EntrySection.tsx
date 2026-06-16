"use client";
import { Button } from "@/components/ui/button";
import entryData from "@/utils/data/entry";
import EntryCard from "./entries/EntryCard";
import CardList from "./entries/CardList";
import Container from "../global/Container";
import { useEffect, useState } from "react";
import { useEntryForm } from "@/utils/custom-hooks/entryCustomHook";
import { UploadType } from "@/utils/types";

const EntrySection = () => {

  const { uploads, fetchAllEntries } = useEntryForm();


  // load entries on mount
  useEffect(() => {
    fetchAllEntries();
  }, []);

  const entriesArray: UploadType[] = uploads ?? [];

  const entriesWithUsername = entriesArray.filter(
    (e): e is UploadType & { username: string } => typeof e.username === "string" && e.username.length > 0
  );

  const leaderboard = Object.values(
    entriesWithUsername.reduce<Record<string, UploadType & { totalScore: number }>>((acc, entry) => {
      const key = entry.username;
      if (!acc[key]) {
        acc[key] = {
          ...entry,
          totalScore: 0,
        } as UploadType & { totalScore: number };
      }

      acc[key].totalScore += entry.totalPoint ?? 0;

      return acc;
    }, {} as Record<string, UploadType & { totalScore: number }>)
  ).sort((a, b) => b.totalScore - a.totalScore);

  console.log(leaderboard);

  return (
    <section id="leaderboard">
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
            <div className="col-span-1">
              <Button>Most Liked</Button>
            </div>
            <div className="col-span-1">
              <Button>Most Viewed</Button>
            </div>
            <div className="col-span-1">
              <Button>Most Creative</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaderboard?.map((entry) => {
            return (
              <EntryCard
                key={entry.id}
                id={entry.id}
                imageUrl={entry.imageUrl}
                username={entry.username}
                caption={entry.caption}
                smilePoint={entry.smilePoint}   
                totalPoint={entry.totalScore}
              />
            );
          })}
        </div>

        <div className="w-full rounded-4xl shadow-lg my-12">
          {entryData.map((list) => {
            return (
              <CardList
                key={list.id}
                id={list.id}
                image={list.image}
                username={list.username}
                caption={list.caption}
                likes={list.likes}
                views={list.views}
                score={list.score}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default EntrySection;
