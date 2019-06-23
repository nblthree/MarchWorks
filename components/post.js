import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/tag';

import posts from '../data/blog.json';

const findPost = id => posts.find(post => post.id === id);

const Post = ({ children, id }) => {
  const post = findPost(id);

  return (
    <>
      <article>
        <Head>
          <title>{post.title} - MarchWorks</title>
        </Head>

        <div className="cover">
          <img src={post.cover} />
        </div>

        <header>
          <h1>{post.title}</h1>
          <p>{post.create_date}</p>
        </header>

        <MDXProvider>{children}</MDXProvider>

        <style jsx>
          {`
            article {
              max-width: 42rem;
              margin: 0 auto;
              padding: 0 20px;
              font-size: 1.15rem;
              letter-spacing: -0.022rem;
              line-height: 1.8;
            }

            article :global(p) {
              margin: 1.875rem 0;
            }

            article :global(header) {
              margin-bottom: 2rem;
              text-align: center;
            }

            article :global(header h1) {
              color: inherit;
              font-size: 2.25rem;
              font-weight: bold;
              line-height: 1.2;
              margin: 0 0 0.5rem 0;
            }

            article :global(header p) {
              margin: 0;
              color: var(--gray);
              font-size: 1rem;
            }

            article :global(pre code) {
              background: none;
            }

            @media screen and (max-width: 950px) {
              article {
                font-size: 1rem;
              }
            }
            .cover {
              display: flex;
            }
            .cover img {
              margin: auto;
              max-width: 100%;
            }
          `}
        </style>
      </article>
    </>
  );
};

export default Post;
