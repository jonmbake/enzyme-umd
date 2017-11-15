define(['enzyme-react'], function (enzymeReact) {
  const { react, enzyme } = enzymeReact;
  const ReactDOM = enzymeReact['react-dom'];

  describe('UMD Module', () => {
    it('should include React', () => {
      expect(react).toBeDefined();
    });

    it('should include Enzyme', () => {
      expect(enzyme).toBeDefined();
    });

    it('should include React DOM', () => {
      expect(ReactDOM).toBeDefined();
    });

  });

  describe('Enzyme', () => {
    it('should shallow render', () => {
      const el = react.createElement('span', {}, 'test');
      const wrapper = enzyme.shallow(el);
      expect(wrapper.text()).toEqual('test');
    });
    it('should mount render', () => {
      const el = react.createElement('span', {}, 'test');
      const wrapper = enzyme.mount(el);
      expect(wrapper.text()).toEqual('test');
    });
  });
});
