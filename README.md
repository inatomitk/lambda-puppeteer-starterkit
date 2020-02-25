# lambda-puppeteer-starterkit
based on [alixaxel/chrome-aws-lambda](https://github.com/alixaxel/chrome-aws-lambda).
using [serverless](https://serverless.com/).

Headless chrome is separated into layers to avoid capacity limitations of lambda.

## setup

```
npm install
```

## test

```
npm test
```


## deploy
Edit serverless.yml to your environment.

```
npx serverless deploy
```

only function deploy
```
npx serverless deploy function -f main
```

production deploy
```
npx serverless deploy --stage prod
```
