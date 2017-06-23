import convertXmlToObject from './steps/convert.xml.to.json'
import mapRSSFeedToWidgetFeed from './steps/map.rss.feed.to.widget.feed'
import retrieveRSSFeedXml from './steps/retrieve.parliament.calendar.rss.feed'

/**
 * Description: encapsulates procredural information process flow of the http request (GET widget data) 
 * 
 * This function maps request function from express to a process outcome object, injected by express router.
 * @param  {object} httpRequest Express's request object
 * @return  {string} The process outcome 
 */
const processRequest = async(httpRequest) => {
    try {
        // workflow step 1: get the calendar events
        const rssParliamentCalendarFeedXml = await retrieveRSSFeedXml()

        // workflow step 2: convert the calendar events from xml to json
        const sourceFeedDataObject = convertXmlToObject(rssParliamentCalendarFeedXml)

        // workflow step 3: reshape the calendar event data to fit our client
        const targetFeedDataObject = mapRSSFeedToWidgetFeed(sourceFeedDataObject)

        return targetFeedDataObject

    } catch (error) {
        console.error(`
        Procedural workflow process for handling of the http Request : ${httpRequest} failed with error:
        
        ${error}`);

        throw new Error(error)
    }
}

export default processRequest