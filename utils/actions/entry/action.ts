'use server'

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { entry } from '@/app/drizzle/schema';
import { createAndEditEntrySchema, CreateAndEditEntryType } from "@/utils/schema";
import { UploadType } from '@/utils/types';
import { eq, desc,  sql } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!);

export async function createEntryAction(
  values: CreateAndEditEntryType
){
  try {
    // Validate the values on the backend;
    createAndEditEntrySchema.parse(values);

    const [user] = await db.insert(entry).values(values).returning()
    return user
    
  } catch (error) {
    console.error(error);
    return null;
  }
}



export async function getEntriesAction(): Promise<{ data: UploadType[] }> {
  try {

    // Fetch entries
    const entries = await db
      .select()
      .from(entry)

    return {
      data: entries,
    };
  } catch (err) {
    console.error("Error fetching entries:", err);
    return { data: [] };
  }
}


