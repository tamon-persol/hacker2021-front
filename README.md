## nextjs-ts-pwa
This template includes as below.

- [Next.js](https://nextjs.org)
- [Express.js](https://expressjs.com)(Custom Server)
- [TypeScript](https://www.typescriptlang.org)
- PWA by [next-offline](https://github.com/hanford/next-offline)
  - Service Worker
  - Pre Caching
  - Runtime Caching(sample)
  - Add to HomeScreen
  - manifest.json

## Environment Variables
- dotenv is supported by default in Next.js(9.4+)
- .env files are divided by environment. (i.e. `.env.dev` / `.env.prd`)
- Whole environment variables should be written all `.env` files to avoid complexity and simplify encrypt / decrypt process by KMS

## Requirements
### [nodemon](https://github.com/remy/nodemon)
On development mode, this template runs by custom server and nodemon.
You'd better install `nodemon` in global environment.

## Build Setup
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start:prd
```

## Components Design
Based on Atomic Design.
Refer to [Documents](https://persol-service-dev.esa.io/posts/528).

### Directory Structure under `components`
```
components/
  ├ atoms/
    ├ Button
      ├ index.tsx
      ├ index.stories.tsx
      ├ index.md
    ...
  ├ molecules/
  └ organisms/
```

## Components and Styling
This template includes two patterns components.
You can choose prefer one.
- [styled-components](https://styled-components.com/)
- [Material UI](https://material-ui.com/)

### Preparation before development
1. Choose UI library (styled-components, material-ui or both)
2. Delete unnecessary components directory (ie. `components/styled-components`)
3. (Optional) Move directories under `components/material-ui/*` into `components/` adjust to [Directory Structure](#Directory-Structure-under-components).
4. Search `FIXME-UI` string in your project, and fix theme provider settings


## Storybook
```
$ yarn storybook
```

### Storybook Deployment
In GitHub Actions workflow, storybook modules are exported and deployed to [AppEngine](https://srl-storybook-dot-dev-pca-template.an.r.appspot.com/) automatically.

It requires Google (`x-factory.jp`) login.

## Directory Structure under `modules`
Business logic sources are placed in `modules` directory (except for presentation layer) that mainly contains API Accesses and related React Hooks.

### domains
Based on DDD and clean architecture.
Refer to [template-express-ts](https://github.com/pcae/template-express-ts).

### provider
DI container.

### styles
Styling definition and global css.

## HTTP Client and React Hooks for Data Fetch (GET Request)
- [axios](https://github.com/axios/axios)
- [SWR](https://github.com/zeit/swr)
