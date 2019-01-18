# Parcel Boilerplate
Still a work in progress.

## Templating
The best candidate I found is Nunjucks with this plugin: https://github.com/devmattrick/parcel-plugin-nunjucks

```
npm install -D nunjucks parcel-plugin-nunjucks
```

We need to create a config file called `nunjucks.config.js` at the root with content such as:
```
module.exports = {
    root: "./src",
    data: {  },
}
```

You could store variables such as the full name of the site in "data".

As far as I know, the include nunjucks directive will also include work with plain HTML files, you don't have to rename snippets you reuse.

## Babel
I thought of using the simplest babelrc with preset env, but it looks as if that's already what's being used.

The ES6 code I wrote in app.js gets transpiled.

## Cleaning dist
The `parcel-plugin-clean-dist` plugin is there to clean up the dist directory automatically.