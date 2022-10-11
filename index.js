const puppeteer=require('puppeteer');

async function scrape(url){
    try {
        const browser=await puppeteer.launch({headless:false});
        const page=await browser.newPage();
        console.log('browser launched and new page opened to web.whatsapp.com');
        await page.goto(url);
        console.log('waiting for page to load and select selector');
        await page.setDefaultTimeout(0);
        await page.waitForSelector('[title="Mori Keli"]').then(()=> page.click('[title="Mori Keli"]',{
            delay:3000
        }))
        const inputBox=await page.$(
            "#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div.fd365im1.to2l77zo.bbv8nyr4.mwp4sxku.gfz4du6o.ag5g9lrv"
        );
        //the loops
        for(let i=0;i<100;i++) {
            await inputBox.type("I love Coding😪");
            await page.keyboard.press("Enter");
        } 
    } catch (error) {
        console.log(error)
    }

}
scrape("https://web.whatsapp.com");