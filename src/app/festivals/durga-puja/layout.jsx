// app/festivals/durga-puja/layout.jsx

export const metadata = {
  title: "Durga Puja in Kolkata | Festivals of India",
  description: "Discover Durga Puja in Kolkata, a UNESCO-recognized cultural festival...",
  openGraph: {
    title: "Durga Puja in Kolkata | Festivals of India",
    description: "Explore the beauty and grandeur of Durga Puja in Kolkata...",
    url: "https://vaishalitourism.in/festivals/durga-puja",
    images: [
      {
        url: "https://vaishalitourism.in/images/durga-puja-hero1.jpeg",
        width: 1200,
        height: 630,
        alt: "Durga Puja celebrations in Kolkata",
      },
    ],
  },
};

export default function DurgaPujaLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
