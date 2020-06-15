# vue-getting-started

This is my repo for learning vue.js

## About

This app created with vue-cli by this preset

```json
"simple-vue-with-typescript": {
      "useConfigFiles": true,
      "plugins": {
        "@vue/cli-plugin-babel": {},
        "@vue/cli-plugin-typescript": {
          "classComponent": true,
          "useTsWithBabel": true
        },
        "@vue/cli-plugin-eslint": {
          "config": "prettier",
          "lintOn": [
            "save"
          ]
        },
        "@vue/cli-plugin-unit-jest": {}
      }
    }
  }
```

### Support Command

```bash
# compiles for dev
yarn serve
# Compiles and minifies for production
yarn build
# Run your unit tests
yarn test:unit
# Lints and fixes files
yarn lint
```
