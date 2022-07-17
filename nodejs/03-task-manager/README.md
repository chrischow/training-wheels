# Task Manager App
Gotchas from developing this app.

- Always use `api/v1/...` so that when you switch version, you just direct all users there
- Useful process:
  - Plan routes for the app first
  - Create routes with function names in the router
  - Create placeholder functions in controllers.js with either a dummy response or JSON values as per payload
  - Create requests in new Postman collection
- Connect to DB before starting the server by packaging it into a function in sequential order
- Mongoose Models:
  - A Model implements a Schema
  - A Schema ensures that only the properties specified in the schema will be passed on to the database
    - Everything else will be ignored
    - But missing properties will not be enforced
  - An instance of a Model is a document