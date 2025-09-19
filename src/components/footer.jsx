import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Footer() {
  return (
    <footer className={`${lato.className} bg-gray-800 text-white text-center py-4  md:pb-0 pb-24 mt-6`}>
      <p>© {new Date().getFullYear()} Vaishali Tourism. All rights reserved.</p>
      <p className="text-sm mt-1">
        Designed & Maintained by{" "}
        <span className="font-semibold">VIK-TECHZ</span> |{" "}
        <a
          href="mailto:viktechzweb@gmail.com"
          className="text-blue-400 hover:underline"
        >
          viktechzweb@gmail.com
        </a>
      </p>
    </footer>
  );
}
