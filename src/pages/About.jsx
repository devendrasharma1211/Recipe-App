import { Heart } from "lucide-react";

export default function About() {
  return (
    <section className="mx-auto max-w-2xl rounded-3xl border border-orange-100 bg-orange-50 px-6 py-10 text-center sm:px-12 sm:py-14">
      <span className="mx-auto grid size-11 place-items-center rounded-full bg-white text-orange-700">
        <Heart size={20} />
      </span>
      <p className="mt-5 text-[10px] font-bold tracking-[.2em] text-orange-800">
        A NOTE FROM OUR KITCHEN
      </p>
      <h1 className="mt-3 font-serif text-4xl font-semibold text-stone-900">
        About Recipe Book
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-stone-600">
        Recipe Book is a cozy collection of simple, comforting meals for
        everyday cooks. We believe good food is best when it’s shared, so pick a
        recipe, make it your own, and pull up a chair.
      </p>
    </section>
  );
}
