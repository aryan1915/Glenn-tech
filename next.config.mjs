/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/about-glanntech',
        destination: '/about-glenntech',
        permanent: true,
      },
      {
        source: '/about-glanntech/how-we-work',
        destination: '/how-we-work',
        permanent: true,
      },
      {
        source: '/about-glenntech/how-we-work',
        destination: '/how-we-work',
        permanent: true,
      },
      {
        source: '/about-glanntech/awards-partners',
        destination: '/awards-partners',
        permanent: true,
      },
      {
        source: '/about-glenntech/awards-partners',
        destination: '/awards-partners',
        permanent: true,
      },
      {
        source: '/about-glanntech/our-products',
        destination: '/our-products',
        permanent: true,
      },
      {
        source: '/about-glenntech/our-products',
        destination: '/our-products',
        permanent: true,
      },
      {
        source: '/about-glanntech/press-kit',
        destination: '/press-kit',
        permanent: true,
      },
      {
        source: '/about-glenntech/press-kit',
        destination: '/press-kit',
        permanent: true,
      },
      {
        source: '/about-glanntech/corporate-social-responsibility',
        destination: '/corporate-social-responsibility',
        permanent: true,
      },
      {
        source: '/about-glenntech/corporate-social-responsibility',
        destination: '/corporate-social-responsibility',
        permanent: true,
      },
      {
        source: '/about-glanntech/leadership-team',
        destination: '/about-glenntech',
        permanent: true,
      },
      {
        source: '/about-glenntech/leadership-team',
        destination: '/about-glenntech',
        permanent: true,
      }
    ];
  }
};

export default nextConfig;
