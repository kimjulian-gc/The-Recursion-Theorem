const source = `const backslash = 92;
const bSym = String.fromCharCode(backslash);

const grave = 96;
const gSym = String.fromCharCode(grave);

const dollarSign = 36;
const dSym = String.fromCharCode(dollarSign);

function escapeString(input: string): string {
  let output = "";

  for (const char of input) {
    if (char === gSym || char === dSym) {
      output += bSym;
    }
    output += char;
  }

  return output;
}

function quine(code: string): void {
  const lineFeed = 10;
  const lSym = String.fromCharCode(lineFeed);

  console.log(\`const source = \${gSym}\${escapeString(code)}\${gSym};\${lSym}\${code}\`);
}

quine(source);`;
const backslash = 92;
const bSym = String.fromCharCode(backslash);

const grave = 96;
const gSym = String.fromCharCode(grave);

const dollarSign = 36;
const dSym = String.fromCharCode(dollarSign);

function escapeString(input: string): string {
  let output = "";

  for (const char of input) {
    if (char === gSym || char === dSym) {
      output += bSym;
    }
    output += char;
  }

  return output;
}

function quine(code: string): void {
  const lineFeed = 10;
  const lSym = String.fromCharCode(lineFeed);

  console.log(`const source = ${gSym}${escapeString(code)}${gSym};${lSym}${code}`);
}

quine(source);