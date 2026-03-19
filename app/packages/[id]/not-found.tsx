import Link from "next/link";
import { MapPinOff, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center bg-white">
      <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mb-6 border border-neutral-200">
        <MapPinOff className="w-12 h-12 text-neutral-400" />
      </div>
      <h2 className="text-3xl font-bold text-neutral-900 mb-3 tracking-tight">Tour Not Found</h2>
      <p className="text-[15px] text-neutral-500 max-w-md mx-auto mb-10 leading-relaxed">
        We couldn't track down the specific package you're looking for. It might have been taken offline or the link you used may be outdated.
      </p>
      <Link 
        href="/packages"
        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#1a5f7a] text-white font-medium hover:bg-[#1a5f7a]/90 hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto"
      >
        <ArrowLeft className="w-5 h-5 shrink-0" />
        Explore All Packages
      </Link>
    </div>
  );
}
