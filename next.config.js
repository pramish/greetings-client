/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  saasOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
  reactStrictMode: true,
};
