// Font swap = edit the import line below (display, body/UI, numbers). Nothing else changes.
import { Urbanist as DisplayFace, Figtree as SansFace, Manrope as NumFace } from "next/font/google";

const display = DisplayFace({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-display-face" });
const sans = SansFace({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-sans-face" });
const num = NumFace({ subsets: ["latin"], variable: "--font-num-face" });

export const fontVariables = `${display.variable} ${sans.variable} ${num.variable}`;
