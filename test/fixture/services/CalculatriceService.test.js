const assert = require('assert');
const sinon = require('sinon');

describe('CalculatriceService', function (){
  describe('#addition', function (){
    it('should add values', function () {
      let result = CalculatriceService.addition(7, 3);
      assert.equal(result, 10);

    });
  });

  describe('#soustraction', function (){
    it('should sub values', function () {
      let result = CalculatriceService.soustraction(25, 3);
      assert.equal(result, 22)
    });
  });

  describe('#multiplication', function (){
    it('should  time values', function () {
      let result = CalculatriceService.multiplication(12, 10);
      assert.equal(result, 120);
    });
  });

  describe('#division', function (){
    it('should divide values', function () {
      let a = 130
      let b = 10
      let result = CalculatriceService.division(a, b);
      assert.equal(result, 13)

    });
    it('should not authorize division by 0', function () {
      let a = 10
      let b = 0
      try{
        CalculatriceService.division(a, b);
      } catch (err){
        assert.equal(err.message, 'Cannot divide by 0')
        return
      }
      assert(false)
    });
  });

  describe('#pourcentage', function (){

    it('should calculate a percentage', function () {
      // Quand la méthode multiplication est appellée elle retournera toujours 20
      sinon.stub(CalculatriceService, 'multiplication').callsFake(function (a, b){ return 100 })

      // Pareil mais pour la méthode division
      sinon.stub(CalculatriceService, 'division').callsFake(function (a, b){ return 10 })

      let result = CalculatriceService.pourcentage(25, 25)
      assert.equal(result, 100)

      CalculatriceService.multiplication.restore()
      CalculatriceService.division.restore()
    });
    it('should call multiplication and division once', function () {
      let spyMult = sinon.spy(CalculatriceService, 'multiplication')
      let spyDiv = sinon.spy(CalculatriceService, 'division')

      CalculatriceService.pourcentage(100, 10)

      assert(spyMult.calledOnce)
      assert(spyDiv.calledOnce)

      CalculatriceService.multiplication.restore()
      CalculatriceService.division.restore()
    });
  });

  describe('#square', function (){
    it('should calculate number squared', function () {
      let spyMult = sinon.spy(CalculatriceService, 'multiplication')
      let spyDiv = sinon.spy(CalculatriceService, 'division')

      CalculatriceService.square(5)

      assert(spyMult.calledOnce)
      assert(spyDiv.notCalled)
    });
  })
});
