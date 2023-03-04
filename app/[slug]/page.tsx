import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface Props {
  params: { slug: string };
}

export default function Blog({ params }: Props) {
  const post = allPosts.find(post => post.slug === params.slug);

  if (post === undefined) return <h1>Post not found! 🥲</h1>;

  const Content = useMDXComponent(post.body.code);
  return (
    <main className='mx-auto my-20 w-[550px]'>
      <h1>{post.title}</h1>
      <article className='prose'>
        <Content />
      </article>
    </main>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = allPosts.find(post => post.slug === params.slug);
  // Add whatever SEO content you want.
  return { title: post?.title };
}

export async function generateStaticParams() {
  return allPosts.map(post => ({ slug: post.slug }));
}
