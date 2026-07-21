import { promises as fs } from "fs";
import path from "path";

type Note = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
};

const dataDir = path.resolve(process.cwd(), "data");
const notesFile = path.join(dataDir, "notes.json");

async function ensureDataFile(): Promise<void> {
  await fs.mkdir(dataDir, { recursive: true });

  try {
    await fs.access(notesFile);
  } catch {
    await fs.writeFile(notesFile, "[]", "utf8");
  }
}

async function loadNotes(): Promise<Note[]> {
  await ensureDataFile();
  const raw = await fs.readFile(notesFile, "utf8");
  return JSON.parse(raw) as Note[];
}

async function saveNotes(notes: Note[]): Promise<void> {
  await ensureDataFile();
  await fs.writeFile(notesFile, JSON.stringify(notes, null, 2), "utf8");
}

function createId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export async function addNote(title: string, body: string): Promise<void> {
  const notes = await loadNotes();
  const note: Note = {
    id: createId(),
    title,
    body,
    createdAt: new Date().toISOString(),
  };

  await saveNotes([...notes, note]);
  console.log(`✅ Note added: ${title}`);
}

export async function removeNote(id: string): Promise<void> {
  const notes = await loadNotes();
  const remaining = notes.filter((note) => note.id !== id);

  if (remaining.length === notes.length) {
    console.log(`⚠️ No note found with id: ${id}`);
    return;
  }

  await saveNotes(remaining);
  console.log(`🗑️ Note removed: ${id}`);
}

export async function listNotes(): Promise<void> {
  const notes = await loadNotes();

  if (notes.length === 0) {
    console.log("No notes yet. Use 'add' to create one.");
    return;
  }

  console.log(`\nNotes (${notes.length}):\n`);
  notes.forEach((note) => {
    console.log(`- ${note.id}`);
    console.log(`  title: ${note.title}`);
    console.log(`  body: ${note.body}`);
    console.log(`  created: ${note.createdAt}\n`);
  });
}

export async function searchNotes(query: string): Promise<void> {
  const notes = await loadNotes();
  const results = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(query.toLowerCase()) ||
      note.body.toLowerCase().includes(query.toLowerCase())
  );

  if (results.length === 0) {
    console.log(`No notes found for "${query}".`);
    return;
  }

  console.log(`\nSearch results (${results.length}):\n`);
  results.forEach((note) => {
    console.log(`- ${note.id}`);
    console.log(`  title: ${note.title}`);
    console.log(`  body: ${note.body}`);
    console.log(`  created: ${note.createdAt}\n`);
  });
}
