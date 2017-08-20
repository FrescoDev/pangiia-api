import processRequest from './workflow'

/**
 * Description: Handles the http request and offloads work to workflow function, calls express's response.Json() function with process outcome.
 * 
 * @param  {object} req Express's request object
 * @param  {object} res Express's callback response object
 * @return  {null} 
 */
const getEventfeedRequestHandler = async (req, res) => {
    const moduleId = global.getCurrentModuleId(__filename)
    req.log.info({ modulePath: moduleId }, 'Handling GET Event Feed Request');

    try {
        const outcome = await processRequest(req)

        if (outcome.isSuccessful) {
            req.log.info({ modulePath: moduleId }, 'Request processing was successful. Returning data to client with 200 status code.');

            res
                .status(200)
                .json({ data: outcome.payload })

        } else {
            req.log.info({ modulePath: moduleId }, 'Request processing was unsuccessful. Returning error to client with 400 status code.');

            res
                .status(400)
                .json({ error: outcome.payload })
        }

    } catch (error) {
        req.log.info({ modulePath: moduleId }, 'Request processing was unsuccessful. Returning error to client with 400 status code.');

        res
            .status(500)
            .json({ response: 'Failed to retrieve event feed data' })
    }
}

export default getEventfeedRequestHandler