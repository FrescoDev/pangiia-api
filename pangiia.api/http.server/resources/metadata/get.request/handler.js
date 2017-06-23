/**
 * Description: Health check route which responds with health status of 'ok'.
 * 
 * This functiopn maps a function vector composed of the request object and response object provided by express framework, injected by express router.
 * Expected outcomes includes io operation i.e. responding to the request source in JSON format.
 * 
 * @param  {object} req Express's request object
 * @param  {object} res Express's callback response object
 * @return  {null} 
 */

const getMetadataRequestHandler = (req, res) => {
    res.json({
        description: 'rest api component',
        health: 'ok'
    })
}

export default getMetadataRequestHandler