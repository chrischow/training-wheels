# Express

## Main Methods
1. `app.get`: Read
2. `app.post`: Create
3. `app.put`: Update
4. `app.delete`: Delete
5. `app.all`: A response if we can't find a resource on the server
6. `app.use`: Middleware
7. `app.listen`: Start server

## Static Assets
- Use the `express.static()` middleware
- Alternative would be to create a route for EVERY asset - extremely troublesome
- Static assets mean files that the server does not have to change (e.g. images, styles)
- If a route serves a static page e.g. `index.html`:
  - One option is to add the file to the static assets:
    - There's no point in adding a route - it's already loaded with `app.use(express.static(./static))` and automatically rendered
    - I discovered this when I (1) set up the static folder before (2) creating a route that used `sendFile` to send `index.html`. Express somehow recognises the `index.html` file as the default home page.
    - If `index.html` is in the static folder, note that **Express will ignore `app.get('/')`**. This was why my custom logging function did not register any requests to the home page.
  - Another option is to do server-side rendering (SSR) using template engines

## Main Patterns: API vs. SSR

### API
- APIs mean an HTTP interface to interact with data
- Data is always sent using JSON
- Method to send JSON is `res.json()`

### Server-side Rendering (SSR)
- Set up templates
- Send back entire HTML, CSS, and JS ourselves
- Method is `res.render()`

## Middleware
- Express is mostly middleware (apparently)
- Middleware takes in a request, does something, then sends out a response: `req --> middleware --> res`
- Usage:
  - Insert between route and callback: `app.get('/', middlewareFn, (req, res) => ...)`
  - Must have parameters `req`, `res`, `next` - all supplied by Express
  - At the end of the middleware function, you either:
      1. Send back a response; or
      2. Pass on to the next middleware with `next()`
  - To use multiple middleware, use `app.use([fn1, fn2])` or `app.get('/', [fn1, fn2], ...)`
- Good practices:
  - Keep middleware in separate files, then export them as required
  - To apply middleware to routes, use `app.use(middlewareFn)`
  - Placement of the `app.use(...)` matters: it registers the middleware function(s) to all routes below that line
  - `app.use('/api', ...)` can be specified to apply the middleware to specific routes
- Options:
  - Custom middleware
  - Express provides some middleware e.g.
    - `express.static`: For serving static files
    - `express.urlencoded({ extended: false })`: For parsing query parameters and storing them in `req.body`
    - `express.json()`: For parsing JSON data (`application/json`) and storing it in `req.body`
  - 3rd party: e.g.
    - `morgan`: For logging