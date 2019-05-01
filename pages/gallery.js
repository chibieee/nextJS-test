import Link from "next/link";
import Header from "../components/header";

function Index() {
    return (
        <main>
            <Header />
            <section>
                <h1>This is the Gallery Page</h1>
                <Link href="/about">
                    <a>Go to About Me</a>
                </Link>
                <Link href="/">
                    <a>Go Home</a>
                </Link>
            </section>
        </main>
    );
}

export default Index;
