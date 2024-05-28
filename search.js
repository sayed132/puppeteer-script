const { chromium } = require('playwright');

(async () => {

    const browser = await chromium.launch({ headless: false }); 
    const page = await browser.newPage();

 
    await page.goto('https://www.google.com');


    const searchQuery = 'puppeteer vs playwright';
    await page.fill('input[name="q"]', searchQuery);
    await page.press('input[name="q"]', 'Enter');

 
    await page.waitForSelector('#search');

   
    const results = await page.$$eval('h3', headers => headers.map(header => header.innerText));


    console.log(results);

  
    await browser.close();
})();
