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

As far as I know, the include nunjucks directive will also include work with plain HTML files, you don't have to rename snippets you reuse.

## TODO
Add the simplest babelrc with preset env.