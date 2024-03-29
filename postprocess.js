const fs = require('fs')
const path = require('path')

const getAllFiles = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
    } else {
      if (path.extname(file) === '.html') {
        arrayOfFiles.push(path.join(__dirname, dirPath, '/', file))
      }
    }
  })

  return arrayOfFiles
}


const addCDNBaseToImages = html => {
  const baseUrl = 'https://ajahofrzam.cloudimg.io/v7/_pcc_'
  const regex1 = /<img[^>]+src="(?!http)([^">]+)"/g
  let updatedHTML = html.replace(regex1, `<img src="${baseUrl}$1"`)

  const regex2 = /<source[^>]+srcset="(?!http)([^">]+)"/g
  updatedHTML = updatedHTML.replace(regex2, `<source srcset="${baseUrl}$1"`)
  return updatedHTML
}

const files = getAllFiles('./dist')

const whitelist = ['/lib/']

files.forEach(file => {
  let f = fs.readFileSync(file, 'utf-8')

  let pass = true
  whitelist.forEach(g => {
    if(f.includes(g)) pass = false
  })

  if(pass){
    f = f.replace(/<script.*?<\/script>/mig, '')
    f = f.replace(/<link rel="preload" href=.*?as="script">/mig, '')
    f = addCDNBaseToImages(f)
    fs.writeFileSync(file, f, 'utf-8')
  }
})
