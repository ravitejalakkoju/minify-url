function validateUrl(event) {
  const url = event.target.value;
  const pattern = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
  const errorMessage = document.getElementById('errorMessage');
  const urlInput = document.getElementById('urlInput');
  const originalUrlParent = document.getElementById('originalUrlParent');
  originalUrlParent.style.display = 'none';
  if(url == '' || url == null) {
    errorMessage.innerHTML = 'Whoops! It looks like you forgot to add the url';
    return;
  }
  if(!pattern.test(url)) {
    errorMessage.innerHTML = 'Please provide a valid url address.';
    urlInput.classList.add('invalid');
  }
  else {
    errorMessage.innerHTML = '';
    urlInput.classList.remove('invalid');
  }
}

function shortenUrl(event) {
  event.preventDefault();
  const urlInput = document.getElementById('urlInput');
  const originalUrl = document.getElementById('originalUrl');
  const originalUrlParent = document.getElementById('originalUrlParent');
  originalUrl.innerHTML = urlInput.value;
  urlInput.value = 'mini.fy/abcdef';
  originalUrlParent.style.display = 'block';
}