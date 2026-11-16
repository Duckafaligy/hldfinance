"use server";

import { normaliseEmail } from "./lib/email";

export type WaitlistState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | { status: "not_connected"; message: string }
  | { status: "ok"; message: string };

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const email = normaliseEmail(formData.get("email"));
  if (!email) {
    return { status: "error", message: "Enter a valid email address, like name@example.com." };
  }

  // TODO: store the email. Planned store: a Supabase `waitlist` table
  // (unique email, created_at, consent flag) with Row Level Security on.
  // Nothing is saved until then, so tell the visitor plainly.
  return {
    status: "not_connected",
    message: "Thanks! The waitlist isn't connected yet, so your email wasn't saved. Please check back soon.",
  };
}
