'use client';
import { useState } from 'react';
import Recorder from components/audio/Recorder.tsx;  // Fixed path
import Speaker from  D:\igebra\debate-dynamo\src\components\audio\Speaker.tsx;    // Fixed path
export default function DebatePage() {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!userInput.trim()) return;
    
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate response');
      }

      const data = await response.json();
      setAiResponse(data.argument);
    } catch (err) {
      setError('Failed to get AI response. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center">Debate Dynamo</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <Recorder onTranscript={setUserInput} />
        {userInput && (
          <p className="mt-4 text-gray-700">You said: {userInput}</p>
        )}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!userInput.trim() || isLoading}
        className={`w-full py-3 px-4 rounded-lg font-medium ${
          !userInput.trim() || isLoading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isLoading ? 'Generating Response...' : 'Get AI Counterargument'}
      </button>

      {error && (
        <p className="text-red-500 text-center">{error}</p>
      )}

      {aiResponse && (
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">AI Response:</h2>
          <p className="mb-4">{aiResponse}</p>
          <Speaker text={aiResponse} />
        </div>
      )}
    </div>
  );
}