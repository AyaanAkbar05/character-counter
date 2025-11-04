import React from 'react';
import type { StatsDisplayProps } from '../../types';

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true
}) => {
  return (
    <div className="mt-4 p-4 border rounded-lg bg-gray-50">
      <p><strong>Characters:</strong> {stats.characterCount}</p>
      <p><strong>Words:</strong> {stats.wordCount}</p>
      {showReadingTime && (
        <p><strong>Reading Time:</strong> {stats.readingTime.toFixed(2)} min</p>
      )}
    </div>
  );
};
