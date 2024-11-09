const express = require('express');
const puppeteer = require('puppeteer');
const app = express();
const PORT = 3000;

app.use(express.json()); 

app.post('/verify-login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://target-website.com/login');

    await page.type('#usernameField', username);
    await page.type('#passwordField', password);
    await page.click('#loginButton');

    await page.waitForNavigation();

    let loginSuccessful = false;
    try {
      await page.waitForSelector('#logoutButton', { timeout: 5000 });
      loginSuccessful = true; 
    } catch (error) {
      loginSuccessful = false; 
    }

    await browser.close();

    if (loginSuccessful) {
      res.json({ success: true, message: 'Login verified successfully' });
    } else {
      res.json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'An error occurred during login verification' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
