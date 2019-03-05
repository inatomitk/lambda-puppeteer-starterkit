const crawler = require('./lib/crawler')
const index = require('./index')

jest.mock('./lib/crawler')

describe('.handler', () => {
  let callback
  beforeEach(() => {
    callback = jest.fn()
    crawler.crawl.mockResolvedValue(true)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('crawler.crawl should be called', async () => {
    await index.handler({
      Records: [{
        body: ''
      }]
    }, {}, callback)

    expect(crawler.crawl).toHaveBeenCalled()
  })
})
