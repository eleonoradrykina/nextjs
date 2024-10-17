/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'blog.airbaltic.com',
                port: '',
                // pathname: '/my-bucket/**',
            },
        ],
    },
}
export default nextConfig;
