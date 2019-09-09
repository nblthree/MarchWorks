const fs = require('fs')

const getPathsObject = () => {
  const fileObj = {}

  const walkSync = dir => {
    // Get all files of the current directory & iterate over them
    const files = fs.readdirSync(dir)
    files.forEach(file => {
      // Construct whole file-path & retrieve file's stats
      const filePath = `${dir}${file}`
      const fileStat = fs.statSync(filePath)

      if (fileStat.isDirectory()) {
        // Recurse one folder deeper
        walkSync(`${filePath}/`)
      } else {
        // Construct this file's pathname excluding the "pages" folder & its extension
        const cleanFileName = filePath
          .substr(0, filePath.lastIndexOf('.'))
          .replace('pages/', '')

        // Add this file to `fileObj`
        fileObj[`/${cleanFileName}`] = {
          page: `/${cleanFileName}`,
          lastModified: fileStat.mtime
        }
      }
    })
  }

  // Start recursion to fill `fileObj`
  walkSync('pages/')

  return fileObj
}

function formatDate (date) {
  var d = new Date(date)
  var month = '' + (d.getMonth() + 1)
  var day = '' + d.getDate()
  var year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

const pathsObj = getPathsObject()

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  ${Object.keys(pathsObj)
    .filter(
      path => path !== '/_error' && path !== '/_app' && path !== '/_document'
    )
    .map(
      path => `<url>
    <loc>https://march-works.marchworks.now.sh${path}</loc>
    <lastmod>${formatDate(new Date(pathsObj[path].lastModified))}</lastmod>
  </url>`
    )
    .join('')}
</urlset>`

fs.writeFileSync('static/sitemap.xml', sitemapXml)
