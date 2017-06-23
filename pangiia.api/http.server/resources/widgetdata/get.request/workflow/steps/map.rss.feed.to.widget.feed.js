/**
 * Description: Simple map of the RSS feed data object to the destimation widget feed.
 * 
 * This function maps the RSS feed to the consumer data structure (wwidget feed).
 * Expected outcomes include non-null widgetFeed object or an model validation exception object.
 * @param  {object} RSSFeed The RSS feed object
 * @return  {object} The object denoting the parliament calendar RSS feed data in reshaped for the consuming widget container feed.
 */
const mapRSSFeedToWidgetFeed = (RSSFeed) => {
    try {
        const widgetFeed = RSSFeed

        return widgetFeed

    } catch (error) {
        console.error(`
        Mapping of calendar parliament RSS feed to widget feed failed with error:
        
        ${error}`)

        throw new Error(error)
    }
}

export default mapRSSFeedToWidgetFeed