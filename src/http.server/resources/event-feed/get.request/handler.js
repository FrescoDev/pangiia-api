import processRequest from './workflow'

/**
 * Description: Handles the http request and offloads work to workflow function, calls express's response.Json() function with process outcome.
 * 
 * @param  {object} req Express's request object
 * @param  {object} res Express's callback response object
 * @return  {null} 
 */
const getEventfeedRequestHandler = async (req, res) => {
    try {
        const outcome = await processRequest()

        if (outcome.isSuccessful) {
            res
                .status(200)
                .json({ data: outcome.payload })

        } else {
            res
                .status(500)
                .json({ error: outcome.payload })
        }

    } catch (error) {
        res
            .status(500)
            .json({ Exception : error.message })
    }
}

export default getEventfeedRequestHandler