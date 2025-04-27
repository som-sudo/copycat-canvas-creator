import React from "react";

interface TagPromptButtonProps {
  onClick?: () => void;
}

export function TagPromptButton({ onClick }: TagPromptButtonProps) {
  return (
    <div className="flex items-center justify-center mb-10">
      <button
        className="bg-gray-200 text-gray-900 text-xl font-medium px-10 py-3 rounded-full"
        onClick={onClick}
      >
        Prompt - tags
      </button>
    </div>
  );
}
