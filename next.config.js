/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'rb.gy'],
  },
});
