const frameRateSlider = document.getElementById('framerate-slider');
const label = document.getElementById('framerate-slider-label');

frameRateSlider.value = 30;
label.innerHTML = frameRateSlider.value;

frameRateSlider.oninput = function() {
  label.innerHTML = frameRateSlider.value;
}
