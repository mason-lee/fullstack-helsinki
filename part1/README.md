# Part 1 — Introduction to React

Each directory below is its own standalone Vite app with its own `package.json` and
`node_modules`. They are deliberately *not* a monorepo or npm workspace — the course
submission system expects each exercise app to stand alone, and part 3 moves to a separate
repo entirely, so there is nothing to gain from wiring them together.

## Layout

| Directory | Purpose | Graded? |
| --- | --- | --- |
| `demo/` | Follow-along scratch app for the course material. Break it freely. | No |
| `courseinfo/` | Exercises 1.1 – 1.5 | Yes |
| `unicafe/` | Exercises 1.6 – 1.11 | Yes |
| `anecdotes/` | Exercises 1.12 – 1.14 | Yes |

The exercise directory names match the ones the course material asks for, so the submission
form is unambiguous.

## Creating an app

The directories are empty on purpose. From inside `part1/`:

    npm create vite@latest demo -- --template react
    cd demo
    npm install
    npm run dev

Vite is happy to scaffold into an existing empty directory, so this will not complain.

## Course baseline

After scaffolding, the material has you delete `src/App.css`, `src/index.css` and
`src/assets/`, then reduce `src/main.jsx` to just a `createRoot(...).render(<App />)` call
and `src/App.jsx` to a single component. Recent Vite templates also add a few extras
(`public/icons.svg`, a starter `README.md`) that you can remove too.

## Running two apps at once

Vite defaults to port 5173 and will pick 5174, 5175, … if that is taken, so several dev
servers can run side by side. To pin one: `npm run dev -- --port 5180`.

## Notes

`node_modules/` and `dist/` are ignored by the root `.gitignore`, so committing from the
repo root will not pick them up.
