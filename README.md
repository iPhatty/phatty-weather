# phatty-weather

Weather app using react and redux for front end

## Setup

Clone the repo:

```
git clone https://github.com/iPhatty/phatty-weather.git
```
Make sure you sign up for a free API key at [openweathermap](https://openweathermap.org/).

Create a config folder in src/, and then create a keys.js file in src/config with the following:

```javascript
const keys = {
  API_KEY: 'api key goes here'
};

export default keys;
```

Install dependencies and start development server:

```
npm install
npm start
```

You can create a production build using:

```
npm run build
```

Files will appear in a 'dist' folder at root.
