import bodyParser from 'body-parser'
import cors from 'cors'
import errorHandler from 'errorhandler'
import express from 'express'
import helmet from 'helmet'
import methodOverride from 'method-override'
import morgan from 'morgan'
import routes from './routes'
import settings from '../configuration'
import getCurrentModuleId from './shared-utilities/logging/get.module.id'

// Make settings globally accessible
global.settings = settings

// Make this util function to retrieve module name globally accessible. Probably not the best idea - remove directly import module if troublesome
global.getCurrentModuleId = getCurrentModuleId

const app = express()

// Adds some security best practices
app.use(helmet())
app.use(cors())

// Logger
if (!settings.envs.test) {
    app.use(morgan('dev'))
}

// Properly Decode JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Add all HTTP methods
app.use(methodOverride())

// Mount API routes
app.use('/', routes)

// Only use error handler in development
if (settings.envs.development) {
    app.use(errorHandler())
}

app.listen(settings.port, () => {
    console.log(`
    === App Server ===

    Connected on:
    
    Port: ${settings.port}
    Env: ${process.env.NODE_ENV}
    
  `)
})

export default app