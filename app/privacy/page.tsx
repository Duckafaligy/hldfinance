import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = { title: "Privacy (draft) | HLD Finance" };

export default function Privacy() {
  return (
    <LegalPage title="Privacy">
      <h2>What we collect</h2>
      <p>For the waitlist, only your email address, used to tell you when HLD Practice opens.</p>
      <h2>What we never do</h2>
      <p>No ads, and we never sell your data. We collect the minimum we need, under Canada&apos;s PIPEDA.</p>
      <h2>Deleting your data</h2>
      <p>You can ask us to delete your email at any time. Contact details will be added here before launch.</p>
    </LegalPage>
  );
}
