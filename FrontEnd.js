const { chromium } = require('playwright');

(async () => {
  // Launch a browser (you can specify other browsers like 'firefox' or 'webkit' if needed)
  const browser = await chromium.launch();

  // Create a new page
  const page = await browser.newPage();

  // Navigate to a webpage
  await page.goto('https://flights-app.pages.dev/'); // Replace with your actual URL

  // Find the first input field using a selector
  const inputField1 = await page.$('#headlessui-combobox-input-\:Rq9lla\:'); // Replace with the actual selector

  // Clear the first input field (in case it has a default value)
  await inputField1.clear();

  // Input a unique value into the first input field
  const value1 = 'Value for Input Field 1';
  await inputField1.type(value1);

  // Find the second input field using a selector
  const inputField2 = await page.$('#headlessui-combobox-input-:Rqhlla:'); // Replace with the actual selector

  // Clear the second input field (in case it has a default value)
  await inputField2.clear();

  // Input a different unique value into the second input field
  const value2 = 'Value for Input Field 2';
  await inputField2.type(value2);

  // Validate that the values are different
  if (value1 === value2) {
    console.error('Input field values are the same.');
  } else {
    console.log('Input field values are different.');
  }

  // Perform any other actions you want on the webpage
  // ...

  // Close the browser
  await browser.close();
})();