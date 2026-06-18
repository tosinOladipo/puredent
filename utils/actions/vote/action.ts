'use server'

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { voteTable } from '@/app/drizzle/schema';
import { VoterType } from '@/utils/types';
import { eq, desc,  sql } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!);

export async function createVoteAction(
  values: VoterType
){
  try {

    const [voter] = await db.insert(voteTable).values(values).returning()
    return voter
    
  } catch (error) {
    console.error(error);
    return null;
  }
}



export async function getEntryVoteAction(username: string) {
  try {
    const votes = await db
      .select()
      .from(voteTable)
      .where(eq(voteTable.username, username))

    return votes ?? [];
  } catch (error) {
    console.error("Error getting votes:", error);
    return [];
  }
}