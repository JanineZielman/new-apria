import { getNextStaticProps } from '@faustjs/next';

import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Footer, Header, Posts } from 'components';
import { client } from 'client';
import Link from 'next/link';

export default function Page() {
  const { usePosts, useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const posts = usePosts({
    first: 21,
  });

  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <Head>
        <title>
          {generalSettings.title} - {generalSettings.description}
        </title>
      </Head>

      <div className='flex'>
        <div className='column1'>
          <div className="logo-container">
            <a href="/" className="logo">
              <svg className="apria_logo" width="100%" height="100%" viewBox="0 0 100 100"><circle cx="50%" cy="50%" r="50"></circle></svg>
            </a>
          </div>
          <p className='title'>
            APRIA: ArtEZ Platform for Research Interventions of the Arts is an online platform that curates a peer-reviewed journal (APRIA journal) and publishes high-impact essays, image and sound contributions that examine art and interventions of the arts in relation to science and society, and that encourage dialogue around themes that are critical and urgent to the futures that we will live in.
          </p>
        </div>

        <div
          className="post-highlight-item column2"
          key={posts.nodes[0].id ?? ''}
          id={`post-${posts.nodes[0].id}`}
        >
          <Link href={`/posts/${posts.nodes[0].slug}`}>
            <a>
              <div className='category'>{posts.nodes[0].categories().nodes[0].name}</div>
              <img src={posts.nodes[0].featuredImage?.node.mediaItemUrl}/>
              <h1 className='title'>{posts.nodes[0].title()}</h1>
            </a>
          </Link>
        </div>
      </div>


        <Posts
          posts={posts.nodes}
        />
     
      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
