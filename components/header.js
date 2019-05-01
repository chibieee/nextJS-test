import Link from "next/link";

function Header() {
  return (
    <header>
      <h1><Link href="/"><a>Logo // Header Goes Here that goes Home</a></Link></h1>
      <ul>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
        <Link href="/gallery">
          <a>Go to Gallery Page</a>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
