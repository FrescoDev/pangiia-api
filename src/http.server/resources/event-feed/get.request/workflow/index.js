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
const processRequest = async () => {

    // workflow step 1: get the calendar events in their native format
    const rssParliamentCalendarFeedXml = await retrieveRSSFeedXml()

    // workflow step 2: convert the calendar events from xml to json format
    const rssParliamentCalendarFeedJSON = convertXmlToJSON(rssParliamentCalendarFeedXml)

    // workflow step 3: reshape the calendar event data to fit our client
    const eventFeed = mapRSSFeedToEventFeed(rssParliamentCalendarFeedJSON)

    // wrap the process payload in a process outcome object
    const outcome = {
        isSuccessful: !(eventFeed === undefined),
        payload: eventFeed || 'Data fetching process failed for unknown reason'
    }

    return outcome
}

export default processRequest