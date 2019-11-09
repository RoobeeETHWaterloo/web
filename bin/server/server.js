import http from 'http'
import express from 'express'
import webpack from 'webpack'
import historyApiFallback from 'connect-history-api-fallback'
import webpackMiddleware from 'webpack-dev-middleware'

import webpackConfig from '../../webpack/development'


const compiler = webpack(webpackConfig)
const app = express()

app.use(historyApiFallback())
app.use(webpackMiddleware(compiler, webpackConfig.devServer))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const httpServer = http.createServer(app)
const port = 5000

httpServer.listen(port, () => {
  console.log(`App running on localhost:${port}`)
})
