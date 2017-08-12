import {
    convertXmlToJSON,
    mapRSSFeedToEventFeed,
    retrieveRSSFeedXml
} from '../workflow/steps'


/**
 * Description: encapsulates procredural information process flow of the http request (GET event data) 
 * 
 * @param  {object} httpRequest Express's request object
 * @return  {object} The process outcome 
 */
const processRequest = async (httpRequest) => {
    const moduleId = global.getCurrentModuleId(__filename)

    const logger = httpRequest.log
    logger.info({ modulePath: moduleId }, 'Request processing workflow commencing.');

    const rssParliamentCalendarFeedXml = await retrieveRSSFeedXml(logger)
    const rssParliamentCalendarFeedJSON = convertXmlToJSON(rssParliamentCalendarFeedXml, logger)
    const eventFeed = mapRSSFeedToEventFeed(rssParliamentCalendarFeedJSON, logger)

    const outcome = {
        isSuccessful: !(eventFeed === undefined),
        payload: eventFeed || 'Data fetching process failed for unknown reason'
    }

    logger.info({ modulePath: moduleId }, 'Request processing workflow complete, returning Process outcome to calling function');
    return outcome
}

export default processRequest