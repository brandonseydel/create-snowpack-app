const scripts = {
  "mount:public": "mount public --to /",
  "mount:web_modules": "mount web_modules --to /web_modules",
  "plugin:vue": "@snowpack/plugin-vue",
  "build:js": "cat",
};

module.exports = {
  installOptions: {
    clean: true,
  },
  webDependencies: {},
  dev: {
    port: 3000,
    src: "src",
    out: "build",
    dist: "/_dist_",
    fallback: "index.html",
    bundle: process.env.NODE_ENV === "production",
  },
  scripts,
};
