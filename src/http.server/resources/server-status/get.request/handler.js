/**
 * Description: Health check route which responds with health status of 'ok'.
 * 
 * Expected outcomes includes io operation i.e. responding to the request source in JSON format.
 * 
 * @param  {object} req Express's request object
 * @param  {object} res Express's callback response object
 * @return  {null} 
 */

const getServerStatusRequestHandler = (req, res) => {
    req.log.info({ modulePath: global.getCurrentModuleId(__filename) }, 'Handling GET Server Status Request');

    res.json({
        description: 'pangiia api',
        health: 'ok'
    })
}

export default getServerStatusRequestHandler