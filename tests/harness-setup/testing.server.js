process.env.NODE_ENV = process.env.NODE_ENV || 'test';

import * as chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../../src/http-server'

chai.use(chaiHttp);
export default chai.request(server)