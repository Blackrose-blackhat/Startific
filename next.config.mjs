/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      DATABASE_URL: 'postgresql://postgres:yourpassword@localhost:5432/postgres'
    },
  };
  
  export default nextConfig;
  