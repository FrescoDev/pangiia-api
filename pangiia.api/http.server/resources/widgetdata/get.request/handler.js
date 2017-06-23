import processRequest from './workflow'

/**
 * Description: Handles the http request and offloads work to workflow function, calls express's response.Json() function with response.
 * 
 * This function maps a function vector composed of the request object and response object provided by express framework, injected by express router.
 * @param  {object} req Express's request object
 * @param  {object} res Express's callback response object
 * @return  {null} 
 */
const getWidgetdataRequestHandler = async(req, res) => {
    try {
        const requestProcessingOutcome = await processRequest(req)

        res.json({
            widgetData: requestProcessingOutcome
        })
    } catch (error) {
        res
            .status(500)
            .json(error)
    }
}

export default getWidgetdataRequestHandler