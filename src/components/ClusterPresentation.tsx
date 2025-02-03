import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-2">{title}</h2>
    {children}
  </div>
);

const ClusterPresentation = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-10 bg-gray-50">
      {/* Introduction */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Introduction to Cluster Computing</h1>
        <p className="text-xl text-gray-700">A guide to understanding cluster computing fundamentals</p>
      </div>

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
