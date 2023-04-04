import React from 'react';
import Link from 'next/link';
import type { Post } from 'client';

interface Props {
  posts: Post[] | undefined;
  id?: string;
  readMoreText?: string;
}

function Posts({
  posts,
  id,
  readMoreText = 'Read more',
}: Props): JSX.Element {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <section {...(id && { id })}>
      <div className="grid">
          {posts.map((post) => (
            <div
              className="post-item"
              key={post.id ?? ''}
              id={`post-${post.id}`}>
              <div>
                <Link href={`/posts/${post.slug}`}>
                  <a>
                    <img src={post.featuredImage?.node.mediaItemUrl}/>
                    <h1 className='title'>{post.title()}</h1>
                  </a>
                </Link>
              </div>
            </div>
          ))}
          {posts && posts?.length < 1 && <p>No posts found.</p>}
      </div>
    </section>
  );
}

export default Posts;
