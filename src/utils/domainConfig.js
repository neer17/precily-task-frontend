/* 
* provides backend url
*/
const production = process.env.REACT_APP_PRODUCTION

const backendUrl =
  production === 'true'
    ? ''
    : 'http://localhost:8080'
export { backendUrl }
