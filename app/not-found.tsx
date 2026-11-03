import Link from 'next/link';
export default function NotFound(){return <main className="not-found"><span className="eyebrow">404 / LOST IN SPACE</span><h1>Wrong orbit.</h1><p>That page doesn’t exist, but the good stuff is one click away.</p><Link href="/" className="btn primary">Return home ↗</Link></main>}
