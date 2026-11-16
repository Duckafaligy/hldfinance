// Font swap = edit the import line below (display face, then UI/numbers face). Nothing else changes.
import { Hanken_Grotesk as DisplayFace, Inter as SansFace } from "next/font/google";

const display = DisplayFace({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-display-face" });
const sans = SansFace({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-sans-face" });

export const fontVariables = `${display.variable} ${sans.variable}`;
