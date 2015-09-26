Polymer
  is: 'modal-overlay'

  properties:
    # Is this overlay being shown currently?
    active:
      type: Boolean
      value: false
      observer: '_activeChanged'

  ready: () ->

  ###
  "Inherit" events from another element. This is useful when needing to continue
    getting ongoing event data between overlays, such as pointer tracking.

  @example
    # Passes `this`'s `track` events to the new overlay.
    modal = document.createElement 'modal-overlay'
    modal.inheritEvent 'track', this
  ###
  inheritEvent: (eventName, fromElement) ->
    Polymer.Gestures.add fromElement, eventName, (evt) =>
      evt.stopPropagation()
      for child in @getContentChildren()
        @fire eventName, evt.detail,
          node: child
          bubbles: false

  ###
  Destroys this modal-overlay, after firing any "return value" as an event.

  @param [Object] eventInfo An object with information about the event to fire
    before component death. This object needs an event `name`, and can
    optionally provide a `detail` object or `options` object (with fields
    mirroring those of `Polymer.Base.fire`).
  ###
  destroy: (eventInfo...) ->
    for evt in eventInfo
      if evt.name?
        @fire evt.name, evt.detail, evt.options
    do @remove

  _activeChanged: () ->
    # Hide this element when not active. Important because of background element
    #  stopping events from passing through.
    @hidden = not @active