'use client';

import React from 'react';

const ClusterDiagram = () => {
  return (
    <div className="w-full bg-white p-8 rounded-lg shadow-sm">
      <svg
        viewBox="0 0 800 400"
        className="w-full h-auto"
        style={{ maxHeight: "400px" }}
      >
        {/* Background Cluster Environment */}
        <rect x="100" y="50" width="600" height="300" rx="20" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
        <text x="120" y="90" className="text-sm" fill="#475569" fontSize="14">Cluster Computing Environment</text>

        {/* Login Node */}
        <rect x="150" y="150" width="120" height="80" rx="10" fill="#e3f2fd" stroke="#1e88e5" strokeWidth="2" />
        <text x="210" y="190" textAnchor="middle" fill="#1e88e5" fontSize="16" fontWeight="bold">Login Node</text>
        <text x="210" y="210" textAnchor="middle" fill="#64748b" fontSize="12">Entry Point</text>

        {/* SLURM Scheduler */}
        <rect x="350" y="150" width="120" height="80" rx="10" fill="#fff3e0" stroke="#f57c00" strokeWidth="2" />
        <text x="410" y="190" textAnchor="middle" fill="#f57c00" fontSize="16" fontWeight="bold">SLURM</text>
        <text x="410" y="210" textAnchor="middle" fill="#64748b" fontSize="12">Job Scheduler</text>

        {/* Compute Nodes */}
        <rect x="550" y="120" width="120" height="140" rx="10" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="2" />
        <text x="610" y="150" textAnchor="middle" fill="#2e7d32" fontSize="16" fontWeight="bold">Compute</text>
        <text x="610" y="170" textAnchor="middle" fill="#2e7d32" fontSize="16" fontWeight="bold">Nodes</text>

        {/* User */}
        <circle cx="50" cy="190" r="30" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
        <text x="50" y="195" textAnchor="middle" fill="#9333ea" fontSize="14" fontWeight="bold">You</text>

        {/* Arrows and Labels */}
        {/* User to Login */}
        <path d="M85 190 L140 190" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <text x="112" y="180" textAnchor="middle" fill="#64748b" fontSize="12">SSH</text>

        {/* Login to SLURM */}
        <path d="M280 170 L340 170" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <text x="310" y="160" textAnchor="middle" fill="#64748b" fontSize="12">sbatch</text>
        <path d="M280 210 L340 210" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <text x="310" y="230" textAnchor="middle" fill="#64748b" fontSize="12">salloc</text>

        {/* SLURM to Compute */}
        <path d="M480 190 L540 190" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <text x="510" y="180" textAnchor="middle" fill="#64748b" fontSize="12">assign</text>

        {/* Arrow Marker Definition */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default ClusterDiagram;
