import * as chai from 'chai'

import chaiHttp from 'chai-http'
import server from '../../pangiia.api/http.server'

chai.use(chaiHttp);
export default chai.request(server)