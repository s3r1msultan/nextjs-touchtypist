// components/TypingBox.tsx
"use client";
import { useState } from "react";

type TypingBoxProps = {
  text: string;
};

export default function TypingBox({ text }: TypingBoxProps) {
  return (
    <div>
      <p className="mb-2">{text}</p>
      <input
        type="text"
        className="w-full border p-2"
        placeholder="Start typing here..."
      />
    </div>
  );
}
