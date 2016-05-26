import dotplot from '../../src/dotplot';

describe('dotplot', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(dotplot, 'greet');
      dotplot.greet();
    });

    it('should have been run once', () => {
      expect(dotplot.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(dotplot.greet).to.have.always.returned('hello');
    });
  });
});
