# Debate-Dynamo
# 🧠 Debate Dynamo: AI-Powered Argument Coach

Debate Dynamo is a personalized education platform that helps students improve their critical thinking and argumentation skills through real-time, AI-powered debates. It features a gamified “Fallacy Battle Royale” mode where users practice spotting logical fallacies and sharpen their reasoning — all while engaging in dynamic voice-based debates with an AI coach.

## 🚀 Features

- 🎤 **Voice-to-AI Debates** – Speak directly to the AI using your mic (Web Speech API).
- ⚔️ **Fallacy Battle Royale Mode** – Timed debate mode where users earn points spotting logical fallacies.
- 🧠 **GPT-4/Mistral-Powered Argument Engine** – Generates relevant, nuanced arguments including fallacies.
- 🕵️ **Fallacy Detection Engine** – Detects logical fallacies like ad hominem, strawman, and slippery slope in real-time.
- 📊 **Progress Dashboard** – Tracks user accuracy, most-missed fallacies, and improvements over time.
- 🧙 **Mimic Mode** – AI can debate like Socrates or other famous philosophers (optional wow feature).

## 🎯 Purpose

Students often lack real-time debate partners and critical feedback. Debate Dynamo provides:
- A 24/7 AI debate partner.
- A safe, fun environment to learn argument structure and identify fallacies.
- Personalized feedback and engagement through gamification.

## 🔧 Tech Stack

| Layer        | Technology                          |
|--------------|--------------------------------------|
| **Frontend** | Next.js, Tailwind CSS, Framer Motion |
| **Voice**    | Web Speech API, react-speech-recognition |
| **AI Engine**| GPT-4 API / HuggingFace Mistral 7B   |
| **Fallacy Detection** | logical-fallacy-detector + custom logic |
| **Backend**  | Node.js + Express (optional)         |
| **Database** | Firebase (for progress tracking)     |
| **Hosting**  | Vercel                               |

🔑 Key Features of Debate Dynamo
🚀 Feature	🧩 Description
🎤 Voice-to-AI Debating	- Speak directly to the AI using your microphone. Real-time speech recognition lets users experience natural debate interactions.
⚔️ Fallacy Battle Royale Mode - A gamified, timed debate battle. Players earn or lose points/health based on their ability to identify logical fallacies in real-time.
🧠 AI Argument Generator	- Uses GPT-4 (or Mistral) to generate persuasive, fallacy-infused arguments tailored to the chosen topic and difficulty.
🕵️ Real-Time Fallacy Detection	- Detects and highlights logical fallacies (e.g., ad hominem, strawman) in arguments from both the user and AI.
📊 Progress Dashboard	- Visual breakdown of user performance: fallacies caught, most-missed types, improvement trends, and session accuracy.
🧙 Mimic Mode (Wow Factor) - 	AI debates using the styles of famous philosophers or characters (e.g., Socrates, Elon Musk) for fun and educational variety.
🎮 Gamification Elements -	Health bars, accuracy scores, countdown timers, and victory animations to keep users engaged and motivated.
🔁 Preloaded Debate - Topics	Built-in bank of popular, school-relevant topics with pre-generated AI responses for offline demo readiness.

🛡️ Future Enhancements
Add debate styles (Socratic, Lincoln-Douglas, etc.)

Speech-to-emotion detection

User profiles with fallacy mastery levels

Classrooms for teachers to monitor debate growth
