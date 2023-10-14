# Personal Portfolio Website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Methodology

When creating a new React project these are the basic steps that I start with.
1. Initialize the repository. I prefer to do this first, using GitHub Desktop to prevent the common issue of Create React apps using the same repository in GitHub.
2. I then create the React app using Create React App. For this project I opted to use TypeScript, as I have been working mostly in TypeScript. `npx create-react-app my-app --template typescript`
3. I then added Prettier `npm i --save-dev --save-exact prettier` and added the `.prettier` and `.prettierignore` files.
4. There are many files which I have no need for in this project, and can always add later. I remove these (including test files, css files and report vials). I also like to start with a clean slate in the `App.tsx` so i tend to remove everything there.
5. I always like to start with choosing a color scheme, and creating a favicon using [Favicon.io](https://favicon.io/). I tend to use [Color Hunt](https://colorhunt.co/) for color palette ideas, and start with the palette and add other colors if necessary or adapt the palette colors to be accessible.
6. I add SASS/SCSS as I prefer to work with SCSS rather than CSS or styled components using `npm i sass` and set up the SCSS file structure as below. I follow the basic idea of the 7-1 file structure, but in smaller project I often do not need all the 7 folders, so I begin with only the folders I know I will need and add the others if necessary. I always have a `_reset.scss` file, as I want all my pages to be the same throughout. I also like to set up my typography so that all the HTML tags are the same, and also create the basic media query settings in one place.
src/
└── styles/
    ├── main.scss
    ├── abstracts/
    │   ├── _colors.scss
    │   ├── _media-query
    │   ├── _typography.scss
    │   └── _variables.scss
    ├── base/
    │   └── _reset.scss
    └── components
7. After the SCSS file structure is set up, I then do the basic component setup. I always have a header and footer, so I will create components for those, and will create other components as necessary.
8. For this project I will not be creating a database, so I created a folder in which I added all the relevant information which I want to add to my portfolio site, including personal information and work experience. All the data is public knowledge, and is the same or similar to my LinkedIn profile and GitHub.


## Styles
Headline text
Paragraph text

Main color palette: https://colorhunt.co/palette/186f65b5cb99fce09bb2533e


## Elements

### Favicon
This favicon was generated using the following font:

- Font Title: Satisfy
- Font Author: Copyright (c) 2011 by Font Diner, Inc. All rights reserved.
- Font Source: http://fonts.gstatic.com/s/satisfy/v21/rP2Hp2yn6lkG50LoOZSCHBeHFl0.ttf
- Font License: Apache License, version 2.0 (http://www.apache.org/licenses/LICENSE-2.0.html))


## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
