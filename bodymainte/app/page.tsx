// app/page.tsx
import Link from "next/link";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main>
      <h1>ボディメンテナンス（仮）</h1>
      <Link href="/posts">記事一覧へ</Link>
    </main>
  );
}
