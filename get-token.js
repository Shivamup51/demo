// get-token.js (CommonJS) - accepts a code or a full redirect URL
const { google } = require('googleapis')
const readline = require('readline')
require('dotenv').config({ path: '.env.local' })

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/oauth2callback'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
const SCOPES = ['https://mail.google.com/']  // instead of gmail.send

const url = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent',
  scope: SCOPES,
})

console.log('Authorize this app by visiting this url:\n', url)

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
rl.question('Paste the code OR the full redirect URL here: ', async (input) => {
  try {
    const trimmed = input.trim()
    let code = trimmed
    if (/^https?:\/\//i.test(trimmed)) {
      const u = new URL(trimmed)
      code = u.searchParams.get('code') || ''
    }
    if (!code) throw new Error('No code found. Paste the code or the full redirect URL.')

    const { tokens } = await oAuth2Client.getToken(code)
    console.log('\nTokens:\n', JSON.stringify(tokens, null, 2))
    console.log('\nRefresh token (save this):', tokens.refresh_token)
  } catch (err) {
    console.error('Failed to exchange code for tokens:', err.message || err)
  } finally {
    rl.close()
  }
})
