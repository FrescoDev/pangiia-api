import parser from 'xml2json'

/**
 * Description: Converts xml input to JSON output
 * 
 * @param  {string} RSSFeedXml The RSS feed GET request response as xml
 * @return  {object} The object denoting the parliament calendar RSS feed data in JSON format
 */
const convertXmlToJSON = (RSSFeedXml, logger) => {
    const moduleId = global.getCurrentModuleId(__filename)

    logger.info({ modulePath: moduleId, actionType: 'IN_MEMORY', actionDescription: 'JSON_FORMATTING' }, 'Request processing workflow step 2: convert the calendar events from xml to json format');

    try {
        const options = { object: true }
        const parliamentCalendarRSSFeedJson = parser.toJson(RSSFeedXml, options)

        return parliamentCalendarRSSFeedJson

    } catch (error) {
        const debugString = `Conversion of parliamentary calendar feed from XML to JSON failed with error message:${error}`

        throw new Error(debugString)
    }
}

export default convertXmlToJSON