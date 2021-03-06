# Contact Keeper

> Full stack MERN contact manager with React hooks, context & JWT authentication. Part of [Brad Traversy's course](https://udemy.com/modern-react-front-to-back) on Udemy.

This is the full app. The API can be found [here](https://github.com/bradtraversy/contact_keeper_api) with documented endpoints

## Usage

Install dependencies

```bash
npm install
npm client-install
```

### Mongo connection setup

Edit `/config/default.json` to include the correct MongoDB URI

### Run Server

```bash
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```

## Deploy to Heroku

```bash
git push heroku master
```
