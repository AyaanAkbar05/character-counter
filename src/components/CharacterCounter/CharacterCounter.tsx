import React, { useState } from 'react';
import type { CharacterCounterProps, TextStats } from '../../types';
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords = 500,
  targetReadingTime = 5
}) => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0
  });

  const handleTextChange = (input: string) => {
    setText(input);
    const words = input.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const characterCount = input.length;
    const readingTime = wordCount / 200; // ~200 words per minute
    setStats({ characterCount, wordCount, readingTime });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Character Counter</h2>
      <TextInput onTextChange={handleTextChange} />
      <StatsDisplay stats={stats} />
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          Word goal: {stats.wordCount}/{maxWords} | Target time: {targetReadingTime} min
        </p>
      </div>
    </div>
  );
};
