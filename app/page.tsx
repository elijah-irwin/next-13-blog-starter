import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';

export default function Home() {
  return (
    <main className='flex flex-col gap-3 mx-auto my-20 w-[550px]'>
      {allPosts.map(post => (
        <Link
          href={post.slug}
          key={post._id}
          className='flex flex-col gap-1 border border-slate-300 rounded-md p-5 shadow-sm transition-all hover:border-purple-500 hover:scale-[101%] bg-white'>
          <h2 className='text-2xl font-medium'>{post.title}</h2>
          <div className='text-slate-400'>{post.date.split('T')[0]}</div>
        </Link>
      ))}
    </main>
  );
}
