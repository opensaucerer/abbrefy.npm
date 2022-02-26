var request = require('request');
var getResMsg = require('./error');

class Abbrefy {
  constructor(data = {}) {
    this.key = data.apiKey || process.env.ABBREFY_API_KEY;
    this.base = 'https://abbrefy.xyz/api/v1';
  }

  /**
   * Allow for authless and authenticated abbrefying (shortening) of urls.
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
      if (!slug) {
        return reject('URL to be Abbrefied required');
      }
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
   * Allow for authless and authenticated abbrefying (shortening) of urls.
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
  async gekúrú(url) {
    return new Promise((resolve, reject) => {
      if (!slug) {
        return reject('URL to be Abbrefied required');
      }
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
      if (data.oldSlug) {
        return reject(
          'Abbrefy update information required. Hover over the method for usage sample'
        );
      }
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

  /**
   * delete Abbrefy urls you don't need anymore.
   * @param {String} slug - the slug of the Abbrefy url to be deleted
   * @returns - delete response from server
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
      .mortify('gooh')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  ```
   */
  async mortify(slug) {
    return new Promise((resolve, reject) => {
      if (!slug) {
        return reject('Abbrefy slug required');
      }
      var options = {
        method: 'DELETE',
        url: `${this.base}/url/delete/`,
        json: { idSlug: slug },
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
        return resolve(response.body.data.message);
      });
    });
  }

  /**
   * retrieve an array of all of your Abbrefy links.
   * @param
   * @returns {Array} - returns a array containing all your Abbrefy links
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
      .classify()
      .then((links) => {
        console.log(links);
      })
      .catch((error) => console.log(error));
  ```
   */
  async classify() {
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: `${this.base}/me/links/`,
      };
      this.key
        ? (options.headers = {
            apiKey: this.key,
          })
        : null;
      request(options, function (error, response) {
        if (error) return reject(error.message);
        if (!JSON.parse(response.body).status) {
          return reject(getResMsg(JSON.parse(response.body).error));
        }
        return resolve(JSON.parse(response.body).linkData);
      });
    });
  }

  /**
   * retrieves information about an Abbrefy url.
   * @param {String} slug - the slug of the Abbrefy url to be retrived
   * @returns {Object} - returns information for the Abbrefy url
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
      .identify(slug)
      .then((url) => {
        console.log(url);
      })
      .catch((error) => console.log(error));
  ```
   */
  async identify(slug) {
    return new Promise((resolve, reject) => {
      if (!slug) {
        return reject('Abbrefy slug required');
      }
      var options = {
        method: 'GET',
        url: `${this.base}/me/link/${slug}`,
      };
      this.key
        ? (options.headers = {
            apiKey: this.key,
          })
        : null;
      request(options, function (error, response) {
        if (error) return reject(error.message);
        if (!JSON.parse(response.body).status) {
          return reject(getResMsg(JSON.parse(response.body).error));
        }
        return resolve(JSON.parse(response.body).linkData);
      });
    });
  }
}

module.exports = Abbrefy;
