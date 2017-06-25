import processRequest from './workflow'

/**
 * Description: Handles the http request and offloads work to workflow function, calls express's response.Json() function with response.
 * 
 * @param  {object} req Express's request object
 * @param  {object} res Express's callback response object
 * @return  {null} 
 */
const getEventdataRequestHandler = async(req, res) => {
    try {
        const outcome = await processRequest(req)

        if (outcome.isSuccessful) {
            res.json({
                events: outcome.payload
            })

        } else {
            res.status(500).json()
        }

    } catch (error) {
        res
            .status(500)
            .json(error)
    }
}

export default getEventdataRequestHandler