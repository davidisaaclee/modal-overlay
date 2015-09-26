document.addEventListener 'WebComponentsReady', () ->
  delt = document.querySelector 'demo-element'
  delt.addEventListener 'destroyed', (evt) ->
    console.log 'destroyed', evt.detail

  DemoElement = Polymer
    is: 'demo-element'

    properties:
      index:
        type: Number
        value: 0

    listeners:
      'track': '_onTrack'

    factoryImpl: (@index) ->

    ready: () ->
      @style.left = "#{Math.random() * 200}px"
      @style.top = "#{Math.random() * 300}px"

    _push: () ->
      modal = document.createElement 'modal-overlay'
      modal.inheritEvent 'track', this
      child = new DemoElement (@index + 1)
      child._pop = () ->
        modal.destroy
          name: 'destroyed'
          detail:
            index: @index

      Polymer.dom modal
        .appendChild child
      Polymer.dom @root
        .appendChild modal

      modal.active = true

    # will be populated at _push
    _pop: ->

    _onTrack: (evt) ->
      switch evt.detail.state
        when 'track'
          detail = evt.detail
          hovered = detail.hover()
          if hovered is @$.open
            do @_push
        when 'end'
          do @_pop

    _open: (evt) ->
      do @_push