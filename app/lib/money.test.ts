// Run: npm test (node --test, Node's built-in TypeScript stripping).
import assert from "node:assert/strict";
import { test } from "node:test";
import { change, money, percent, tone } from "./money.ts";

test("money", () => {
  assert.equal(money(10482.16), "$10,482.16");
  assert.equal(money(-45.1), "−$45.10");
  assert.equal(money(10000, { whole: true }), "$10,000");
  assert.equal(money(231.52, { currency: "USD" }), "US$231.52");
  assert.equal(percent(-1.08), "1.08%");
});

test("change", () => {
  assert.equal(change({ pct: 4.82, amount: 482.16 }), "▲ +$482.16 · +4.82%");
  assert.equal(change({ pct: -0.62 }), "▼ −0.62%");
  assert.equal(change({ pct: 0 }), "0.00%");
  assert.equal(tone(-0.001), "flat");
});
