/**
 * init test
 */
var expect = require('chai').expect,
 app = require('../app'), // you need to export your app
 request = require('superTest'),

 agent = request.agent(app);

describe('Init User', function () {
   it('starts a new user testing env', function (done) {
       expect(true).to.equal(true);
       done();
   });
});

describe('Init', function() {

   it('starts a new testing env', function(done) {
        expect('test').to.equal('test');
        done();
    });
});

/* this one fails, because a post now has a link and title */
describe('GET /posts', function () {
    it('should respond with 200 in case of valid request', function (done) {
        agent.get('/posts')
            .send()
            .end(function (err, res) {
                //console.log('res: ',res);

                var fetchedData = JSON.parse(res.text);
                //console.log('fetchedData: ', fetchedData);
                expect(fetchedData).to.be.an('array');
                expect(fetchedData).to.not.empty;

                var post = fetchedData[0];

                if(post) {
                    //console.log('post: ' post);
                    expect(post).to.have.all.keys('__v','_id','comments','upvotes');
                    expect(post.comment).to.be.an('array');
                    expect(post.upvotes).to.be.a('number');

                    done();
                }

            });
    });
});