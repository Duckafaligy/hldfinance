import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = { title: "Terms (draft) | HLD Finance" };

export default function Terms() {
  return (
    <LegalPage title="Terms">
      <h2>Practice only</h2>
      <p>HLD Practice uses fake money. You can&apos;t deposit, withdraw, win or lose real money.</p>
      <h2>Not financial advice</h2>
      <p>The coach asks questions and shows facts. Nothing in HLD is a recommendation to buy or sell anything.</p>
      <h2>Leagues</h2>
      <p>Leagues are free to enter and have no cash prizes.</p>
    </LegalPage>
  );
}
