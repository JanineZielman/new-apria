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
          {posts.map((post) => {
            return(
              <div
                className="post-item"
                key={post.id ?? ''}
                id={`post-${post.id}`}
              >
                <Link href={`/posts/${post.slug}`}>
                  <a>
                    <div className='category'>{post.categories().nodes[0].name}</div>
                    <img src={post.featuredImage?.node.mediaItemUrl}/>
                    <h1 className='title'>{post.title()}</h1>
                  </a>
                </Link>
              </div>
            )
          })}
          {posts && posts?.length < 1 && <p>No posts found.</p>}
      </div>
    </section>
  );
}

export default Posts;
