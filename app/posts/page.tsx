import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <main>
      <h1>記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
