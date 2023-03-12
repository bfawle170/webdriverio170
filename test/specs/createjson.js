
describe('Create Json File', () => {
    it('should write a json file', async () => {
        await browser.url("https://www.google.ie/")
        const search= await $("//input[@name='q']")
        await search.setValue("Mukash Otwani")
        await browser.pause(2000)
        const allValues = await $$("//ul[@roles='listbox']//li/div[@role='option']")
        for(let i =0;i< allValues.length; i++)
        {
            console.log("values from google is",await allValues[i].getText() )
        }
    });
});

