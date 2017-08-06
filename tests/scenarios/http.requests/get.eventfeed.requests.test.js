import * as chai from 'chai'

import server from '../../harness.setup/testing.server'

const expect = chai.expect

describe('Call to GET event feed data at /eventfeed endpoint', () => {
    describe('#200', () => {
        it('should return json', (done) => {
            server
                .get('/event-feed')
                .end((err, res) => {
                    expect(res)
                        .to
                        .have
                        .status(200)
                    expect(res.type)
                        .to
                        .eql('application/json')
                    done()
                })
        })
    })
})