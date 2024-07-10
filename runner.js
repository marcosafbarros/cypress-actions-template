const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImJiZDE3NTNiLWM2MGMtNDlhNi04MzgzLWI2MWFhM2MxOWZjMC0xNzIwNjM0NTk0OTM4IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZGIyZjc0NGQtYTk4Ni00NGI3LThkZGQtZjkyNGNhNzgzYzE5IiwidHlwZSI6InQifQ.XyL2aRB7xY04u0eHA9BWMWRI3EIKvhZSxzqYUfSX98c'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
