# the recursion theorem lab.

This is my TypeScript implementation of a <ins>**quine**</ins>.

This was made for "The Recursion Theorem" lab in Grinnell's CSC-341.

> [!NOTE]
> CSC-341 is more commonly known as Theory of Computation in other institutions.

## what is a quine?

A <ins>**quine**</ins> is basically a program that prints itself, **without taking in any input.**

> [!NOTE]
> So, you can't pass in the source code file into the quine to itself, which would make this program trivial to make.

## how do i run this?

1. Install your package manager of choice (npm, pnpm, Yarn, etc.)

   - I prefer pnpm!

2. Use the aforementioned package manager to install this project's dependencies.

   - The only dependency this project uses is [Typescript Execute (tsx)](https://www.npmjs.com/package/tsx).

   - To install with pnpm, do `pnpm i`. 

3. Run `quine.ts` with `tsx`.

   - To do this with pnpm, `pnpx tsx quine.ts`.

> [!Tip]
> If you want to skip installing dependencies (since this only uses `tsx`), you can do `pnpx tsx quine.ts` instead of Step 2.
> I think npm's version of this is `npx tsx quine.ts`.