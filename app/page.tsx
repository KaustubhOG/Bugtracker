'use client';
import { Card, Text, Heading } from '@radix-ui/themes';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 px-4">
      <Card size="4" className="backdrop-blur-md bg-white/10 text-white max-w-xl shadow-2xl">
        <Heading as="h1" size="7" align="center" className="text-white font-bold">
          BugTracker
        </Heading>
        <Text as="p" size="4" align="center" className="text-gray-200 mt-4">
          “Great software is built by fixing great bugs.”
        </Text>
        <Text as="p" size="2" align="center" className="italic text-gray-300 mt-2">
          – Every Developer Ever
        </Text>
      </Card>
    </main>
  );
}
