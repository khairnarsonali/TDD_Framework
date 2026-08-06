import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test ('Verify landing page of the application', async ({page})=>{
await page.goto("http://localhost:100/index.php?module=Users&action=Logout");
await expect(page.locator("//img[@src='include/images/vtiger-crm.gif']")).toBeVisible();
await expect(page).toHaveTitle("vtiger CRM - Commercial Open Source CRM");
await expect(page).toHaveURL("http://localhost:100/index.php?module=Users&action=Logout");
});

test('Verify login functionality with valid username and password', async ({page})=>{
await page.goto("http://localhost:100/index.php?module=Users&action=Logout");
const loginpage=new LoginPage(page);
await loginpage.login('admin', 'admin');
await expect(page.locator("//a[text() ='Logout']")).toBeVisible();
});

test('Verify login functionality with invalid username and password', async ({page})=>{
await page.goto("http://localhost:100/index.php?module=Users&action=Logout");
const loginpage=new  LoginPage(page);
await loginpage.login('admin123', 'admin123');
await expect(page.locator("//td[contains(text(),'You must specify a valid username and password.')]")).toBeVisible();
});