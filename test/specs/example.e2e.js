const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
// const fs1 = require(`fs`)
// const credentials = JSON.parse(fs1.readFileSync(`./test/testData/test.json`))
const  excel = require(`xlsx`)
const wb = excel.readFile(`./test/testData/testData.xlsx`)
let sheet =wb.Sheets[`Sheet1`]
var credentials = excel.utils.sheet_to_json(sheet)
describe('My Login application', () => {
    
    credentials.forEach(({userName,password}) => {
        var randNum = Math.ceil(Math.random()*10000)
        it.only('should login with valid credentials', async () => {
            
            await LoginPage.open();
            await LoginPage.login(`${userName+randNum}`, `${password+randNum}`);
            await expect(SecurePage.flashAlert).toBeExisting();
            await expect(SecurePage.flashAlert).toHaveTextContaining(
                'You logged into a secure area!');
        });
    });
});


