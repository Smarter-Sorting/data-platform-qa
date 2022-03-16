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

## AUTOMATION PROJECT: Data platform api services

```
STAGING

Wegmans Multi-component product 12326:
portal id | bins
12122 Battery Box
12327 Electronics Recycling
12328 Reclamation
12329 Reclamation, Other Liquid Materials Non-Food
12330 Reclamation, Aerosols/Flammables
12333 Lightbulbs
12334 Cylinders
12335 Oxidizers/Bleach, Other Liquid Materials Non-Food, Reclamation
12336 Corrosive Caustic Chemicals with Ammonia
12337 Corrosive Caustic Materials Without Ammonia
12338 Corrosive Acidic Materials
12339 OTC Nictotine Products (P-Listed Acute Toxic), Other Liquid Materials Non-Food, Reclamation
12340 OTC Nictotine Products (P-Listed Acute Toxic), Other Liquid Materials Non-Food, Reclamation
12341 Toxic
12342 Other Liquid Materials Non-Food, Reclamation
12343 Compactor/Solid Trash
12344 Compactor/Solid Trash
12345 Oxidizers/Bleach, Toxic

Albertsons Multi-component product 12570:
portal id | bins
12571 UNIVERSAL WASTE UW
12572 AEROSOL AER
12573 OXIDIZER OX, FLAMMABLE FL
12574 CORROSIVE ACID C-A, FLAMMABLE FL
12575 CORROSIVE BASE C-B, FLAMMABLE FL
12576 FLAMMABLE FL
12577 FLAMMABLE FL
12580 AEROSOLS AER
12581 STATE REG-TOXIC ST
12582 STATE REG-TOXIC ST
12583 NON HAZARDOUS NH
12584 NON HAZARDOUS NH
```
