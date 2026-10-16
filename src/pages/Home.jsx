import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="grid items-center gap-9 overflow-hidden rounded-3xl border border-orange-100 bg-orange-50 p-6 sm:grid-cols-2 sm:p-10 lg:p-14">
      <div>
        <p className="text-[10px] font-bold tracking-[.2em] text-orange-800">
          A LITTLE INSPIRATION FOR YOUR TABLE
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight tracking-tight text-stone-900 sm:text-6xl">
          Good food,
          <br />
          <span className="text-orange-700 italic">good mood.</span>
        </h1>
        <p className="mt-4 max-w-md text-sm leading-6 text-stone-600">
          Find an easy favorite for tonight, or discover a new dish to share.
          Simple recipes, made for real home kitchens.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <Link
            to="/recipes"
            className="inline-flex items-center gap-2 rounded-lg bg-orange-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-800"
          >
            Browse recipes <ArrowRight size={16} />
          </Link>
          <span className="flex items-center gap-2 text-xs text-stone-500">
            <Heart size={14} className="text-orange-700" />
            Made with love
          </span>
        </div>
      </div>
      <img
        className="h-64 w-full rounded-2xl object-cover shadow-md shadow-orange-950/10 sm:h-80"
        src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85"
        alt="A bowl of pasta with fresh herbs"
      />
    </section>
  );
}
