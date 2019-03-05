const crawler = require('../crawler')
const puppeteer = require('puppeteer-core')

jest.mock('puppeteer-core')

describe('.crawl', () => {
  let page, browser
  beforeEach(() => {
    page = {
      goto: jest.fn().mockResolvedValue(true),
    }
    browser = {
      newPage: jest.fn().mockResolvedValue(page),
      close: jest.fn().mockResolvedValue(true)
    }
    puppeteer.launch.mockResolvedValue(browser)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('each puppeteer method should be called', async () => {
    const targetUrl = 'http://example.com'

    await crawler.crawl(targetUrl)

    expect(puppeteer.launch).toHaveBeenCalled()
    expect(browser.newPage).toHaveBeenCalled()
    expect(page.goto).toHaveBeenCalledWith(targetUrl, {
      waitUntil: 'domcontentloaded',
      timeout: 20000
    })
    expect(browser.close).toHaveBeenCalled()
  })
})
