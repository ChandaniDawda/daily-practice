import { promises as fs } from "fs";

export type TextStats = {
  text: string;
  characters: number;
  words: number;
  lines: number;
};

export function analyzeText(text: string): TextStats {
  const normalized = text.replace(/\r\n/g, "\n");
  const characters = normalized.length;
  const words = normalized.trim() === "" ? 0 : normalized.trim().split(/\s+/).length;
  const lines = normalized === "" ? 0 : normalized.split("\n").length;

  return {
    text,
    characters,
    words,
    lines,
  };
}

export async function readTextFile(filePath: string): Promise<string> {
  return fs.readFile(filePath, "utf8");
}
