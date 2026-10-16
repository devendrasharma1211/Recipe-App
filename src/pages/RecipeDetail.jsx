import { ArrowLeft, Check, Clock3, CookingPot, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { recipes } from "../recipeData.js";

export default function RecipeDetail() {
  const { slug } = useParams();
  const recipe = recipes.find((item) => item.slug === slug);
  if (!recipe)
    return (
      <section className="py-20 text-center">
        <span className="text-5xl">🧑‍🍳</span>
        <h1 className="mt-4 font-serif text-3xl font-semibold">
          We couldn’t find that recipe
        </h1>
        <p className="mt-2 text-sm text-stone-500">
          Let’s find something lovely to make instead.
        </p>
        <Link
          to="/recipes"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-orange-700 px-4 py-3 text-sm text-white"
        >
          <ArrowLeft size={15} />
          Back to recipes
        </Link>
      </section>
    );
  return (
    <article>
      <Link
        className="mb-5 inline-flex items-center gap-2 text-xs text-stone-500 transition hover:text-orange-800"
        to="/recipes"
      >
        <ArrowLeft size={15} />
        All recipes
      </Link>
      <div className="grid overflow-hidden rounded-3xl border border-orange-100 bg-orange-50 lg:grid-cols-[1.2fr_.8fr]">
        <div className="self-center p-6 sm:p-10">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[.18em] text-orange-800">
            <Sparkles size={13} />A LITTLE KITCHEN FAVORITE
          </div>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            {recipe.name}
            <span className="text-orange-700">.</span>
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-7 text-stone-600">
            {recipe.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-orange-200 bg-white px-3 py-2 text-xs text-stone-600">
              {recipe.cuisine}
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-orange-200 bg-white px-3 py-2 text-xs text-stone-600">
              <Clock3 size={13} />
              {recipe.time} minutes
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-orange-200 bg-white px-3 py-2 text-xs text-stone-600">
              <CookingPot size={13} />
              Easygoing
            </span>
          </div>
        </div>
        <div className="relative grid min-h-48 place-items-center overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 sm:min-h-64">
          <div className="absolute size-48 rounded-full border border-orange-300/50 sm:size-60" />
          <div className="absolute size-40 rounded-full border border-dashed border-orange-300/60 sm:size-48" />
          <span className="z-10 text-8xl drop-shadow-lg sm:text-9xl">
            {recipe.emoji}
          </span>
          <span className="absolute bottom-4 right-5 text-[9px] font-semibold tracking-widest text-orange-900/50">
            SOMETHING DELICIOUS
          </span>
        </div>
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
        <section className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-orange-50 text-orange-800">
              ✳
            </span>
            <div>
              <p className="text-[9px] font-bold tracking-widest text-orange-800">
                A LITTLE PREP
              </p>
              <h2 className="font-serif text-xl font-semibold">
                What you’ll need
              </h2>
            </div>
          </div>
          <ul>
            {recipe.ingredients.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 border-b border-stone-100 py-3 text-xs text-stone-600 last:border-0"
              >
                <span className="grid size-5 shrink-0 place-items-center rounded-full border border-orange-200 text-orange-700">
                  <Check size={12} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-lg bg-orange-50 p-3 text-xs text-stone-600">
            <span className="mr-1.5 text-orange-800">✦</span>A little tip: taste
            as you go, and make it yours.
          </p>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-orange-50 text-orange-800">
              ↗
            </span>
            <div>
              <p className="text-[9px] font-bold tracking-widest text-orange-800">
                LET’S MAKE IT
              </p>
              <h2 className="font-serif text-xl font-semibold">
                From kitchen to table
              </h2>
            </div>
          </div>
          <ol>
            {recipe.steps.map((step, i) => (
              <li
                key={i}
                className="flex gap-4 border-b border-stone-100 py-4 last:border-0"
              >
                <span className="font-serif text-base font-semibold text-orange-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xs leading-6 text-stone-600">{step}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
      <div className="flex items-center justify-center gap-3 py-6 text-center font-serif text-sm italic text-stone-600">
        <span className="text-xl text-orange-700">♡</span>Take your time, enjoy
        the little things, and don’t forget to save yourself a taste.
      </div>
    </article>
  );
}
