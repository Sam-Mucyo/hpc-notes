'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const raceConditionExample = `#include <omp.h>
#include <iostream>

int main() {
    int counter = 0;
    
    #pragma omp parallel for
    for(int i = 0; i < 1000; i++) {
        counter++; // Race condition here!
    }
    
    std::cout << "Counter: " << counter << std::endl;
    return 0;
}`;

const openmpBasicExample = `#include <omp.h>
#include <iostream>

int main() {
    const int size = 1000;
    int arr[size];
    
    // Parallel initialization of array
    #pragma omp parallel for
    for(int i = 0; i < size; i++) {
        arr[i] = i * 2;
    }
    
    return 0;
}`;

const openmpLockExample = `#include <omp.h>
#include <iostream>

int main() {
    int counter = 0;
    omp_lock_t lock;
    omp_init_lock(&lock);
    
    #pragma omp parallel for
    for(int i = 0; i < 1000; i++) {
        omp_set_lock(&lock);
        counter++; // Protected by lock
        omp_unset_lock(&lock);
    }
    
    omp_destroy_lock(&lock);
    std::cout << "Counter: " << counter << std::endl;
    return 0;
}`;

const Section = ({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-12">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left flex justify-between items-center py-2 text-2xl font-bold text-blue-800 border-b pb-2 hover:text-blue-600 transition-colors"
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? '▼' : '▶'}</span>
      </button>
      {isOpen && children}
    </div>
  );
};

const CodeBlock = ({ code, language }: { code: string; language: string }) => (
  <div className="my-4">
    <SyntaxHighlighter
      language={language}
      style={oneLight}
      className="rounded-lg"
    >
      {code}
    </SyntaxHighlighter>
  </div>
);

export default function SharedMemory() {
  return (
    <main className="min-h-screen bg-white">
    <div className="max-w-5xl mx-auto p-8 space-y-10">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Shared Memory Computing</h1>
        <p className="text-xl text-gray-700">Understanding OpenMP and Race Conditions</p>
      </div>

      <Section title="What is a Race Condition?" defaultOpen={true}>
        <Card className="bg-white shadow-lg">
          <CardContent className="pt-6">
            <p className="mb-4 text-gray-700">
              A race condition occurs when multiple threads access and modify shared data simultaneously,
              leading to unpredictable results. This happens because the threads are "racing" to access
              and modify the same memory location.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Example of a Race Condition:</h3>
            <CodeBlock code={raceConditionExample} language="cpp" />
            <p className="mt-4 text-gray-700">
              In this example, multiple threads try to increment the counter variable simultaneously,
              leading to lost updates and incorrect results.
            </p>
          </CardContent>
        </Card>
      </Section>

      <Section title="OpenMP Basics" defaultOpen={false}>
        <Card className="bg-white shadow-lg">
          <CardContent className="pt-6">
            <p className="mb-4 text-gray-700">
              OpenMP (Open Multi-Processing) is an API that supports multi-platform shared memory
              multiprocessing programming in C, C++, and Fortran. It provides a simple and flexible
              interface for developing parallel applications.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Basic OpenMP Example:</h3>
            <CodeBlock code={openmpBasicExample} language="cpp" />
            <p className="mt-4 text-gray-700">
              This example shows how to parallelize a simple loop using OpenMP. The work is
              automatically distributed among available threads.
            </p>
          </CardContent>
        </Card>
      </Section>

      <Section title="OpenMP Locks" defaultOpen={false}>
        <Card className="bg-white shadow-lg">
          <CardContent className="pt-6">
            <p className="mb-4 text-gray-700">
              OpenMP provides locks to help prevent race conditions by ensuring mutual exclusion when
              accessing shared resources.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Example with Locks:</h3>
            <CodeBlock code={openmpLockExample} language="cpp" />
            <p className="mt-4 text-gray-700">
              This example shows how to use OpenMP locks to protect shared resources and prevent race
              conditions. The lock ensures that only one thread can increment the counter at a time.
            </p>
          </CardContent>
        </Card>
      </Section>
    </div>
    </main>
  );
}
