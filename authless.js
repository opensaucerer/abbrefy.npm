const Abbrefy = require('./main');

const abbrefy = new Abbrefy({
  apiKey: '0e32867280784272aa473fb2ef7944fb',
});

// abbrefy
//   .abbrefy('https://google.com')
//   .then((url) => {
//     console.log(url);
//     console.log(url.url);
//   })
//   .catch((error) => console.log(error));

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
