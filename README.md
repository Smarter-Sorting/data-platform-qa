## AUTOMATION PROJECT: Data platform api services

- Repository contains a mocha project that test backend apis.

## Download a Framework

- https://github.com/Smarter-Sorting/data-platform-qa.git

## Framework Architecture

- **data-qa/support/setUp** - Loading env variables.
- **data-qa/support/helpers** - Request methods.
- **data-qa/fixtures/** - Constants, test data.
- **data-qa/test/** - Test files.

Create `.env` file in project root, parameters needed are:

```
INTERPRTERS_BASE_URL
```

## Writing a test

Tests are organised in spec files by feature.
Test data, both inputs and expected outputs is placed in [fixture] module, expected JSON format is :

```
{
- uri
- test variants {
   "variantName" : {
    - request body {}
    - response code
    - expected response body {}
    }
    "variantName" : {
     ...
    }
    }
}
```

Test using fixture will execute as many times as there combinations in JSON

## Running test (locally)

For locally running test on your machine, following software should be installed:

- NPM
- NODE

After project is downloaded run [npm -i] to install all dependencies on your machine.
List of predefined scripts is available in package.json file

- [npm test:conf:staging] - Will run tests with default configuration (staging env variables)

Note: factory and binning tests require connection to gcloud containers
