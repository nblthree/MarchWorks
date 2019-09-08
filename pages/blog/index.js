import React from 'react';
import Head from 'next/head';

import Link from '../../components/Link';
import posts from '../../data/blog.json';

// Sort the posts so that newest post is first
posts.sort((a, b) => {
  const dateA = new Date(a.create_date);
  const dateB = new Date(b.create_date);

  if (dateA < dateB) {
    return 1;
  }
  if (dateA > dateB) {
    return -1;
  }
  return 0;
});

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Head>
          <title>Blog</title>
          <meta name="Description" content="Blog" />
        </Head>
        <div className="Blog">
          <section className="posts">
            {posts.map(post => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <div className="post">
                  <div className="header">
                    <h1>{post.title}</h1>
                    <span>{post.create_date}</span>
                  </div>
                  <div className="image">
                    <img src={post.cover} />
                  </div>
                </div>
              </Link>
            ))}
          </section>
          <style jsx>
            {`
              .Blog {
                width: 100%;
              }
              .posts {
                padding: 5% 5% 5% 5%;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
              }
              .post {
                border-radius: 5px;
                border: 1px solid var(--br-color);
                margin-bottom: 3rem;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                background-color: var(--post-bg);
                cursor: pointer;
                transition: transform 150ms ease-in-out, background 300ms ease-in-out,
                  border 300ms ease-in-out;
                height: 400px;
                position: relative;
              }

              .post:hover {
                transform: scale(1.01);
              }

              .header {
                padding: 1rem 1.5rem;
                width: 100%;
                position: absolute;
                z-index: 1;
                background: #04060840;
                box-sizing: border-box;
              }

              .image {
                width: 100%;
                height: 100%;
                display: flex;
                flex: 1;
                position: relative;
                overflow: hidden;
                border-bottom: 0.5px solid var(--br-color);
                border-radius: 0 0 5px 5px;
                transition: border 300ms ease-in-out;
              }

              img {
                margin: auto;
                width: 100%;
                height: 100%;
              }

              .post:last-child {
                border-bottom: none;
              }

              .header h1 {
                font-size: 2.25rem;
                letter-spacing: -0.5px;
                margin: 0.5rem 0;
              }

              .header span {
                //color: var(--gray);
                font-size: 1rem;
              }
              .post > div {
                color: #dddddd;
              }

              @media screen and (max-width: 950px) {
                .post h1 {
                  font-size: 1.5rem;
                }
                .post {
                  height: 50vh;
                }
              }
            `}
          </style>
        </div>
      </>
    );
  }
}

export default Blog;
