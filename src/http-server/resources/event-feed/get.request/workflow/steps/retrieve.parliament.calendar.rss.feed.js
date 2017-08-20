import request from 'requisition'
import { responseIsInvalid } from '../../../../../shared-utilities/http/validation/generic.response.validator'

/**
 * Description: Makes an asynchronous HTTP call to the parliament RSS feed xml and returns the content (XML).
 * 
 * @return  {string} The string specifying the parliamentary schedule feed in xml format.
 */
const retrieveRSSFeedXml = async (logger) => {
    const moduleId = global.getCurrentModuleId(__filename)

    logger.info({ modulePath: moduleId, operationType: 'IO', operationDescription: 'HTTP_REQUEST' }, 'Request processing workflow step 1: get the calendar events in their native format');

    try {

        const url = global.settings.dataSources.parliamentCalendarRSSFeed.mainUrl
        const response = await request(url)

        if (responseIsInvalid(response)) {
            logger.error('Unable to retrieve valid response from parliament calendar RSS Feed')
            throw new Error()
        }

        const parliamentCalendarRSSFeedXml = await response.text()
        return parliamentCalendarRSSFeedXml

    } catch (error) {
        const debugMessage = `HTTP request to parliament events calendar RSS feed failed with exception message - ${error}`
        logger.error(debugMessage)

        throw new Error()
    }
}

export default retrieveRSSFeedXml