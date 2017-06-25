import { getEventdataRequestHandler, getMetadataRequestHandler } from './resources/request.handlers'

import { Router } from 'express'

/**
 * Description: This maps urls of http requests to appropriate handler function
 * 
 * GET /meta will retrieve the health status of the api e.g. OK
 * 
 * GET /event will retrieve the RSS feed data from the calendar parliament wbesite and map it for consumption by the client
 */
const routes = new Router()
    .get('/meta', getMetadataRequestHandler)
    .get('/eventfeed', getEventdataRequestHandler)

export default routes