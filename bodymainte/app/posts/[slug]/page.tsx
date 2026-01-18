import { getAllPosts } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const post = getAllPosts().find(
    (p) => p.slug === slug
  );

  if (!post) return null;

  const processed = await remark()
    .use(html)
    .process(post.content);

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.date}</p>

      <article
        dangerouslySetInnerHTML={{
          __html: processed.toString(),
        }}
      />
    </main>
  );
}
