# storybook-addon-vue-info-and-storybook4alfa

Related to [storybook-addon-vue-info/issues/62](https://github.com/pocka/storybook-addon-vue-info/issues/62).

Steps to reproduce:

```bash
npm i

npm run storybook
```

You'll see the following error in storybook tab:

```bash
`template` or `render` must be on component options, but got undefined.
    Error: `template` or `render` must be on component options, but got undefined.
    at parseStoryComponent (http://localhost:9001/vendors~main.71959d084fb41236a21f.bundle.js:47873:15)
    at http://localhost:9001/vendors~main.71959d084fb41236a21f.bundle.js:49144:18
    at VueInfoAddon (http://localhost:9001/vendors~main.71959d084fb41236a21f.bundle.js:49203:33)
    at http://localhost:9001/vendors~main.71959d084fb41236a21f.bundle.js:2063:28
    at http://localhost:9001/vendors~main.71959d084fb41236a21f.bundle.js:2064:17
    at withSubscriptionTracking (http://localhost:9001/vendors~main.71959d084fb41236a21f.bundle.js:654:16)
    at http://localhost:9001/vendors~main.71959d084fb41236a21f.bundle.js:2063:28
    at http://localhost:9001/vendors~main.71959d084fb41236a21f.bundle.js:1548:16
    at render (http://localhost:9001/vendors~main.71959d084fb41236a21f.bundle.js:2179:19)
    at renderMain (http://localhost:9001/vendors~main.71959d084fb41236a21f.bundle.js:1296:5)
```