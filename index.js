const puppeteer=require('puppeteer');

async function scrape(url){
    const browser=await puppeteer.launch({headless:false});
    const page=await browser.newPage();
    await page.goto(url);
    await page.waitForSelector("span [title='GDSC RU Chapter']");
    const target =await page.$("span [title='GDSC RU Chapter']");
    await target.click();
    const inputBox=await page.$(
        "#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div.fd365im1.to2l77zo.bbv8nyr4.mwp4sxku.gfz4du6o.ag5g9lrv"
    );
    //the loops
    for(let i=0; 1<70;i++) {
        await inputBox.type("I love Coding😪");
        await page.keyboard.press("Enter");
    }

}
scrape("https://web.whatsapp.com");