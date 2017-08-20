import { handleGetEventFeedRequest, handleGetServerStatusRequest } from './resources/request.handlers'
import { Router } from 'express'
import bunyanMiddleware from 'bunyan-middleware'
import logger from '../http-server/shared-utilities/logging/create.logger'

const requestLogger = bunyanMiddleware({
    logger: logger,
    headerName: 'Pangiia-Request-Id',
    obscureHeaders: ['authorization'],
    level: (process.env.NODE_ENV === 'development') ? 'debug' : 'info'
})

/**
 * Description: This maps urls of http requests to appropriate handler function
 * 
 * GET /server-status will retrieve the health status of the api e.g. OK
 * 
 * GET /event will retrieve the RSS feed data from the calendar parliament wbesite and map it for consumption by the client
 */
const routes = new Router()
    .use(requestLogger)
    .get('/server-status', handleGetServerStatusRequest)
    .get('/event-feed', handleGetEventFeedRequest)

export default routes