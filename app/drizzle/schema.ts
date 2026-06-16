import { boolean, integer, json, pgTable, text, timestamp, unique, uuid, varchar } from "drizzle-orm/pg-core";



export const entry = pgTable("entry", {
  id: uuid("id").defaultRandom().primaryKey(),
  fullname: varchar("fullname",{ length: 255 }).notNull(),
  username: varchar("username",{ length: 255 }).notNull(),
  phonenumber: varchar("phonenumber", { length: 255 }).notNull(),
  imageUrl: varchar("imageUrl", { length: 255 }).notNull(),
  caption: text("caption").notNull(),
  confidencePoint: integer("confidencePoint").notNull(),
  confidenceReason: text("confidenceReason").notNull(),
  smilePoint: integer("smilePoint").notNull(),
  smileReason: text("smileReason").notNull(),
  creativityPoint: integer("creativityPoint").notNull(),
  creativityReason: text("creativityReason").notNull(),
  totalPoint: integer("totalPoint").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});