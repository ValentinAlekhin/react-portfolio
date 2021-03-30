const { Compress } = require('gzipper')

const buildDir = './build'

const gzip = new Compress(buildDir, null, { level: 9 })
const brotli = new Compress(buildDir, null, { brotli: true, level: 11 })

const start = async () => {
  try {
    const [gzipFiles, brotliFiles] = await Promise.all([
      gzip.run(),
      brotli.run(),
    ])
    console.info('Compressed gzip files: ', gzipFiles)
    console.info('Compressed brotli files: ', brotliFiles)
  } catch (err) {
    console.error(err)
  }
}

start()
