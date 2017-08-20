import * as chai from 'chai'
import server from '../../harness-setup/testing.server'

const expect = chai.expect

describe('Call to GET event feed data at /event-feed endpoint', () => {
    describe('#200', () => {

        it('should return json', done => {
            server
                .get('/event-feed')
                .end((err, res) => {
                    expect(res)
                        .to.have.status(200)
                    expect(res.type)
                        .to.eql('application/json')
                    done()
                })
        })

        it('should return a valid event feed response', done => {
            server
                .get('/event-feed')
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    expect(res.body)
                        .to.be.an.instanceOf(Object)
                        .and.to.have.property('data')
                    expect(res.body.data.events)
                        .to.be.an.instanceOf(Array)
                        .and.to.have.property(0)
                        .that.includes.all.keys(['scheduledTime', 'scheduledDate', 'house', 'chamber', 'title', 'categories', 'description'])
                    done()
                })
        })
    })
})