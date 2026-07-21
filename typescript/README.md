# TypeScript Note CLI

A simple TypeScript command-line note manager. This project demonstrates:

- TypeScript types and interfaces
- Node.js file I/O with `fs.promises`
- Clean CLI command parsing
- `tsc` build and `ts-node` dev workflow

## Commands

```bash
npm run dev add "Title" "Body of the note"
npm run dev list
npm run dev remove <note-id>
npm run dev search <query>
```

## Run

1. Navigate to the project folder:
   ```bash
   cd typescript
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the CLI in development mode:
   ```bash
   npm run dev list
   ```

This is a strong interview practice project because it shows typed design, file operations, and real command handling.
