import { useMemo, useState } from "react";
import { ArrowRight, Clock3, Search, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { recipes } from "../recipeData.js";

const cuisines = ["All", "Indian", "Italian", "Mexican", "Japanese"];
export default function Recipes() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const visible = useMemo(() =>
      recipes.filter((r) =>
          (active === "All" || r.cuisine === active) &&
          r.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [active, query],
  );

  return (
    <section>
      <div className="mx-auto max-w-xl text-center">
        <p className="text-[10px] font-bold tracking-[.2em] text-orange-800">
          A COLLECTION FOR EVERY CRAVING
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900">
          Recipes <span className="text-orange-700 italic">to love.</span>
        </h1>
        <p className="mt-2 text-sm text-stone-500">
          Everyday favorites, a little bit of everything. Pick a dish and make
          it yours.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by cuisine"
        >
          {cuisines.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-xs transition ${active === c ? "border-orange-700 bg-orange-700 text-white" : "border-orange-200 bg-white text-stone-700 hover:border-orange-500 hover:text-orange-800"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 self-end rounded-lg border border-stone-200 bg-white px-3 py-2 text-stone-400 sm:self-auto">
          <Search size={15} />
          <input
            className="w-36 bg-transparent text-xs text-stone-700 outline-none placeholder:text-stone-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find a recipe"
            aria-label="Find a recipe"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="text-lg leading-none"
            >
              ×
            </button>
          )}
        </label>
      </div>
      <div className="mt-7 flex justify-between border-b border-stone-200 pb-2 text-[10px] tracking-widest text-stone-400">
        <span className="flex items-center gap-1.5">
          <SlidersHorizontal size={13} />
          {active === "All"
            ? "ALL THE GOOD THINGS"
            : `${active.toUpperCase()} FAVORITES`}
        </span>
        <span>{visible.length} recipes</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {visible.map((recipe) => (
          <Link key={recipe.slug} to={`/recipes/${recipe.slug}`}
            className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-950/5"
          >
            <div className="relative grid h-28 place-items-center bg-orange-50 sm:h-36">
              <span className="absolute left-3 top-3 text-[8px] font-semibold tracking-widest text-orange-900/50">
                MADE WITH LOVE
              </span>
              <span className="text-5xl drop-shadow-sm transition group-hover:scale-110 sm:text-6xl">
                {recipe.emoji}
              </span>
              <span className="absolute bottom-2 right-2 grid size-7 place-items-center rounded-full bg-white/90 text-orange-800">
                <ArrowRight size={14} />
              </span>
            </div>
            <div className="p-3 sm:p-4">
              <h2 className="text-xs font-semibold text-stone-900 sm:text-sm">
                {recipe.name}
              </h2>
              <div className="mt-2 flex items-center gap-1.5 text-[10px] text-stone-500">
                <span>{recipe.cuisine}</span>
                <span className="text-orange-300">·</span>
                <Clock3 size={12} />
                <span>{recipe.time} min</span>
              </div>
              <p className="mt-2 hidden text-xs leading-5 text-stone-500 sm:block">
                {recipe.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-orange-800">
                View recipe <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      {visible.length === 0 && (
        <div className="py-16 text-center">
          <span className="text-4xl">🍋</span>
          <h2 className="mt-3 font-serif text-2xl font-semibold">
            Nothing on the menu just yet
          </h2>
          <p className="mt-2 text-sm text-stone-500">
            Try another search, or explore all our recipes.
          </p>
          <button
            onClick={() => {
              setQuery("");
              setActive("All");
            }}
            className="mt-5 rounded-lg bg-orange-700 px-4 py-2.5 text-sm font-semibold text-white"
          >
            Show all recipes
          </button>
        </div>
      )}
    </section>
  );
}
