# JSON Web Tokens (JWTs)

## Introduction
- Long strings used to restrict access
- Only after logging in will users get a token, which can be used to access routes
- Token must be valid and submitted in requests
- Good resource: [jwt.io](https://jwt.io/)

## Process
1. Login request
2. Response + signed JWT
3. Request + signed JWT
4. Response

## Structure: `xxxx.yyyy.zzzz`
- Header:
  - Comprises type of token (JWT) and signing algorithm (HMAC SHA256 or RSA)
  - Encoding: Base64Url
- Payload:
  - Contains claims, which are statements about an entity and additional data
  - Types: registered, public, private claims
  - DO NOT send confidential info
  - Keep payloads small
- Signature is:

  ```
  HMACSHA256(
    base64UrlEncode(header) + '.' +
    base64UrlEncode(payload).
    secret
  )
  ```

- Secret is kept on the server
- Once decoded, you can get the payload back, which contains info about the user e.g. ID, username, time of issue


## Requests with Token
- Typically sent in the request header with:

  ```
  headers: {
    ...,
    Authorization: `Bearer ${token}`,
    ...
  }
  ```

## Code
- Create middleware for auth and stick it in front of the `.get()` router route