'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ClusterDiagram from './ClusterDiagram';

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

const ClusterPresentation = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-10 bg-gray-50">
      {/* Introduction */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Introduction to Cluster Computing</h1>
        <p className="text-xl text-gray-700">A guide to understanding cluster computing fundamentals</p>
      </div>

      {/* Cluster Architecture Visualization */}
      <Section title="Cluster Architecture Visualization" defaultOpen={false}>
        <div className="mb-6">
            <ClusterDiagram />
          </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Understanding the Process</h2>
          <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg shadow-inner">
            <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-900">Step by Step Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-800 font-bold flex-shrink-0">1</span>
                  <div>
                    <strong className="text-blue-900">Connect to Login Node</strong>
                    <p className="mt-1 text-sm">Your entry point to the cluster</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-800 font-bold flex-shrink-0">2</span>
                  <div>
                    <strong className="text-blue-900">Submit Job Request</strong>
                    <p className="mt-1 text-sm">SLURM schedules your computation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-800 font-bold flex-shrink-0">3</span>
                  <div>
                    <strong className="text-blue-900">Job Queuing</strong>
                    <p className="mt-1 text-sm">Wait for resources to become available</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-800 font-bold flex-shrink-0">4</span>
                  <div>
                    <strong className="text-blue-900">Resource Assignment</strong>
                    <p className="mt-1 text-sm">Get access to compute nodes</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-800 font-bold flex-shrink-0">5</span>
                  <div>
                    <strong className="text-blue-900">Job Management</strong>
                    <p className="mt-1 text-sm">Monitor or cancel as needed</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-900">Essential Commands</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg hover:from-blue-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <code className="bg-white px-3 py-1.5 rounded-md font-mono text-blue-800 min-w-[80px] text-center shadow-sm">sbatch</code>
                    <div>
                      <div className="font-medium text-blue-900">Submit a batch job</div>
                      <div className="text-sm text-gray-600">Schedule a script for background processing</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg hover:from-blue-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <code className="bg-white px-3 py-1.5 rounded-md font-mono text-blue-800 min-w-[80px] text-center shadow-sm">salloc</code>
                    <div>
                      <div className="font-medium text-blue-900">Request interactive session</div>
                      <div className="text-sm text-gray-600">Get immediate access to compute resources</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg hover:from-blue-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <code className="bg-white px-3 py-1.5 rounded-md font-mono text-blue-800 min-w-[80px] text-center shadow-sm">squeue</code>
                    <div>
                      <div className="font-medium text-blue-900">View job queue</div>
                      <div className="text-sm text-gray-600">Monitor status of all submitted jobs</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg hover:from-blue-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <code className="bg-white px-3 py-1.5 rounded-md font-mono text-blue-800 min-w-[80px] text-center shadow-sm">scancel</code>
                    <div>
                      <div className="font-medium text-blue-900">Cancel job</div>
                      <div className="text-sm text-gray-600">Stop a running or queued job</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>
      </Section>

      {/* 1. Node Types */}
      <Section title="1. Understanding Node Types">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 border-b">
              <CardTitle className="text-2xl text-green-700">Login Node</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li className="text-lg">Entry point to the cluster</li>
                <li className="text-lg">For lightweight tasks:
                  <ul className="list-circle pl-6 mt-2 space-y-2">
                    <li>Code editing</li>
                    <li>Git operations</li>
                    <li>File management</li>
                  </ul>
                </li>
                <li className="text-red-600 font-semibold mt-4 flex items-center">
                  <span className="text-2xl mr-2">⚠️</span>
                  <span>Avoid heavy computations here!</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
              <CardTitle className="text-2xl text-blue-700">Compute Nodes</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li className="text-lg">Main processing power</li>
                <li className="text-lg">Exclusive allocation</li>
                <li className="text-lg">For:
                  <ul className="list-circle pl-6 mt-2 space-y-2">
                    <li>Code compilation</li>
                    <li>Heavy computations</li>
                    <li>Job execution</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 2. SLURM Commands */}
      <Section title="2. Essential SLURM Commands">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <code className="block text-lg bg-white p-2 rounded border border-gray-200 text-blue-600 mb-2 text-center font-mono">salloc</code>
                <p className="text-gray-700 text-center">Get interactive node</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <code className="block text-lg bg-white p-2 rounded border border-gray-200 text-blue-600 mb-2 text-center font-mono">squeue</code>
                <p className="text-gray-700 text-center">Check job status</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <code className="block text-lg bg-white p-2 rounded border border-gray-200 text-blue-600 mb-2 text-center font-mono">sbatch</code>
                <p className="text-gray-700 text-center">Submit batch jobs</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <code className="block text-lg bg-white p-2 rounded border border-gray-200 text-blue-600 mb-2 text-center font-mono">scancel</code>
                <p className="text-gray-700 text-center">Cancel jobs</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <code className="block text-lg bg-white p-2 rounded border border-gray-200 text-blue-600 mb-2 text-center font-mono">srun</code>
                <p className="text-gray-700 text-center">Run commands on nodes</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* 3. Node Architecture */}
      <Section title="3. Node Architecture">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 border-b">
              <CardTitle className="text-2xl text-purple-700">Key Concepts</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                <li>CPU cores and layout</li>
                <li>Memory hierarchy (L1, L2, L3 cache)</li>
                <li>NUMA architecture</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-b">
              <CardTitle className="text-2xl text-indigo-700">Analysis Tools</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="list-disc pl-6 space-y-4 text-gray-700">
                <li>
                  <code className="text-lg bg-white px-3 py-1 rounded border border-gray-200 text-blue-600 font-mono">/proc/cpuinfo</code>
                </li>
                <li>
                  <code className="text-lg bg-white px-3 py-1 rounded border border-gray-200 text-blue-600 font-mono">lscpu</code>
                </li>
                <li>
                  <code className="text-lg bg-white px-3 py-1 rounded border border-gray-200 text-blue-600 font-mono">hwloc</code>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* 4. Common Questions */}
      <Section title="4. FAQ">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold text-lg text-blue-900 mb-2">Q: Why can&apos;t I compile on the login node?</p>
                <p className="text-gray-700">A: Login nodes are shared resources. Compilation is CPU-intensive and could affect other users.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold text-lg text-blue-900 mb-2">Q: What happens if my job exceeds the wall time?</p>
                <p className="text-gray-700">A: The job will be forcefully terminated. Always estimate conservatively!</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold text-lg text-blue-900 mb-2">Q: How do I know how many resources to request?</p>
                <p className="text-gray-700">A: Start small, test, and scale up based on your needs and job performance.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
};

export default ClusterPresentation;
