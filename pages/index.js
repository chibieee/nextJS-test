import Link from "next/link";
import Header from "../components/header";

function Index() {
  return (
    <main>
      <Header />
      <section>
        <h1>This is the Home Page!</h1>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
        <Link href="/gallery">
          <a>Go to Gallery Page</a>
        </Link>
      </section>
    </main>
  );
}

export default Index;
