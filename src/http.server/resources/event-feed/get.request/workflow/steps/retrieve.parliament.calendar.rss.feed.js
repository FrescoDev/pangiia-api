import request from 'requisition'

/**
 * Description: Makes an asynchronous HTTP call to the parliament RSS feed xml and returns the content (XML).
 * 
 * @return  {string} The string specifying the parliamentary schedule feed in xml format.
 */
const retrieveRSSFeedXml = async () => {
    try {
        const url = global.settings.dataSources.parliamentCalendarRSSFeed.mainUrl
        const response = await request(url)

        if (response.statusCode != 200) {
            throw new Error('Unable to retrieve response from parliament calendar RSS Feed')
        }

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