# Abbrefy - A Node.js module for [Abbrefy](https://abbrefy.xyz/)

Interface with the [Abbrefy](https://abbrefy.xyz/) API and bring all the power of Abbrefy right into your Node.js applications.

- URL Shortening
- URL Analytics
- URL Management
- Stealth Mode (inactive abbrefy links)
- Abbrefy Bulk (bulk URL shortening)
- and everything inbetween

You need an api key to access some Abbrefy functions. You can get that via https://abbrefy.xyz/me/dashboard/#account

You can also set the api key in your NodeJS ENV using ABBREFY_API_KEY as your env variable name and then instantiate the Abbrefy class without any argument.

**Here's a few use cases for Abbrefy**

```js
const Abbrefy = require('abbrefy');

const abbrefy = new Abbrefy({
  apiKey: 'your api key',
});

// Allow for authless and authenticated abbrefying (shortening) of urls.
abbrefy
  .abbrefy('https://google.com')
  .then((url) => {
    console.log(url);
    console.log(url.url);
  })
  .catch((error) => console.log(error));

// provides pathway for modifying information relating to an Abbrefy url.
abbrefy
  .modify({
    oldSlug: 'goohh',
    slug: 'gooh',
    title: 'Google Server',
    stealth: false,
  })
  .then((url) => {
    console.log(url);
  })
  .catch((error) => console.log(error));

// delete Abbrefy urls you don't need anymore.
abbrefy
  .mortify('gooh')
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error));

// retrieve an array of all of your Abbrefy links.
abbrefy
  .classify()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error));

// retrieves information about an Abbrefy url.
abbrefy
  .identify('abbrefy_api')
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error));
```

Want to harness all the powers of this package? Then get your Abbrefy API keys [here](http://www.abbrefy.xyz/me/dashboard/#account).
