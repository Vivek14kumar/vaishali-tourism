import { attractions } from "../../data/attractions";
import AttractionDetailClient from "./AttractionDetailClint";

// Required for static export of dynamic routes
export async function generateStaticParams() {
  return attractions.map((a) => ({ slug: a.slug }));
}

export default function Page({ params }) {
  const place = attractions.find((a) => a.slug === params.slug);

  if (!place) {
    return (
      <p className="text-center mt-20 text-red-600 text-xl">
        Attraction not found.
      </p>
    );
  }

  return <AttractionDetailClient place={place} />;
}
