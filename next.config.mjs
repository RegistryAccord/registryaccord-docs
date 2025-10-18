import nextra from 'nextra'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  // basePath: '/registryaccord-docs', // Comment out for local testing
  // assetPrefix: '/registryaccord-docs', // Comment out for local testing
  images: {
    unoptimized: true // mandatory, otherwise won't export
  }
  // Optional: Change the output directory `out` -> `dist`
  // distDir: "build"
}
const withNextra = nextra({
  // ... other Nextra config options
})

export default withNextra(nextConfig)