const nextMDX = require('@next/mdx');
const bundleAnalyzer = require('@next/bundle-analyzer');


const withMDX = nextMDX({
  extension: /[/\\](pages|blog)[/\\](.+)\.mdx?$/,
});

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

const nextConfig = {
  target: 'serverless',
  pageExtensions: ['jsx', 'js', 'mdx'],
  experimental: {
    flyingShuttle: true,
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL || 'https://march-works.marchworks.now.sh',
    SITE_NAME: 'MarchWorks',
  },
};

module.exports = withMDX(withBundleAnalyzer(nextConfig));
