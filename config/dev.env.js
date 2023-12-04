'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // urlVGI: '"http://localhost:3001"',
  urlVGI: '"https://pauliceia.unifesp.br/api/vgi"',
  // urlGeoserverPauliceia: '"http://localhost:9021/geoserver/pauliceia"',
  urlGeoserverPauliceia: '"https://pauliceia.unifesp.brgeoserver/pauliceia"',
  urlGeoserveOther: '"https://pauliceia.unifesp.br/geoserver/other"',
  urlGeocoding: '"http://localhost:3000/api/geocoding"',
  keyCripto: '"keytest"'
})
