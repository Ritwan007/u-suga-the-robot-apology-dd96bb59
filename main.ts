import { writeFileSync, mkdirSync } from "node:fs";

const line1 =
  "I'm sorry I fed the dog twice this morning because I forgot I had already fed him at seven.";
const line2 =
  "I have learned my memory needs a marker, so now I flip the tag on his bowl after every meal.";

const entry = line1 + "\n" + line2;

// Gate self-check: UTF-8 text, 1-400 chars, exactly two lines, one
// sentence each, no trailing newline, not only whitespace.
const bytes = Buffer.from(entry, "utf8");
if (bytes.toString("utf8") !== entry) throw new Error("entry is not valid UTF-8");
if (entry.length < 1 || entry.length > 400) throw new Error("entry must be 1-400 chars");
const lines = entry.split("\n");
if (lines.length !== 2) throw new Error("entry must be exactly two lines");
if (entry.trim().length === 0) throw new Error("entry must not be only whitespace");
if (entry.endsWith("\n")) throw new Error("entry must not end with a newline");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
