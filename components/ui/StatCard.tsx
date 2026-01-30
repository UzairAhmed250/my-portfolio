import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="p-4 bg-deep-purple/40 rounded-lg border border-mauve/10 text-center">
      <div className="text-2xl font-bold text-mauve mb-1">{value}</div>
      <div className="text-xs text-slate uppercase tracking-wide">{label}</div>
    </div>
  );
};

export default StatCard;

