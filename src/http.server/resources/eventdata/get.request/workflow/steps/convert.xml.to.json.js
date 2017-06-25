import parser from 'xml2json'

/**
 * Description: Converts xml input to object output
 * 
 * @param  {string} RSSFeedXml The RSS feed GET request response as xml
 * @return  {object} The object denoting the parliament calendar RSS feed data in JSON format
 */
const convertXmlToObject = (RSSFeedXml) => {
    try {
        const options = { object: true }
        const parliamentCalendarRSSFeedJson = parser.toJson(RSSFeedXml, options)

        return parliamentCalendarRSSFeedJson

    } catch (error) {
        console.error(`
        Conversion of parliamentary calendar feed from XML to JSON failed with error message:
        
        ${error}`)

        throw new Error(error)
    }
}

export default convertXmlToObject