import { getNextStaticProps, is404 } from '@faustjs/next';
import { client, Post } from 'client';
import { Footer, Header} from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

export interface PostProps {
  post: Post | Post['preview']['node'] | null | undefined;
}

export function PostComponent({ post }: PostProps) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;


  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <Head>
        <title>
          {post?.title()} - {generalSettings.title}
        </title>
      </Head>


      <main className="article">
        <div className='info-bar'>
          <div className='date'>
            <div className='field'>DATE</div>
            <div className='data'>{post.date}</div>
          </div>
          <div className='date'>
            <div className='field'>Published in</div>
            <div className='data'>{post.date}</div>
          </div>
          <div className='date'>
            <div className='field'>DOI</div>
            <div className='data'>{post.date}</div>
          </div>
        </div>
        <h1 className='headline'>{post?.title()}</h1>
        {/* <img src={post.featuredImage?.node.mediaItemUrl}/> */}
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: post?.content() ?? '' }} />
        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}

export default function Page() {
  const { usePost } = client;
  const post = usePost();

  return <PostComponent post={post} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
