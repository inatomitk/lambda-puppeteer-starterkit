const crawler = require('./lib/crawler')

exports.handler = async (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2))

  const crawlTargetUrl = 'http://example.com'
  await crawler.crawl(crawlTargetUrl)

  callback(null)
}
