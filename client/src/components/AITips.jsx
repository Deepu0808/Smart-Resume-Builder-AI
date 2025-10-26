import React from 'react';

export default function AITips({ improved, tips = [], onApply }) {
  return (
    <div className="ai-tips">
      <h4>AI Suggestion</h4>
      <p><strong>Improved:</strong> {improved}</p>
      {tips.length > 0 && (
        <div>
          <strong>Tips:</strong>
          <ul>
            {tips.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </div>
      )}
      <button onClick={onApply}>Apply Suggestion</button>
    </div>
  );
}
