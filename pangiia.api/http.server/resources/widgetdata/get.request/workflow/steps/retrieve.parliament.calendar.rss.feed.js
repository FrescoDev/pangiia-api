import request from 'requisition'
import settings from '../../../../../../configuration'

/**
 * Description: Makes an asynchronous HTTP call to the parliament RSS feed xml and returns the content (XML).
 * 
 * This function maps the non-entity i.e. nothing to an element of the entity set. 
 * Most probable mapping outputs include the parliament RSS Feed in xml format,or an http request exception.
 * @return  {string} The string specifying the parliamentary schedule feed in xml format.
 */
const retrieveRSSFeedXml = async() => {
    try {
        const url = settings.dataSources.parliamentCalendarRSSFeed.mainUrl
        const response = await request(url)
        const parliamentCalendarRSSFeedXml = await response.text()

        return parliamentCalendarRSSFeedXml

    } catch (error) {
        console.error(`
        HTTP request to calendar RSS Failed with exception message:
        
        ${error}`)

        throw new Error(error)
    }
}

export default retrieveRSSFeedXml