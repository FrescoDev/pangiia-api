import { convertXmlToObject, mapRSSFeedToEventFeed, retrieveRSSFeedXml } from '../workflow/steps'

/**
 * Description: encapsulates procredural information process flow of the http request (GET event data) 
 * 
 * @param  {object} httpRequest Express's request object
 * @return  {object} The process outcome 
 */
const processRequest = async(httpRequest) => {

    // workflow step 1: get the calendar events
    const rssParliamentCalendarFeedXml = await retrieveRSSFeedXml()

    // workflow step 2: convert the calendar events from xml to json
    const sourceFeedDataObject = convertXmlToObject(rssParliamentCalendarFeedXml)

    // workflow step 3: reshape the calendar event data to fit our client
    const targetFeedDataObject = mapRSSFeedToEventFeed(sourceFeedDataObject)

    // wrap the process payload in a process outcome object
    const outcome = {
        isSuccessful: !(targetFeedDataObject === undefined),
        payload: targetFeedDataObject
    }

    return outcome
}

export default processRequest