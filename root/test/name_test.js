
var {%= js_test_safe_name %} = require('../lib/{%= name %}.js');

/**
 * Should.js cheatsheet https://github.com/visionmedia/should.js/
 * 
 * user.should.have.property('name', 'tj');
 * user.should.have.property('name')
 * 
 * foo.should.equal(bar) 
 * ({ foo: 'bar' }).should.eql({ foo: 'bar' })
 * 
 * true.should.be.ok
 * true.should.be.true
 * [].should.be.empty
 * 
 * should.exist(user)
 * 
 * user.should.be.an.instanceof(User)
 * [].should.be.an.instanceOf(Array)
 *
 * user.age.should.be.below(100)
 * user.age.should.be.above(5)
 *
 * user.pets.should.have.length(5)
 *
 * res.should.be.json / .html
 * 
 * [1,2,3].should.include(3)
 *
 * var user = { name: 'TJ', pet: tobi };
 * user.should.include({ name: 'TJ' });
 *
 * var obj = { foo: 'bar', baz: 'raz' };
 * obj.should.have.keys('foo', 'bar');
 * 
**/


describe('{%= name %}', function () {
  before(function(done) {
    done();
  });

  it('should instancy module', function(done) {
    {%= js_test_safe_name %}.be.a('object');
    done();
  });
  
});