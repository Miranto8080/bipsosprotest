/** @type {import('next').NextConfig} */

const nextConfig = {
    // Tu peux ajouter des options plus tard
    output: 'export',
    images: {unoptimized: true},
    // generateBuildId: async () => {
    //    return Date.now().toString(); // unique every build
    // }
};

module.exports = nextConfig;
