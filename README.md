# Love Island Quotes API

An Express app which returns a randomlly chosen Love Island quote stored in a MongoDB Atlas database

API URL here: [`https://love-island-quotes-api-service-3i2mtbjusq-nw.a.run.app/quotes`](https://love-island-quotes-api-service-3i2mtbjusq-nw.a.run.app/quotes)

## Installation

Use the npm package manager to install node modules

```bash
npm install # installs node modules
```

## Add configuration

Create a `.env` file and add your own `MONGODB_URL` MongoDB database connection string

## Run locally

In the project root directory, run this command:

```bash
npm run dev
```

## Usage

To add a new quote, make a POST request to `/quotes` with the following request body:

```bash
{
    "quote": "Hi there!"
}
```

## Deploy to GCP Cloud Run

```bash
docker build -t matlau/love-island-quotes-api:v1 . --platform linux/amd64
docker push matlau/love-island-quotes-api:v1    
gcloud run deploy love-island-quotes-api-service --image matlau/love-island-quotes-api:v1 --region europe-west2 \
--update-secrets=MONGODB_URL=<secret-name>:latest
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
