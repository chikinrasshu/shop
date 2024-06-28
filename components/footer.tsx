import Link from "next/link";

function Footer() {
  return (
    <footer className="sticky inset-x-0 bottom-0 border-t border-blue-6 bg-blue-3/70 text-center text-sm font-light text-blue-11 backdrop-blur-sm">
      &copy; 2024 <Link href="/">shop.chikinrasshu.dev</Link>
    </footer>
  );
}

export { Footer };
