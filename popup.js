document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#config').addEventListener('click', function() {
    var optionsURL = browser.extension.getURL("options.html");
    browser.tabs.create({
      url: optionsURL
    });
  });

  document.querySelector('#about').addEventListener('click', function() {
    window.open("https://github.com/igrigorik/videospeed");
  });

  document.querySelector('#feedback').addEventListener('click', function() {
    window.open("https://github.com/igrigorik/videospeed/issues");
  });
});
