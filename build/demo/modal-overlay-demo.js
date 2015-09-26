(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
document.addEventListener('WebComponentsReady', function() {
  var DemoElement, delt;
  delt = document.querySelector('demo-element');
  delt.addEventListener('destroyed', function(evt) {
    return console.log('destroyed', evt.detail);
  });
  return DemoElement = Polymer({
    is: 'demo-element',
    properties: {
      index: {
        type: Number,
        value: 0
      }
    },
    listeners: {
      'track': '_onTrack'
    },
    factoryImpl: function(index) {
      this.index = index;
    },
    ready: function() {
      this.style.left = (Math.random() * 200) + "px";
      return this.style.top = (Math.random() * 300) + "px";
    },
    _push: function() {
      var child, modal;
      modal = document.createElement('modal-overlay');
      modal.inheritEvent('track', this);
      child = new DemoElement(this.index + 1);
      child._pop = function() {
        return modal.destroy({
          name: 'destroyed',
          detail: {
            index: this.index
          }
        });
      };
      Polymer.dom(modal).appendChild(child);
      Polymer.dom(this.root).appendChild(modal);
      return modal.active = true;
    },
    _pop: function() {},
    _onTrack: function(evt) {
      var detail, hovered;
      switch (evt.detail.state) {
        case 'track':
          detail = evt.detail;
          hovered = detail.hover();
          if (hovered === this.$.open) {
            return this._push();
          }
          break;
        case 'end':
          return this._pop();
      }
    },
    _open: function(evt) {
      return this._push();
    }
  });
});


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGF2aWQvRG9jdW1lbnRzL1dvcmsvbW9kYWwtb3ZlcmxheS9zcmMvZGVtby9tb2RhbC1vdmVybGF5LWRlbW8uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLG9CQUExQixFQUFnRCxTQUFBO0FBQzlDLE1BQUE7RUFBQSxJQUFBLEdBQU8sUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkI7RUFDUCxJQUFJLENBQUMsZ0JBQUwsQ0FBc0IsV0FBdEIsRUFBbUMsU0FBQyxHQUFEO1dBQ2pDLE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWixFQUF5QixHQUFHLENBQUMsTUFBN0I7RUFEaUMsQ0FBbkM7U0FHQSxXQUFBLEdBQWMsT0FBQSxDQUNaO0lBQUEsRUFBQSxFQUFJLGNBQUo7SUFFQSxVQUFBLEVBQ0U7TUFBQSxLQUFBLEVBQ0U7UUFBQSxJQUFBLEVBQU0sTUFBTjtRQUNBLEtBQUEsRUFBTyxDQURQO09BREY7S0FIRjtJQU9BLFNBQUEsRUFDRTtNQUFBLE9BQUEsRUFBUyxVQUFUO0tBUkY7SUFVQSxXQUFBLEVBQWEsU0FBQyxLQUFEO01BQUMsSUFBQyxDQUFBLFFBQUQ7SUFBRCxDQVZiO0lBWUEsS0FBQSxFQUFPLFNBQUE7TUFDTCxJQUFDLENBQUEsS0FBSyxDQUFDLElBQVAsR0FBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTCxDQUFBLENBQUEsR0FBZ0IsR0FBakIsQ0FBQSxHQUFxQjthQUNyQyxJQUFDLENBQUEsS0FBSyxDQUFDLEdBQVAsR0FBZSxDQUFDLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBQSxHQUFnQixHQUFqQixDQUFBLEdBQXFCO0lBRi9CLENBWlA7SUFnQkEsS0FBQSxFQUFPLFNBQUE7QUFDTCxVQUFBO01BQUEsS0FBQSxHQUFRLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCO01BQ1IsS0FBSyxDQUFDLFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEIsSUFBNUI7TUFDQSxLQUFBLEdBQVksSUFBQSxXQUFBLENBQWEsSUFBQyxDQUFBLEtBQUQsR0FBUyxDQUF0QjtNQUNaLEtBQUssQ0FBQyxJQUFOLEdBQWEsU0FBQTtlQUNYLEtBQUssQ0FBQyxPQUFOLENBQ0U7VUFBQSxJQUFBLEVBQU0sV0FBTjtVQUNBLE1BQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxJQUFDLENBQUEsS0FBUjtXQUZGO1NBREY7TUFEVztNQU1iLE9BQU8sQ0FBQyxHQUFSLENBQVksS0FBWixDQUNFLENBQUMsV0FESCxDQUNlLEtBRGY7TUFFQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQUMsQ0FBQSxJQUFiLENBQ0UsQ0FBQyxXQURILENBQ2UsS0FEZjthQUdBLEtBQUssQ0FBQyxNQUFOLEdBQWU7SUFmVixDQWhCUDtJQWtDQSxJQUFBLEVBQU0sU0FBQSxHQUFBLENBbENOO0lBb0NBLFFBQUEsRUFBVSxTQUFDLEdBQUQ7QUFDUixVQUFBO0FBQUEsY0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQWxCO0FBQUEsYUFDTyxPQURQO1VBRUksTUFBQSxHQUFTLEdBQUcsQ0FBQztVQUNiLE9BQUEsR0FBVSxNQUFNLENBQUMsS0FBUCxDQUFBO1VBQ1YsSUFBRyxPQUFBLEtBQVcsSUFBQyxDQUFBLENBQUMsQ0FBQyxJQUFqQjttQkFDSyxJQUFDLENBQUEsS0FBSixDQUFBLEVBREY7O0FBSEc7QUFEUCxhQU1PLEtBTlA7aUJBT08sSUFBQyxDQUFBLElBQUosQ0FBQTtBQVBKO0lBRFEsQ0FwQ1Y7SUE4Q0EsS0FBQSxFQUFPLFNBQUMsR0FBRDthQUNGLElBQUMsQ0FBQSxLQUFKLENBQUE7SUFESyxDQTlDUDtHQURZO0FBTGdDLENBQWhEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgJ1dlYkNvbXBvbmVudHNSZWFkeScsICgpIC0+XG4gIGRlbHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICdkZW1vLWVsZW1lbnQnXG4gIGRlbHQuYWRkRXZlbnRMaXN0ZW5lciAnZGVzdHJveWVkJywgKGV2dCkgLT5cbiAgICBjb25zb2xlLmxvZyAnZGVzdHJveWVkJywgZXZ0LmRldGFpbFxuXG4gIERlbW9FbGVtZW50ID0gUG9seW1lclxuICAgIGlzOiAnZGVtby1lbGVtZW50J1xuXG4gICAgcHJvcGVydGllczpcbiAgICAgIGluZGV4OlxuICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgICAgdmFsdWU6IDBcblxuICAgIGxpc3RlbmVyczpcbiAgICAgICd0cmFjayc6ICdfb25UcmFjaydcblxuICAgIGZhY3RvcnlJbXBsOiAoQGluZGV4KSAtPlxuXG4gICAgcmVhZHk6ICgpIC0+XG4gICAgICBAc3R5bGUubGVmdCA9IFwiI3tNYXRoLnJhbmRvbSgpICogMjAwfXB4XCJcbiAgICAgIEBzdHlsZS50b3AgPSBcIiN7TWF0aC5yYW5kb20oKSAqIDMwMH1weFwiXG5cbiAgICBfcHVzaDogKCkgLT5cbiAgICAgIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnbW9kYWwtb3ZlcmxheSdcbiAgICAgIG1vZGFsLmluaGVyaXRFdmVudCAndHJhY2snLCB0aGlzXG4gICAgICBjaGlsZCA9IG5ldyBEZW1vRWxlbWVudCAoQGluZGV4ICsgMSlcbiAgICAgIGNoaWxkLl9wb3AgPSAoKSAtPlxuICAgICAgICBtb2RhbC5kZXN0cm95XG4gICAgICAgICAgbmFtZTogJ2Rlc3Ryb3llZCdcbiAgICAgICAgICBkZXRhaWw6XG4gICAgICAgICAgICBpbmRleDogQGluZGV4XG5cbiAgICAgIFBvbHltZXIuZG9tIG1vZGFsXG4gICAgICAgIC5hcHBlbmRDaGlsZCBjaGlsZFxuICAgICAgUG9seW1lci5kb20gQHJvb3RcbiAgICAgICAgLmFwcGVuZENoaWxkIG1vZGFsXG5cbiAgICAgIG1vZGFsLmFjdGl2ZSA9IHRydWVcblxuICAgICMgd2lsbCBiZSBwb3B1bGF0ZWQgYXQgX3B1c2hcbiAgICBfcG9wOiAtPlxuXG4gICAgX29uVHJhY2s6IChldnQpIC0+XG4gICAgICBzd2l0Y2ggZXZ0LmRldGFpbC5zdGF0ZVxuICAgICAgICB3aGVuICd0cmFjaydcbiAgICAgICAgICBkZXRhaWwgPSBldnQuZGV0YWlsXG4gICAgICAgICAgaG92ZXJlZCA9IGRldGFpbC5ob3ZlcigpXG4gICAgICAgICAgaWYgaG92ZXJlZCBpcyBAJC5vcGVuXG4gICAgICAgICAgICBkbyBAX3B1c2hcbiAgICAgICAgd2hlbiAnZW5kJ1xuICAgICAgICAgIGRvIEBfcG9wXG5cbiAgICBfb3BlbjogKGV2dCkgLT5cbiAgICAgIGRvIEBfcHVzaCJdfQ==
