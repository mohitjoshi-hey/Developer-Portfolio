export interface Project {
  id: number;
  title: string;
  status: string;
  badgeType: "progress" | "complete" | "award";
  description: string;
  terminalTitle: string;
  terminal: string[];
  tech: string[];
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "stlgo",
    status: "Active Library",
    badgeType: "complete",
    description:
      "A high-performance generic algorithms and containers library for Go (Golang). Implements slice-backed Stack, Queue, and Deque containers alongside binary search and sorting routines designed around CPU cache locality.",
    terminalTitle: "container_test.go",
    terminal: [
      "$ go test -bench=. -benchmem ./...",
      "> BenchmarkDeque_PushBack-8: 42.1 ns/op (0 B/op, 0 allocs/op)",
      "> BenchmarkBinarySearch-8: 14.8 ns/op",
      "✓ PASS: Generic benchmarks and race detectors validated",
    ],
    tech: ["Go (Golang)", "Generics", "Data Structures", "Algorithms", "Benchmarking"],
    github: "https://github.com/mohitjoshi-hey",
  },
  {
    id: 2,
    title: "Smart Calculator System",
    status: "Completed",
    badgeType: "complete",
    description:
      "A stack-based C++ expression evaluation engine supporting operator precedence, nested parentheses, floating-point arithmetic, exponentiation, and context-aware unary parsing.",
    terminalTitle: "calcforge.cpp",
    terminal: [
      "$ g++ -O3 calcforge.cpp -o calcforge",
      "$ ./calcforge",
      "> Expression: ((15 * 3) + 200) / 2",
      "✓ Computed Result = 122.50 [0.002ms]",
    ],
    tech: ["C++", "Shunting-Yard", "STL", "DSA", "Algorithms"],
    github: "https://github.com/mohitjoshi-hey/Smart-Calculator-CPP",
  },
  {
    id: 3,
    title: "Leads Tracker Chrome Extension",
    status: "Completed",
    badgeType: "complete",
    description:
      "A lightweight browser extension for capturing, persisting, and organizing web links and leads with active-tab URL retrieval and localStorage sync.",
    terminalTitle: "manifest.json",
    terminal: [
      "> chrome.tabs.query({ active: true })",
      "> URL captured: https://github.com/apache/infrastructure",
      "> Synchronizing with localStorage...",
      "✓ Saved 1 lead • Active session restored",
    ],
    tech: ["JavaScript", "Chrome Extensions API", "HTML5", "CSS3", "localStorage"],
    github: "https://github.com/mohitjoshi-hey",
  },
];