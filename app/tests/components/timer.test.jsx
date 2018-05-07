var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleStatusChange', () => {
    it('should change countdownStatus from paused to started and count up', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      expect(timer.state.count).toBe(0);
      expect(timer.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        done();
      }, 3001);
    });

    it('should change countdownStatus to paused and stop counting', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);

      timer.setState({count: 10})
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused')

      setTimeout(() => {
        expect(timer.state.countdownStatus).toBe('paused')
        expect(timer.state.count).toBe(10);
        done();
      }, 1001);
    });

      it('should change countdownStatus to paused and count to 0', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.setState({count: 10});
        timer.handleStatusChange('started');
        timer.handleStatusChange('stopped');


        setTimeout(() => {
          expect(timer.state.countdownStatus).toBe('paused');
          expect(timer.state.count).toBe(0)
          done();
        }, 1001);
      });
  });
});
