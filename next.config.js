module.exports = {
  swcMinify: true,
  compiler: {
    emotion: true
  },
  images: {
    domains: ["images.ctfassets.net"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
};
