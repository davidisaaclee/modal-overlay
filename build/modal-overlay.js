(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var slice = [].slice;

Polymer({
  is: 'modal-overlay',
  properties: {
    active: {
      type: Boolean,
      value: false,
      observer: '_activeChanged'
    }
  },
  ready: function() {},

  /*
  "Inherit" events from another element. This is useful when needing to continue
    getting ongoing event data between overlays, such as pointer tracking.
  
  @example
     * Passes `this`'s `track` events to the new overlay.
    modal = document.createElement 'modal-overlay'
    modal.inheritEvent 'track', this
   */
  inheritEvent: function(eventName, fromElement) {
    return Polymer.Gestures.add(fromElement, eventName, (function(_this) {
      return function(evt) {
        var child, i, len, ref, results;
        evt.stopPropagation();
        ref = _this.getContentChildren();
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          results.push(_this.fire(eventName, evt.detail, {
            node: child,
            bubbles: false
          }));
        }
        return results;
      };
    })(this));
  },

  /*
  Destroys this modal-overlay, after firing any "return value" as an event.
  
  @param [Object] eventInfo An object with information about the event to fire
    before component death. This object needs an event `name`, and can
    optionally provide a `detail` object or `options` object (with fields
    mirroring those of `Polymer.Base.fire`).
   */
  destroy: function() {
    var eventInfo, evt, i, len;
    eventInfo = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    for (i = 0, len = eventInfo.length; i < len; i++) {
      evt = eventInfo[i];
      if (evt.name != null) {
        this.fire(evt.name, evt.detail, evt.options);
      }
    }
    return this.remove();
  },
  _activeChanged: function() {
    return this.hidden = !this.active;
  }
});


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGF2aWQvRG9jdW1lbnRzL1dvcmsvbW9kYWwtb3ZlcmxheS9zcmMvbW9kYWwtb3ZlcmxheS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBOztBQUFBLE9BQUEsQ0FDRTtFQUFBLEVBQUEsRUFBSSxlQUFKO0VBRUEsVUFBQSxFQUVFO0lBQUEsTUFBQSxFQUNFO01BQUEsSUFBQSxFQUFNLE9BQU47TUFDQSxLQUFBLEVBQU8sS0FEUDtNQUVBLFFBQUEsRUFBVSxnQkFGVjtLQURGO0dBSkY7RUFTQSxLQUFBLEVBQU8sU0FBQSxHQUFBLENBVFA7O0FBV0E7Ozs7Ozs7OztFQVNBLFlBQUEsRUFBYyxTQUFDLFNBQUQsRUFBWSxXQUFaO1dBQ1osT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFqQixDQUFxQixXQUFyQixFQUFrQyxTQUFsQyxFQUE2QyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUMsR0FBRDtBQUMzQyxZQUFBO1FBQUEsR0FBRyxDQUFDLGVBQUosQ0FBQTtBQUNBO0FBQUE7YUFBQSxxQ0FBQTs7dUJBQ0UsS0FBQyxDQUFBLElBQUQsQ0FBTSxTQUFOLEVBQWlCLEdBQUcsQ0FBQyxNQUFyQixFQUNFO1lBQUEsSUFBQSxFQUFNLEtBQU47WUFDQSxPQUFBLEVBQVMsS0FEVDtXQURGO0FBREY7O01BRjJDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUE3QztFQURZLENBcEJkOztBQTRCQTs7Ozs7Ozs7RUFRQSxPQUFBLEVBQVMsU0FBQTtBQUNQLFFBQUE7SUFEUTtBQUNSLFNBQUEsMkNBQUE7O01BQ0UsSUFBRyxnQkFBSDtRQUNFLElBQUMsQ0FBQSxJQUFELENBQU0sR0FBRyxDQUFDLElBQVYsRUFBZ0IsR0FBRyxDQUFDLE1BQXBCLEVBQTRCLEdBQUcsQ0FBQyxPQUFoQyxFQURGOztBQURGO1dBR0csSUFBQyxDQUFBLE1BQUosQ0FBQTtFQUpPLENBcENUO0VBMENBLGNBQUEsRUFBZ0IsU0FBQTtXQUdkLElBQUMsQ0FBQSxNQUFELEdBQVUsQ0FBSSxJQUFDLENBQUE7RUFIRCxDQTFDaEI7Q0FERiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJQb2x5bWVyXG4gIGlzOiAnbW9kYWwtb3ZlcmxheSdcblxuICBwcm9wZXJ0aWVzOlxuICAgICMgSXMgdGhpcyBvdmVybGF5IGJlaW5nIHNob3duIGN1cnJlbnRseT9cbiAgICBhY3RpdmU6XG4gICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIG9ic2VydmVyOiAnX2FjdGl2ZUNoYW5nZWQnXG5cbiAgcmVhZHk6ICgpIC0+XG5cbiAgIyMjXG4gIFwiSW5oZXJpdFwiIGV2ZW50cyBmcm9tIGFub3RoZXIgZWxlbWVudC4gVGhpcyBpcyB1c2VmdWwgd2hlbiBuZWVkaW5nIHRvIGNvbnRpbnVlXG4gICAgZ2V0dGluZyBvbmdvaW5nIGV2ZW50IGRhdGEgYmV0d2VlbiBvdmVybGF5cywgc3VjaCBhcyBwb2ludGVyIHRyYWNraW5nLlxuXG4gIEBleGFtcGxlXG4gICAgIyBQYXNzZXMgYHRoaXNgJ3MgYHRyYWNrYCBldmVudHMgdG8gdGhlIG5ldyBvdmVybGF5LlxuICAgIG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnbW9kYWwtb3ZlcmxheSdcbiAgICBtb2RhbC5pbmhlcml0RXZlbnQgJ3RyYWNrJywgdGhpc1xuICAjIyNcbiAgaW5oZXJpdEV2ZW50OiAoZXZlbnROYW1lLCBmcm9tRWxlbWVudCkgLT5cbiAgICBQb2x5bWVyLkdlc3R1cmVzLmFkZCBmcm9tRWxlbWVudCwgZXZlbnROYW1lLCAoZXZ0KSA9PlxuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBmb3IgY2hpbGQgaW4gQGdldENvbnRlbnRDaGlsZHJlbigpXG4gICAgICAgIEBmaXJlIGV2ZW50TmFtZSwgZXZ0LmRldGFpbCxcbiAgICAgICAgICBub2RlOiBjaGlsZFxuICAgICAgICAgIGJ1YmJsZXM6IGZhbHNlXG5cbiAgIyMjXG4gIERlc3Ryb3lzIHRoaXMgbW9kYWwtb3ZlcmxheSwgYWZ0ZXIgZmlyaW5nIGFueSBcInJldHVybiB2YWx1ZVwiIGFzIGFuIGV2ZW50LlxuXG4gIEBwYXJhbSBbT2JqZWN0XSBldmVudEluZm8gQW4gb2JqZWN0IHdpdGggaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV2ZW50IHRvIGZpcmVcbiAgICBiZWZvcmUgY29tcG9uZW50IGRlYXRoLiBUaGlzIG9iamVjdCBuZWVkcyBhbiBldmVudCBgbmFtZWAsIGFuZCBjYW5cbiAgICBvcHRpb25hbGx5IHByb3ZpZGUgYSBgZGV0YWlsYCBvYmplY3Qgb3IgYG9wdGlvbnNgIG9iamVjdCAod2l0aCBmaWVsZHNcbiAgICBtaXJyb3JpbmcgdGhvc2Ugb2YgYFBvbHltZXIuQmFzZS5maXJlYCkuXG4gICMjI1xuICBkZXN0cm95OiAoZXZlbnRJbmZvLi4uKSAtPlxuICAgIGZvciBldnQgaW4gZXZlbnRJbmZvXG4gICAgICBpZiBldnQubmFtZT9cbiAgICAgICAgQGZpcmUgZXZ0Lm5hbWUsIGV2dC5kZXRhaWwsIGV2dC5vcHRpb25zXG4gICAgZG8gQHJlbW92ZVxuXG4gIF9hY3RpdmVDaGFuZ2VkOiAoKSAtPlxuICAgICMgSGlkZSB0aGlzIGVsZW1lbnQgd2hlbiBub3QgYWN0aXZlLiBJbXBvcnRhbnQgYmVjYXVzZSBvZiBiYWNrZ3JvdW5kIGVsZW1lbnRcbiAgICAjICBzdG9wcGluZyBldmVudHMgZnJvbSBwYXNzaW5nIHRocm91Z2guXG4gICAgQGhpZGRlbiA9IG5vdCBAYWN0aXZlIl19
