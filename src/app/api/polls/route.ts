'use server';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// GET route to fetch current poll results
export async function GET() {
  try {
    const pollResults = await prisma.pollOption.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        votes: true,
      },
    });

    return NextResponse.json(pollResults);
  } catch (error) {
    console.error('Failed to fetch poll results:', error);
    return NextResponse.json(
      { error: 'Failed to fetch poll results' },
      { status: 500 }
    );
  }
}

// POST route to submit a vote
export async function POST(request: Request) {
  try {
    const { optionId } = await request.json();

    if (!optionId) {
      return NextResponse.json(
        { error: 'Option ID is required' },
        { status: 400 }
      );
    }

    // Update vote count for the selected option
    const updatedOption = await prisma.pollOption.update({
      where: { id: optionId },
      data: {
        votes: {
          increment: 1,
        },
      },
    });

    return NextResponse.json(updatedOption);
  } catch (error) {
    console.error('Failed to submit vote:', error);
    return NextResponse.json(
      { error: 'Failed to submit vote' },
      { status: 500 }
    );
  }
} 