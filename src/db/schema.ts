import { integer, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

// A deck belongs to a Clerk user (identified by their Clerk userId string).
// Each deck has a title and an optional description.
export const decks = pgTable("decks", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: varchar({ length: 255 }).notNull(), // Clerk user ID
  title: varchar({ length: 255 }).notNull(),
  description: text(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
});

// A card belongs to a deck and has a front (question/prompt) and a back (answer).
export const cards = pgTable("cards", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  deckId: integer()
    .notNull()
    .references(() => decks.id, { onDelete: "cascade" }),
  front: text().notNull(), // e.g. "dog" or "When was the Battle of Hastings?"
  back: text().notNull(),  // e.g. "Anjing" or "1066"
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
});
