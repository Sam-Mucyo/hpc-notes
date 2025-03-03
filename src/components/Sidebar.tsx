'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const chapters = [
  {
    title: "Introduction to Cluster Computing",
    path: "/",
  },
  {
    title: "Shared Memory Computing",
    path: "/shared-memory",
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-gray-100 p-4 fixed left-0 top-0 overflow-y-auto">
      <h2 className="text-xl font-bold text-blue-900 mb-6">Course Chapters</h2>
      <nav className="space-y-2">
        {chapters.map((chapter) => (
          <Link
            key={chapter.path}
            href={chapter.path}
            className={cn(
              "block p-3 rounded-lg transition-colors",
              pathname === chapter.path
                ? "bg-blue-100 text-blue-900 font-medium"
                : "hover:bg-gray-200 text-gray-700"
            )}
          >
            {chapter.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
