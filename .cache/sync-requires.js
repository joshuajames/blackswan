
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/joshua/Dev/git/oyu/blackswan/src/pages/404.js")),
  "component---src-templates-blog-post-archive-js": preferDefault(require("/Users/joshua/Dev/git/oyu/blackswan/src/templates/blog-post-archive.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/joshua/Dev/git/oyu/blackswan/src/templates/blog-post.js"))
}

