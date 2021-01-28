require('dotenv').config()
// const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } = process.env
// const emailjs = require('emailjs-com')

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed', headers: { Allow: 'POST' } }
  }

  return {
    statusCode: 200,
    body: event.body
  }
  // return emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, event.body, EMAILJS_USER_ID).then(() => ({
  //   statusCode: 200,
  //   body: 'success'
  // })).catch(error => ({
  //   statusCode: 422,
  //   body: `Error: ${error}`
  // }))
}
