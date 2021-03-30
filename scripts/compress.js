const { Compress } = require('gzipper')

const buildDir = './build'

const gzip = new Compress(buildDir, null, { level: 9 })
const brotli = new Compress(buildDir, null, { brotli: true, brotliQuality: 11 })

const start = async () => {
  try {
    await Promise.all([gzip.run(), brotli.run()])
  } catch (err) {
    console.error(err)
  }
}

start()
