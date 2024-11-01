/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [ "antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table" ],
    output: "export",
    reactStrictMode: true,
    trailingSlash: true,
};

export default nextConfig;
