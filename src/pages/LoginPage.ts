import {Locator, Page} from'@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{
    //protected readonly page:Page
    private readonly emailTextBox:Locator;
    private readonly passWordTextBox:Locator;
    private readonly logInButton:Locator;

    constructor(page:Page){
        super(page);
        //this.page = page;
        this.emailTextBox=this.page.locator("//input[@id='Email']");
        this.passWordTextBox=this.page.locator("//input[@id='Password']");
        this.logInButton=this.page.getByRole('button',{name:"LOGIN"});
    }

    /**
     * Enter the Username & password and click on login
     * @param username 
     */
    public async login(username:string,password:string):Promise<void>
    {
        await this.open();
        await this.emailTextBox.fill(username);
        await this.passWordTextBox.fill(password);
        await this.logInButton.click()
    }





}