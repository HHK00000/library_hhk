module.exports = {
  port: 9000,
  session: {
    secret: 'han',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30
    }
  },
  cors: {
    // origin: 'http://127.0.0.1:3000',
    origin: 'http://localhost:3000',
    credentials: true,
    headers: 'Content-type,Content-Length,Authorization,Accept,X-Requested-With',
    methods: 'PUT,POST,GET,DELETE,OPTIONS,HEAD'
  }
}