"use client";
import { useState } from "react";
import TypingBox from "@/components/TypingBox";

export default function TypingPractice() {
  const [text] = useState(
    "Practice typing this text to improve speed and accuracy."
  ); // Replace with API call

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Typing Practice</h1>
      <TypingBox text={text} />
    </main>
  );
}
