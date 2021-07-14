# hacker-news-search-app

## Objective

Using the Javascript framework of your choice, build an application that has two pages users can navigate to:

- `/search` lets the user search the Hacker News Algolia API and displays a list of results. [Hacker News API](https://hn.algolia.com/api)
- `/history` shows the users a list of their past searches from this session (these do not need to persist through refresh).

We're looking to see what you know in Javascript, querying an API, and state management. We're interested in whether you can write clean code and have the ability to learn/understand new technologies. We don't care about design/UI (for this project).

## Notes

- This is my first assignment like this that results in a review. Thank you for your time! I'm excited to see where I stand and how I can improve.
- Nuxt and Vuex are overkill here. But they are currently my favorite tools so I wanted to show that and demonstrate use of stored state management.
- I kept comments minimal. On larger projects I usually leave a good portion of details when necessary. Currently I'd say I'm 50/50 split betwween leaving a highly detailed map and trying to write clean enough code that comments aren't necessary.
- I fought the urge to work on the UI and add more functionality. But if you would like me to expand on something please don't hesitate to let me know!
- I initiated components in PascalCase in a single bracket instead of kebab-case in a double bracket. Vue docs say to use kebab-case but my IDE highlights them gold when in pascal and it stands out more as a component.
- As the only developer at my current company I make all code style decisions. But I have no strong opinions and I am able to adapt to team guidelines.

## Default Nuxt README

### Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

### Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

#### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

#### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

#### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

#### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

#### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

#### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

#### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
