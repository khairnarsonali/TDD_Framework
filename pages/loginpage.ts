
export class LoginPage{
page: any;
constructor(page: any){
 this.page = page;
}

userid = "//input[@name='user_name']";
pwd = "//input[@name='user_password']";
loginButton = "//input[@name='Login']";

async login(username: string, password:string){
await this.setUserName(username);
await this.setPassword(password);
await this.clickLogin();
}

async setUserName(username: string){
await this.page.fill(this.userid, username);
}

async setPassword(password: string){
await this.page.fill(this.pwd, password);
}

async clickLogin(){
await this.page.click(this.loginButton);
}

}
