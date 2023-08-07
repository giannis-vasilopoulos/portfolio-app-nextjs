/* eslint-disable @typescript-eslint/no-var-requires */
const { withPlaiceholder } = require("@plaiceholder/next");

module.exports = withPlaiceholder({
  swcMinify: true,
  compiler: {
    emotion: true
  },
  experimental: {
    nextScriptWorkers: true
  },
  images: {
    domains: ["images.ctfassets.net"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
});
