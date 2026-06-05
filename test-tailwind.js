import { compile } from '@tailwindcss/node';
try {
  const css = `@import "tailwindcss"; @variant dark (&:where(.dark, .dark *));`;
  await compile(css);
  console.log("Variant works");
} catch(e) {
  console.error("Variant error", e);
}
try {
  const css2 = `@import "tailwindcss"; @custom-variant dark (&:where(.dark, .dark *));`;
  await compile(css2);
  console.log("Custom-variant works");
} catch(e) {
  console.error("Custom-variant error", e);
}
