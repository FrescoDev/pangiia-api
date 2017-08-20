import striptags from 'striptags'

/**
 * Description: Simple map of the RSS feed data object to the destination event feed.
 * 
 * @param  {object} RSSFeed The RSS feed object
 * @return  {object} The object denoting the parliament calendar RSS feed data in reshaped for the consuming event container feed.
 */
const mapRSSFeedToEventFeed = (RSSFeed, logger) => {
    const moduleId = global.getCurrentModuleId(__filename)

    logger.info({ modulePath: moduleId, actionType: 'IN_MEMORY', actionDescription: 'DATA_MAPPING' }, 'Request processing workflow step 3: reshape the calendar event data to fit our client');

    try {
        const eventFeedArray = RSSFeed.rss.channel.item.map(RSSFeedItem => {

            const parliamentaryEvent = RSSFeedItem['parlycal:event']

            const parliamentaryEventDate = parliamentaryEvent['parlycal:date']
            const parliamentaryEventTime = parliamentaryEvent['parlycal:startTime']
            const parliamentaryEventHouse = parliamentaryEvent['parlycal:house']
            const parliamentaryEventChamber = parliamentaryEvent['parlycal:chamber']

            const cleanDescriptionString = rawString => striptags(rawString.replace('       ', '').replace('      ', ''))

            const description = cleanDescriptionString(RSSFeedItem.description)

            return {
                scheduledTime: parliamentaryEventTime,
                scheduledDate: parliamentaryEventDate,
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