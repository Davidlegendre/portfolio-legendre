/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port:'',
        pathname: '/u/**'
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port:'',
        pathname: '/fluency/**'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname : '/Davidlegendre/**'
      }
    ]
  },
}

module.exports = nextConfig
