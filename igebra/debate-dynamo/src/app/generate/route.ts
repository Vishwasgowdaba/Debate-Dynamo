import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { userInput } = await request.json();
    
    if (!userInput?.trim()) {
      return NextResponse.json(
        { error: 'Empty input' },
        { status: 400 }
      );
    }

    // Mock AI response - replace with actual API call
    const arguments = [
      `While you make a valid point about "${userInput}", consider that...`,
      `An alternative perspective is that ${userInput} might not account for...`,
      `Research suggests that ${userInput} may be oversimplified because...`
    ];
    
    const randomArgument = arguments[Math.floor(Math.random() * arguments.length)];
    
    return NextResponse.json({
      argument: randomArgument,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}