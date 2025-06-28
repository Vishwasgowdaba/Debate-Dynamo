'use client';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { useEffect } from 'react';

export default function Recorder({ 
  onTranscript 
}: { 
  onTranscript: (text: string) => void 
}) {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript
  } = useSpeechRecognition();

  useEffect(() => {
    onTranscript(transcript);
  }, [transcript, onTranscript]);

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="space-y-2">
        <textarea
          onChange={(e) => onTranscript(e.target.value)}
          placeholder="Type your argument..."
          className="w-full p-3 border rounded-lg"
          rows={3}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <button
        onMouseDown={() => {
          resetTranscript();
          SpeechRecognition.startListening();
        }}
        onMouseUp={SpeechRecognition.stopListening}
        onTouchStart={() => {
          resetTranscript();
          SpeechRecognition.startListening();
        }}
        onTouchEnd={SpeechRecognition.stopListening}
        className={`w-full py-3 px-4 rounded-lg font-medium ${
          listening 
            ? 'bg-red-500 text-white animate-pulse' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        {listening ? '🎤 Speaking... (Release to stop)' : 'Hold to Speak'}
      </button>
      
      {transcript && (
        <p className="text-sm text-gray-500">Live transcription: {transcript}</p>
      )}
    </div>
  );
}