"use client";

import { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Package Detail Error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center bg-white">
      <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6 border border-red-100 shadow-sm">
        <AlertCircle className="w-12 h-12 text-red-500" />
      </div>
      <h2 className="text-3xl font-bold text-neutral-900 mb-3 tracking-tight">Something went wrong</h2>
      <p className="text-[15px] text-neutral-500 max-w-md mx-auto mb-10 leading-relaxed">
        We encountered an unexpected error while trying to load the details for this tour package. The connection might have been interrupted.
      </p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#1a5f7a] text-white font-medium hover:bg-[#1a5f7a]/90 hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto"
      >
        <RotateCcw className="w-5 h-5 shrink-0" />
        Try Again
      </button>
    </div>
  );
}
