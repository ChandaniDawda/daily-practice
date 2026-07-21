import {
  addNote,
  listNotes,
  removeNote,
  searchNotes,
} from "./notes";

const args = process.argv.slice(2);
const command = args[0]?.toLowerCase();

function printHelp(): void {
  console.log("TypeScript Note CLI\n");
  console.log("Usage:");
  console.log("  npm run dev add <title> <body>");
  console.log("  npm run dev list");
  console.log("  npm run dev remove <id>");
  console.log("  npm run dev search <query>");
  console.log("\nExamples:");
  console.log("  npm run dev add \"Shopping\" \"Buy milk and eggs\"");
  console.log("  npm run dev list");
  console.log("  npm run dev remove 1680000000000-ab12cd34");
  console.log("  npm run dev search milk");
}

async function main(): Promise<void> {
  switch (command) {
    case "add": {
      const title = args[1];
      const body = args.slice(2).join(" ");

      if (!title || !body) {
        console.log("Error: add command requires a title and a body.");
        printHelp();
        return;
      }

      await addNote(title, body);
      break;
    }
    case "list":
      await listNotes();
      break;
    case "remove": {
      const id = args[1];
      if (!id) {
        console.log("Error: remove command requires a note id.");
        printHelp();
        return;
      }
      await removeNote(id);
      break;
    }
    case "search": {
      const query = args.slice(1).join(" ");
      if (!query) {
        console.log("Error: search command requires a query string.");
        printHelp();
        return;
      }
      await searchNotes(query);
      break;
    }
    case "help":
    case undefined:
      printHelp();
      break;
    default:
      console.log(`Unknown command: ${command}`);
      printHelp();
  }
}

main().catch((error) => {
  console.error("Unexpected error:", error);
  process.exit(1);
});
