# React frontend assignment

## Description

Your task is to implement a component or a set of components allowing the users to fetch and display change history of **users** and **projects** in separate tables according to the designs and requirements below. You can use the provided packages and add new ones if necessary. Please provide unit tests for your code.

## Requirements
- Handle the loading state
- Handle the error state (every second call to fetch users or projects will result in an error)
- Make sure the table can be browsed also on smaller screens
- By default table data should be sorted in reverse chronological order (newest first)
- Users should be able to sort by the **Date** column only and be able to toggle between reverse chronological and chronological order
- After fetching new entries, table should be re-sorted according to currently selected sorting order

## Screenshots

### Default state
![Screen Shot 2020-03-03 at 13 25 01](https://user-images.githubusercontent.com/3663640/75771396-919e6600-5d52-11ea-96db-7a6c5e71c780.png)

### Loading state
![Screen Shot 2020-03-03 at 13 25 16](https://user-images.githubusercontent.com/3663640/75771400-93682980-5d52-11ea-9439-dfeea61e24a4.png)

### Error state
![Screen Shot 2020-03-03 at 13 25 09](https://user-images.githubusercontent.com/3663640/75771398-92cf9300-5d52-11ea-8d06-660cd55bb1a1.png)


# Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
