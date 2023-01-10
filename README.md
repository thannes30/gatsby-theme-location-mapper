# Gatsby Theme Location Mapper

## [Demo](https://thannes30.github.io/gatsby-theme-location-mapper/)

### This is a location mapper Gatsby theme intended to display different locations, and information about the locations on a map.

### Primary use case: Store Locator - displaying locations on the map with hours, website, and phone number.

## Necessary Frontmatter

```md
---
name: new york
lat: 40.712
lng: -74.006
hours: 9AM-5PM
days: M-F
address: 262 Canal St, New York, NY 10013
description: Our flagship location, located on SoHo.
---
```

## Theme Install
1. Add the package
```sh
npm install --save gatsby-theme-location-mapper
```
2. Add "gatsby-theme-location-mapper" to your site's gatsby-config.js
```js
  module.exports = {
    plugins: [
      {
        resolve: "gatsby-theme-location-mapper"
      }
    ]
  }
```
3. Restart your development server
```sh
gatsby develop
```
4. Visit [http://localhost:8000/locations/all](http://localhost:8000/locations/all)


## Demo Site & Theme Setup
```sh
# clone the demo
git clone https://github.com/thannes30/gatsby-theme-location-mapper.git
```
```sh
# move into directory
cd gatsby-theme-location-mapper
```
```sh
# install dependencies
yarn
```
```sh
#start the demo site
yarn workspace site develop
```

The demo will now start at [http://localhost:8000](http://localhost:8000)

Create a new markdown file in site/locations , add necessary frontmatter, and save, then restart your server and view localhost:8000/locations/all to view your location!
