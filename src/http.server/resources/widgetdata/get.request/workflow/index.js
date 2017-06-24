import { convertXmlToObject, mapRSSFeedToWidgetFeed, retrieveRSSFeedXml } from '../workflow/steps'

/**
 * Description: encapsulates procredural information process flow of the http request (GET widget data) 
 * 
 * This function maps request function from express to a process outcome object, injected by express router.
 * @param  {object} httpRequest Express's request object
 * @return  {string} The process outcome 
 */
const processRequest = async(httpRequest) => {

    // workflow step 1: get the calendar events
    const rssParliamentCalendarFeedXml = await retrieveRSSFeedXml()

    // workflow step 2: convert the calendar events from xml to json
    const sourceFeedDataObject = convertXmlToObject(rssParliamentCalendarFeedXml)

    // workflow step 3: reshape the calendar event data to fit our client
    const targetFeedDataObject = mapRSSFeedToWidgetFeed(sourceFeedDataObject)

    return targetFeedDataObject
}

export default processRequest