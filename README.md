[![Build Status](https://travis-ci.org/mareksuscak/surfing-gallery.svg)](https://travis-ci.org/mareksuscak/surfing-gallery)

# Surfing Gallery

In order to run the project you'll need Node.js 4.x LTS with pretty much any version of npm installed on your system and you'll want to run the commands:

```shell
npm install && npm start
... or ...
npm install && npm start-dev
```

That will start the development server with hot component replacement feature turned on.

Navigate to [http://localhost:8000](http://localhost:8000).

# Production optimized site

If what you desire is a production optimized version run the commands:

```shell
npm install && npm run start-prod
```

The server starts on exactly the same port.

# Updating fontello

Modify `vendor/fontello/config.json` to your needs and run

```shell
npm run fontello:update
```
