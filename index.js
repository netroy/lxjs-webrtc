(function () {

  'use strict';

  var options = {
    'video': true,
    'audio': false
  };

  var getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia ||
                      navigator.mozGetUserMedia || navigator.msGetUserMedia)
                     .bind(navigator);

  var video = document.querySelector('video');

  function success (stream) {
    window.stream = stream;
    video.src = URL.createObjectURL(stream);
  }

  function error () {
    document.write('this sucks');
  }

  getUserMedia(options, success, error);
  video.play();

})();
