import { getEventfeedRequestHandler, getServerStatusRequestHandler } from './resources/request.handlers'
import { Router } from 'express'
import bunyanMiddleware from 'bunyan-middleware'
import bunyan from 'bunyan'

const logger = bunyan.createLogger({ name: 'PANGIIA-API', serializers: bunyan.stdSerializers });
const requestLogger = bunyanMiddleware({
    logger: logger,
    headerName: 'fresco-request-id',
    obscureHeaders: ['authorization']
});

/**
 * Description: This maps urls of http requests to appropriate handler function
 * 
 * GET /server-status will retrieve the health status of the api e.g. OK
 * 
 * GET /event will retrieve the RSS feed data from the calendar parliament wbesite and map it for consumption by the client
 */
const routes = new Router()
    .use(requestLogger)
    .get('/server-status', getServerStatusRequestHandler)
    .get('/event-feed', getEventfeedRequestHandler)

export default routes