(function() {
  var circle, cur, el, group, pram, rect, two;

  el = document.getElementById('two');

  pram = {
    type: Two.Types.webgl,
    fullscreen: true,
    ratio: 2
  };

  two = new Two(pram);

  two.appendTo(el);

  circle = two.makeCircle(72, 100, 50);

  circle.fill = '#FF8000';

  circle.stroke = 'orangered';

  circle.linewidth = 5;

  rect = two.makeRectangle(213, 100, 100, 100);

  rect.fill = 'rgb(0, 200, 255)';

  rect.opacity = 0.75;

  rect.noStroke();

  cur = two.makeCurve(202, 200, 10, 20, 33, 10, false);

  group = two.makeGroup(circle, rect, cur);

  group.translation.set(two.width / 2, two.height / 2);

  group.scale = .75;

  group.linewidth = 7;

  two.on('update', function(frameCount) {
    var t;
    if (group.scale > 0.9999) {
      group.scale = group.rotation = group.translation = 0;
    }
    t = (1 - group.scale) * 0.125;
    group.scale += t;
    return group.rotation += t * 4 * Math.PI;
  });

  two.play();

  console.log(two.playing);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQSx1Q0FBQTs7QUFBQSxFQUFBLEVBQUEsR0FBSyxRQUFRLENBQUMsY0FBVCxDQUF3QixLQUF4QixDQUFMLENBQUE7O0FBQUEsRUFFQSxJQUFBLEdBQ0U7QUFBQSxJQUFBLElBQUEsRUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQWhCO0FBQUEsSUFFQSxVQUFBLEVBQVksSUFGWjtBQUFBLElBS0EsS0FBQSxFQUFPLENBTFA7R0FIRixDQUFBOztBQUFBLEVBVUEsR0FBQSxHQUFVLElBQUEsR0FBQSxDQUFJLElBQUosQ0FWVixDQUFBOztBQUFBLEVBWUEsR0FBRyxDQUFDLFFBQUosQ0FBYSxFQUFiLENBWkEsQ0FBQTs7QUFBQSxFQWNBLE1BQUEsR0FBUyxHQUFHLENBQUMsVUFBSixDQUFlLEVBQWYsRUFBbUIsR0FBbkIsRUFBd0IsRUFBeEIsQ0FkVCxDQUFBOztBQUFBLEVBZ0JBLE1BQU0sQ0FBQyxJQUFQLEdBQWMsU0FoQmQsQ0FBQTs7QUFBQSxFQWlCQSxNQUFNLENBQUMsTUFBUCxHQUFnQixXQWpCaEIsQ0FBQTs7QUFBQSxFQWtCQSxNQUFNLENBQUMsU0FBUCxHQUFtQixDQWxCbkIsQ0FBQTs7QUFBQSxFQW9CQSxJQUFBLEdBQU8sR0FBRyxDQUFDLGFBQUosQ0FBa0IsR0FBbEIsRUFBdUIsR0FBdkIsRUFBNEIsR0FBNUIsRUFBaUMsR0FBakMsQ0FwQlAsQ0FBQTs7QUFBQSxFQXNCQSxJQUFJLENBQUMsSUFBTCxHQUFZLGtCQXRCWixDQUFBOztBQUFBLEVBdUJBLElBQUksQ0FBQyxPQUFMLEdBQWUsSUF2QmYsQ0FBQTs7QUFBQSxFQXdCQSxJQUFJLENBQUMsUUFBTCxDQUFBLENBeEJBLENBQUE7O0FBQUEsRUE0QkEsR0FBQSxHQUFNLEdBQUcsQ0FBQyxTQUFKLENBQWMsR0FBZCxFQUFtQixHQUFuQixFQUF3QixFQUF4QixFQUE0QixFQUE1QixFQUFnQyxFQUFoQyxFQUFvQyxFQUFwQyxFQUF3QyxLQUF4QyxDQTVCTixDQUFBOztBQUFBLEVBZ0NBLEtBQUEsR0FBUSxHQUFHLENBQUMsU0FBSixDQUFjLE1BQWQsRUFBc0IsSUFBdEIsRUFBNEIsR0FBNUIsQ0FoQ1IsQ0FBQTs7QUFBQSxFQWtDQSxLQUNFLENBQUMsV0FDRCxDQUFDLEdBRkgsQ0FFTyxHQUFHLENBQUMsS0FBSixHQUFZLENBRm5CLEVBRXNCLEdBQUcsQ0FBQyxNQUFKLEdBQWEsQ0FGbkMsQ0FsQ0EsQ0FBQTs7QUFBQSxFQXdDQSxLQUFLLENBQUMsS0FBTixHQUFjLEdBeENkLENBQUE7O0FBQUEsRUEwQ0EsS0FBSyxDQUFDLFNBQU4sR0FBa0IsQ0ExQ2xCLENBQUE7O0FBQUEsRUE0Q0EsR0FBRyxDQUFDLEVBQUosQ0FBTyxRQUFQLEVBQWlCLFNBQUMsVUFBRCxHQUFBO0FBQ2YsUUFBQSxDQUFBO0FBQUEsSUFBQSxJQUFHLEtBQUssQ0FBQyxLQUFOLEdBQWMsTUFBakI7QUFDRSxNQUFBLEtBQUssQ0FBQyxLQUFOLEdBQWMsS0FBSyxDQUFDLFFBQU4sR0FBaUIsS0FBSyxDQUFDLFdBQU4sR0FBb0IsQ0FBbkQsQ0FERjtLQUFBO0FBQUEsSUFHQSxDQUFBLEdBQUksQ0FBQyxDQUFBLEdBQUksS0FBSyxDQUFDLEtBQVgsQ0FBQSxHQUFvQixLQUh4QixDQUFBO0FBQUEsSUFLQSxLQUFLLENBQUMsS0FBTixJQUFlLENBTGYsQ0FBQTtXQU9BLEtBQUssQ0FBQyxRQUFOLElBQWtCLENBQUEsR0FBSSxDQUFKLEdBQVEsSUFBSSxDQUFDLEdBUmhCO0VBQUEsQ0FBakIsQ0E1Q0EsQ0FBQTs7QUFBQSxFQXlEQSxHQUFHLENBQUMsSUFBSixDQUFBLENBekRBLENBQUE7O0FBQUEsRUFnRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxHQUFHLENBQUMsT0FBaEIsQ0FoRUEsQ0FBQTtBQUFBIiwiZmlsZSI6InMuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICd0d28nXG5cbnByYW0gPVxuICB0eXBlOiBUd28uVHlwZXMud2ViZ2xcbiAgIyBhdXRvc3RhcnQ6IHRydWVcbiAgZnVsbHNjcmVlbjogdHJ1ZVxuICAjIHdpZHRoOiAzMDBcbiAgIyBoZWlnaHQ6IDIwMFxuICByYXRpbzogMlxuXG50d28gPSBuZXcgVHdvIHByYW1cblxudHdvLmFwcGVuZFRvIGVsXG5cbmNpcmNsZSA9IHR3by5tYWtlQ2lyY2xlIDcyLCAxMDAsIDUwXG5cbmNpcmNsZS5maWxsID0gJyNGRjgwMDAnXG5jaXJjbGUuc3Ryb2tlID0gJ29yYW5nZXJlZCcgIyBBY2NlcHRzIGFsbCB2YWxpZCBjc3MgY29sb3JcbmNpcmNsZS5saW5ld2lkdGggPSA1XG5cbnJlY3QgPSB0d28ubWFrZVJlY3RhbmdsZSAyMTMsIDEwMCwgMTAwLCAxMDBcblxucmVjdC5maWxsID0gJ3JnYigwLCAyMDAsIDI1NSknXG5yZWN0Lm9wYWNpdHkgPSAwLjc1XG5yZWN0Lm5vU3Ryb2tlKClcblxuIyBsaW5lID0gdHdvLm1ha2VMaW5lIDAsMCwxMDAwLDEwMFxuXG5jdXIgPSB0d28ubWFrZUN1cnZlIDIwMiwgMjAwLCAxMCwgMjAsIDMzLCAxMCwgZmFsc2VcblxuIyBlbGxpID0gdHdvLm1ha2VFbGxpcHNlIDEwLCAwLCAyMCwgMjBcblxuZ3JvdXAgPSB0d28ubWFrZUdyb3VwIGNpcmNsZSwgcmVjdCwgY3VyXG5cbmdyb3VwXG4gIC50cmFuc2xhdGlvblxuICAuc2V0KHR3by53aWR0aCAvIDIsIHR3by5oZWlnaHQgLyAyKVxuXG4jIGdyb3VwLnJvdGF0aW9uID0gTWF0aC5QSVxuXG5ncm91cC5zY2FsZSA9IC43NVxuXG5ncm91cC5saW5ld2lkdGggPSA3XG5cbnR3by5vbiAndXBkYXRlJywgKGZyYW1lQ291bnQpIC0+XG4gIGlmIGdyb3VwLnNjYWxlID4gMC45OTk5XG4gICAgZ3JvdXAuc2NhbGUgPSBncm91cC5yb3RhdGlvbiA9IGdyb3VwLnRyYW5zbGF0aW9uID0gMFxuXG4gIHQgPSAoMSAtIGdyb3VwLnNjYWxlKSAqIDAuMTI1XG5cbiAgZ3JvdXAuc2NhbGUgKz0gdFxuXG4gIGdyb3VwLnJvdGF0aW9uICs9IHQgKiA0ICogTWF0aC5QSVxuXG4gICMgZ3JvdXAudHJhbnNsYXRpb24gKz0gdFxuXG4jIHR3by51cGRhdGUoKVxudHdvLnBsYXkoKVxuXG4jIHNldFRpbWVvdXQoLT5cbiMgICB0d28ucGF1c2UoKVxuIyAgIHR3by5jbGVhcigpXG4jICwgMTUwMClcblxuY29uc29sZS5sb2cgdHdvLnBsYXlpbmciXX0=