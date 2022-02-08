import lightGallery from "https://cdn.skypack.dev/lightgallery@2.3.0-beta.4";

import lgVideo from "https://cdn.skypack.dev/lightgallery@2.3.0-beta.4/plugins/video";

lightGallery(document.getElementById("gallery-container"), {
  speed: 500,
  controls: false,
  download: false,
  loop: false,
  showbarsafter: 0,
  startclass: "lg-zoom-in-big",
  gotoNextSlideOnVideoEnd: false,
  videojs: true,
  plugins: [lgVideo]
});
