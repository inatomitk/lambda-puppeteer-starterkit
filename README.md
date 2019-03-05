# lambda-puppeteer-template
based on [alixaxel/chrome-aws-lambda](https://github.com/alixaxel/chrome-aws-lambda).
using [serverless](https://serverless.com/).


## setup

```
npm install
```

## deploy

```
serverless deploy --aws-profile [profile-name]
```

only function deploy
```
serverless deploy function -f main
```

production deploy
```
serverless deploy --aws-profile [profile-name] --stage prod
```
