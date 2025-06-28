'use client';
import { useState, useEffect } from 'react';

declare global {
  interface Window {
    responsiveVoice?: {
      speak: (text: string, voice?: string, params?: any) => void;
      cancel: () => void;
    };
  }
}

export default function Speaker({ text }: { text: string }) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = () => {
    if (typeof window !== 'undefined') {
      if (window.responsiveVoice) {
        window.responsiveVoice.speak(text, "UK English Female", {
          rate: 0.9,
          onstart: () => setIsSpeaking(true),
          onend: () => setIsSpeaking(false)
        });
      } else if (window.speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  const stopSpeaking = () => {
    if (window.responsiveVoice) {
      window.responsiveVoice.cancel();
    }
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
  };

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={isSpeaking ? stopSpeaking : speak}
        className={`py-2 px-4 rounded-lg ${
          isSpeaking
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
      >
        {isSpeaking ? '⏹ Stop' : '🔊 Play'}
      </button>
      <span className="text-sm text-gray-500">
        {isSpeaking ? 'Playing...' : 'Hear the response'}
      </span>
    </div>
  );
}