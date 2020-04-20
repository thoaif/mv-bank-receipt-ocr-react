# MV Bank Receipt OCR React

A simple web app for demonstrating [MV Bank Receipt OCR](https://github.com/thoaif/mv-bank-receipt-ocr).

[Demo](https://mvbankreceipt.netlify.app)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), Kudos to
them.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Folder Structure

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    config.json
    assets/
    Components/
    Pages/
```

## Available Scripts

Before running, define the endpoint in a `config.json` file as shown in
`config.example.json`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
Currently no tests have been implemented.

### `npm run build`

Builds the app for production to the `build` folder.<br>

The environment variable `ENDPOINT` must be defined for the build process to work.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

### `npm run eject`

Eject from Create React Script.

### `npm run format`

Runs prettier to format the code.
