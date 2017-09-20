import striptags from 'striptags'
import R from 'ramda'
import dateFormat from 'dateformat'

/**
 * Description: Simple map of the RSS feed data object to the destination event feed.
 * 
 * @param  {object} RSSFeed The RSS feed object
 * @return  {object} The object denoting the parliament calendar RSS feed data in reshaped for the consuming event container feed.
 */
const mapRSSFeedToEventFeed = (RSSFeed, logger) => {
    const moduleId = global.getCurrentModuleId(__filename)

    logger.info({
        modulePath: moduleId,
        operationType: 'IN_MEMORY',
        operationDescription: 'DATA_MAPPING'
    }, 'Request processing workflow step 3: reshape the calendar event data to fit our client');

    try {
        const eventFeedArray = RSSFeed.rss.channel.item.map(RSSFeedItem => {

            const parliamentaryEvent = RSSFeedItem['parlycal:event']

            const parliamentaryEventDate = parliamentaryEvent['parlycal:date']
            const parliamentaryEventTime = parliamentaryEvent['parlycal:startTime']
            const parliamentaryEventHouse = parliamentaryEvent['parlycal:house']
            const parliamentaryEventChamber = parliamentaryEvent['parlycal:chamber']

            const filterBadCharacters = R.compose(striptags, R.trim)
            const description = filterBadCharacters(RSSFeedItem.description)

            const date = dateFormat(parliamentaryEventDate, 'fullDate')

            return {
                scheduledTime: parliamentaryEventTime,
                scheduledDate: date,
                house: parliamentaryEventHouse,
                chamber: parliamentaryEventChamber,
                title: RSSFeedItem.title,
                categories: RSSFeedItem.category,
                description: description,
            }
        })

        const eventFeed = {
            events: eventFeedArray
        }

        return eventFeed
    } catch (error) {
        const debugString = `Mapping of calendar parliament RSS feed to event feed failed with error - ${error}`
        logger.error(debugString)

        throw new Error()
    }
}

export default mapRSSFeedToEventFeed