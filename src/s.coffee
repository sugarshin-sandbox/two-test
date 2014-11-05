el = document.getElementById 'two'

pram =
  # type: Two.Types.webgl
  autostart: true
  fullscreen: true
  # width: 300
  # height: 200

two = new Two pram

two.appendTo el

circle = two.makeCircle 72, 100, 50

circle.fill = '#FF8000'
circle.stroke = 'orangered' # Accepts all valid css color
circle.linewidth = 5

rect = two.makeRectangle 213, 100, 100, 100

rect.fill = 'rgb(0, 200, 255)'
rect.opacity = 0.75
rect.noStroke()

group = two.makeGroup circle, rect

group
  .translation
  .set(two.width / 2, two.height / 2)

group.rotation = Math.PI

group.scale = .75

group.linewidth = 7

two.on 'update', (frameCount) ->
  if group.scale > 0.9999
    group.scale = group.rotation = 0

  t = (1 - group.scale) * 0.125

  group.scale += t

  group.rotation += t * 4 * Math.PI

# two.play()