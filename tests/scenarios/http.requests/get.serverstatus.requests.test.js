import * as chai from 'chai'
import server from '../../harness.setup/testing.server'

const expect = chai.expect

describe('Call to GET server status at /server-status endpoint', () => {
    describe('#200', () => {
        it('should return json', done => {
            server
                .get('/server-status')
                .end((err, res) => {
                    expect(res)
                        .to.have.status(200)
                    expect(res.type)
                        .to.eql('application/json')
                    done()
                })
        })

        it('should return an OK status', done => {
            server
                .get('/server-status')
                .end((err, res) => {
                    expect(res)
                        .to.have.status(200)
                    expect(res.body.status)
                        .to.eql('ok')
                    done()
                })
        })
    })
})