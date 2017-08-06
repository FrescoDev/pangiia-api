/**
 * Description: Simple map of the RSS feed data object to the destination event feed.
 * 
 * @param  {object} RSSFeed The RSS feed object
 * @return  {object} The object denoting the parliament calendar RSS feed data in reshaped for the consuming event container feed.
 */
const mapRSSFeedToEventFeed = RSSFeed => {
    try {
        const eventFeedArray = RSSFeed.rss.channel.item.map(RSSFeedItem => {
            return {
                title: RSSFeedItem.title,
                category: RSSFeedItem.category,
                description: RSSFeedItem.description
            }
        })

        const eventFeed = {
            events: eventFeedArray
        }

        return eventFeed
    } catch (error) {
        console.error(`
        Mapping of calendar parliament RSS feed to event feed failed with error:
        
        ${error}`)

        throw new Error(error)
    }
}

export default mapRSSFeedToEventFeed