import request from 'requisition'
import { responseIsInvalid } from '../../../../../shared-utilities/http/validation/generic.response.validator'

/**
 * Description: Makes an asynchronous HTTP call to the parliament RSS feed xml and returns the content (XML).
 * 
 * @return  {string} The string specifying the parliamentary schedule feed in xml format.
 */
const retrieveRSSFeedXml = async () => {
    try {
        const url = global.settings.dataSources.parliamentCalendarRSSFeed.mainUrl
        const response = await request(url)

        if (responseIsInvalid(response)) {
            throw new Error('Unable to retrieve valid response from parliament calendar RSS Feed')
        }

        const parliamentCalendarRSSFeedXml = await response.text()

        return parliamentCalendarRSSFeedXml

    } catch (error) {
        const debugMessage = `HTTP request to calendar RSS Failed with exception message: ${error}`

        console.error(`${debugMessage}`)
        throw new Error(debugMessage)
    }
}

export default retrieveRSSFeedXml