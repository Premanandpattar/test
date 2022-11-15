describe(`Test`,function(){
this.retries(2)
it(`practice - reg`,async ()=>{
await browser.maximizeWindow()
await browser.url(`https://demoqa.com/browser-windows`)
var ele = await $(`//button[.='New Tab']`)
await ele.setValue()
await browser.switchWindow(`New Tab`)
await expect(browser).toHaveUrl(`ssss`)

})
})