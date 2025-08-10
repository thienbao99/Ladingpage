/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'media.istockphoto.com'
            },
            {
                hostname:'img.freepik.com'
            }
        ]
    }
};

export default nextConfig;
