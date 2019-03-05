# lambda-puppeteer-template
based on [alixaxel/chrome-aws-lambda](https://github.com/alixaxel/chrome-aws-lambda).
using [serverless](https://serverless.com/).


## setup

```
npm install
```

## deploy

```
npx serverless deploy --aws-profile [profile-name]
```

only function deploy
```
npx serverless deploy function -f main
```

production deploy
```
npx serverless deploy --aws-profile [profile-name] --stage prod
```
