var request = require('request');
var getResMsg = require('./error');

class Abbrefy {
  constructor(data = {}) {
    this.key = data.apiKey || process.env.ABBREFY_API_KEY;
    this.base = 'https://abbrefy.xyz/api/v1';
  }

  static login(data) {
    console.log(data.username, data.password);
  }

  /**
   * Allow for authless and authenticated abbrefying (shortening) of urls
   * @param {String} url - the url to be Abbrefied (shortened)
   * @returns - an object containing information for the newly Abbrefied url
   *
   *
   * Example
    
  ```js
    const Abbrefy = require('abbrefy');

    // without api key
    const abbrefy = new Abbrefy();

    // optionally, you can instantiate the class with your api key. You can get that via https://abbrefy.xyz/me/dashboard/#account


    // with api key
    const abbrefy = new Abbrefy({
      apiKey: 'YOUR API KEY',
    });

    // you can also set the api key in your NodeJS ENV using ABBREFY_API_KEY as your env variable name and then instantiate the Abbrefy class without any argument.

    abbrefy
      .abbrefy('https://google.com')
      .then((url) => {
        console.log(url);
        console.log(url.url);
      })
      .catch((error) => console.log(error));
  ```
   */
  async abbrefy(url) {
    return new Promise((resolve, reject) => {
      var options = {
        method: 'POST',
        url: `${this.base}/url/abbrefy/`,
        json: { url: url },
      };
      this.key
        ? (options.headers = {
            apiKey: this.key,
          })
        : null;
      request(options, function (error, response) {
        if (error) return reject(error.message);
        if (!response.body.status) {
          return reject(getResMsg(response.body.error));
        }
        return resolve(response.body);
      });
    });
  }

  /**
   * provides pathway for modifying information relating to an Abbrefy url.
   * @param {Object} data - object containing the oldSlug and the new update information
   * @returns - the updated Abbrefy url object
   *
   *
   * Example
    
  ```js
    const Abbrefy = require('abbrefy');

    // you need an api key to access this Abbrefy method. You can get that via https://abbrefy.xyz/me/dashboard/#account

    const abbrefy = new Abbrefy({
      apiKey: 'YOUR API KEY',
    });

    // you can also set the api key in your NodeJS ENV using ABBREFY_API_KEY as your env variable name and then instantiate the Abbrefy class without any argument.

    abbrefy
      .modify({
        oldSlug: 'c26b44a' //the old slug of the url,
        slug: 'goo' //the new slug (optional parameter),
        title: 'Google Server' //the new title (optional parameter),
        stealth: false //toggle stealth mode on or off (optional parameter),
      })
      .then((url) => {
        console.log(url);
      })
      .catch((error) => console.log(error));
      ```
   */
  async modify(data) {
    return new Promise((resolve, reject) => {
      var options = {
        method: 'PUT',
        url: `${this.base}/url/update/`,
        json: { idSlug: data.oldSlug, ...data },
      };
      this.key
        ? (options.headers = {
            apiKey: this.key,
          })
        : null;
      request(options, function (error, response) {
        if (error) return reject(error.message);
        if (!response.body.status) {
          return reject(getResMsg(response.body.error));
        }
        return resolve(response.body.data);
      });
    });
  }
}

module.exports = Abbrefy;
