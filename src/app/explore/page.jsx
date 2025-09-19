import Image from 'next/image'
import Link from 'next/link'

// Place this file in your Next.js app (e.g. app/explore/page.jsx) or pages folder
// Requires Tailwind CSS configured in the project. Replace image src with your images in /public.

export default function ExploreMore() {
  const highlights = [
    { key: 'history', title: 'Historical Monuments', desc: 'Ashokan Pillar, Ancient Ruins', icon: '🏯' },
    { key: 'spiritual', title: 'Spiritual Experiences', desc: 'Stupas, Temples, Peace', icon: '🪔' },
    { key: 'nature', title: 'Nature & Parks', desc: 'Green spaces & Rivers', icon: '🌳' },
    { key: 'food', title: 'Local Cuisine', desc: 'Litti-Chokha & Street Food', icon: '🍛' },
    { key: 'culture', title: 'Culture & Festivals', desc: 'Local fairs & festivities', icon: '🎭' },
    { key: 'crafts', title: 'Handicrafts & Shopping', desc: 'Local artisans', icon: '🛍️' },
  ]

  const attractions = [
    { title: 'Ashokan Pillar', img: '/images/ashokan.jpg', blurb: 'A symbol of ancient India and Ashoka\'s legacy.' },
    { title: 'Buddha Stupa', img: '/images/stupa.jpg', blurb: 'A sacred Buddhist pilgrimage site.' },
    { title: 'Vishwa Shanti Stupa', img: '/images/shanti.jpg', blurb: 'Restorative peace and panoramic views.' },
    { title: 'Archaeological Museum', img: '/images/museum.jpg', blurb: 'Artifacts and local history on display.' },
  ]

  const gallery = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.jpg',
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src="/images/vaishali-hero.jpg"
          alt="Vaishali scenic"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-20 text-white">
          <h1 className="text-3xl md:text-5xl font-serif leading-tight">Discover the Timeless Heritage of Vaishali</h1>
          <p className="mt-4 text-sm md:text-lg max-w-xl">From ancient democracy to serene Buddhist relics — explore landscapes, cuisine, and living traditions.</p>
          <div className="mt-6 flex gap-3">
            <Link href="#plan" className="inline-block bg-amber-500 text-black px-5 py-3 rounded-md font-semibold shadow">Plan Your Visit</Link>
            <Link href="#highlights" className="inline-block bg-white bg-opacity-10 px-5 py-3 rounded-md border border-white/20">Explore Highlights</Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS GRID */}
      <section id="highlights" className="py-12 px-6 md:px-20">
        <h2 className="text-2xl font-semibold mb-6">Explore by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {highlights.map((h) => (
            <article key={h.key} className="rounded-lg p-4 bg-amber-50 hover:shadow-lg transition-shadow">
              <div className="text-3xl">{h.icon}</div>
              <h3 className="mt-3 font-medium">{h.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{h.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ATTRACTIONS CAROUSEL (simple horizontal scroll) */}
      <section className="py-12 px-6 md:px-20 bg-slate-50">
        <h2 className="text-2xl font-semibold mb-6">Top Attractions</h2>
        <div className="flex gap-6 overflow-x-auto py-2 scrollbar-hide">
          {attractions.map((a) => (
            <div key={a.title} className="min-w-[320px] bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={a.img} alt={a.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{a.blurb}</p>
                <Link href="#" className="mt-3 inline-block text-amber-600 text-sm">Read more →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY / EXPERIENCE */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-2xl font-semibold mb-6">Experience Vaishali</h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <Image src="/images/ruins.jpg" alt="Ruins" width={800} height={500} className="rounded-lg object-cover" />
            </div>
            <div className="md:w-1/2">
              <h3 className="font-serif text-xl">Walk through ancient ruins</h3>
              <p className="mt-3 text-gray-600">Explore remnants of the past where one of the world\'s earliest republics flourished. Guided tours are available that explain Vaishali's political and spiritual significance.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2 order-2 md:order-1">
              <h3 className="font-serif text-xl">Taste local flavors</h3>
              <p className="mt-3 text-gray-600">Try authentic Bihari dishes like litti-chokha at local stalls and family-run eateries—experience recipes passed down generations.</p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <Image src="/images/food.jpg" alt="Food" width={800} height={500} className="rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PLAN YOUR TRIP */}
      <section id="plan" className="py-12 px-6 md:px-20 bg-amber-50 rounded-t-xl">
        <h2 className="text-2xl font-semibold mb-4">Plan Your Trip</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow">
            <h4 className="font-semibold">Best time to visit</h4>
            <p className="mt-2 text-sm text-gray-700">October – March (pleasant weather, festival season)</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow">
            <h4 className="font-semibold">How to reach</h4>
            <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
              <li>Nearest airport: Patna (≈60–90 km)</li>
              <li>By rail: Regular trains to Hajipur / Vaishali region</li>
              <li>By road: Well-connected via NH routes and local buses/taxis</li>
            </ul>
          </div>

          <div className="p-4 bg-white rounded-lg shadow">
            <h4 className="font-semibold">Where to stay</h4>
            <p className="mt-2 text-sm text-gray-700">Guesthouses in Hajipur, boutique hotels, and heritage stays in nearby towns. Book in advance during festivals.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {gallery.map((src, idx) => (
            <div key={idx} className="relative h-40 md:h-32 lg:h-28 w-full rounded overflow-hidden">
              <Image src={src} alt={`gallery-${idx}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="py-12 px-6 md:px-20 bg-slate-50">
        <h2 className="text-2xl font-semibold mb-6">Map & Nearby</h2>
        <div className="w-full h-80 rounded overflow-hidden shadow">
          {/* Replace the src below with an embed URL for Vaishali or dynamic map */}
          <iframe
            title="Vaishali map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="relative mt-12">
        <div className="relative h-56 md:h-72">
          <Image src="/images/vaishali-cta.jpg" alt="cta" fill className="object-cover brightness-75" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h3 className="text-2xl md:text-4xl font-serif">Ready to explore Vaishali?</h3>
              <p className="mt-3 text-sm md:text-base">Plan your itinerary, book guided tours, or find the best local food spots.</p>
              <div className="mt-4">
                <Link href="#plan" className="inline-block bg-amber-400 text-black px-5 py-3 rounded-md font-semibold">Book Your Journey</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-6 px-6 md:px-20 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Vaishali Tourism</p>
          <nav className="flex gap-4 text-sm">
            <Link href="#highlights">Highlights</Link>
            <Link href="#plan">Plan</Link>
            <Link href="#">Contact</Link>
          </nav>
        </div>
      </footer>
    </main>
  )
}
