# Migrate existing CRA to CRA TypeScript

## Generate boilerplate using `react-scripts-ts`

`npx create-react-app /tmp/boilerplate --scripts-version=react-scripts-ts`

## Make use of the boilerplate on your existing project

1. Copy TypeScript config files to your project root `cp /tmp/boilerplate/tsconfig* .`
2. Copy TSLint files to your project root `cp /tmp/boilerplate/tslint.json .`
3. Copy image module declarations to your project root `cp /tmp/boilerplate/images.d.ts .`

## Replace `react-scripts-ts` with `react-scripts`

- `yarn add react-scripts-ts`
- `yarn remove react-scripts`
- Replace `react-scripts` with `react-scripts-ts` in `package.json`

## Merge `devDependencies` from boilerplate project to your existing

Example of boilerplate `devDependencies` from `package.json`

```json
  "devDependencies":  {
    "@types/jest": "^23.3.1",
    "@types/node": "^10.7.1",
    "@types/react": "^16.4.11",
    "@types/react-dom": "^16.0.7",
    "typescript": "^3.0.1"
  }
```

After adding them run `yarn install` in order to install new dependencies and get the `yarn.lock` updated

## Replace `registerServiceWorker.js` with `registerServiceWorker.ts`

- `cp /tmp/boilerplate/src/registerServiceWorker.ts .`
- `rm ./src/registerServiceWorker.js`


## Migrate current js/jsx files to tsx

**Rename all files from `.js` to `.tsx`**

`find . -type f \( -iname '*.js' -or -iname '*.jsx' \) -not -wholename '*node_modules*' -exec sh -c 'mv "$1" "${1%.js*}.tsx"' _ {} \;`

**The missing parts**

-  Go and Have Fun adding types to replace *implicit any* warnings
    - or go *fully mad* and enable `noImplicitAny` in your `tsconfig.json`
- Configure TypeScript compiler at `tsconfig.json` to allow [Babel way of imports](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/5128#issuecomment-131638288) such as `import React from 'react';`

## The Ugly Parts

- Installing types separately, such as: `yarn add @types/react-router` and etc, lots of the times @types definitions are out of date
- Some packages come with type definitions some don't
- Messing around with the right configuration for the tslint