
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/joshua/Dev/git/blackswan/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/joshua/Dev/git/blackswan/src/pages/404.js")),
  "component---src-templates-blog-post-archive-js": preferDefault(require("/Users/joshua/Dev/git/blackswan/src/templates/blog-post-archive.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/joshua/Dev/git/blackswan/src/templates/blog-post.js"))
}

