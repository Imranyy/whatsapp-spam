const puppeteer=require('puppeteer');

async function scrape(url){
    const browser=await puppeteer.launch({headless:false});
    const page=await browser.newPage();
    await page.goto(url);
    await page.waitForSelector("");
    const target =await page.$("");
    await target.click();
    const inputBox=await page.$("");
    //the loops
    for(let i=0; 1<70;i++) {
        await inputBox.type("hello loser");
        await page.keyboard.press("Enter");
    }

}
scrape("https://web.whatsapp.com");