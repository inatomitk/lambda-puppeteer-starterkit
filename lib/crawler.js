const puppeteer = require('puppeteer-core')
const chromium = require('chrome-aws-lambda')

// example for crawling web page.
exports.crawl = async (url) => {

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless
  })
  console.log('[crawler] browser launched.')

  try {
    const page = await browser.newPage()
    console.log('[crawler] page opened.')

    await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 20000
    })
    console.log(`[crawler] jumped to ${url}.`)

  } finally {
    await browser.close()
  }
}
