# Love Island Quotes API

A NodeJS app which returns a randomlly chosen Love Island quote stored in a MongoDB Atlas database

Make GET requests to https://love-island-quotes-api.herokuapp.com/quotes to get random Love Island quote

## Installation

Use the npm package manager to install node modules

```bash
npm install # installs node modules
```

## Add configurations

In `/config/dev.env` add your own `MONGODB_URL` MongoDB database connection string

## Run Locally

In the project root directory, run this command:

```bash
npm run dev
```

## Usage

To add a new quote, make a POST request to API with the following request body:

```bash
{
    "quote": # Wrap quote in double-quotes i.e. "Hello World"
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
