var show = function(tests){
  show.init();
  tests();
};

show.init = function() {
  var wrapper = show.createElement('<div class="wrapper"><ul id="show"></ul></div>');
  document.body.insertBefore(wrapper, document.body.childNodes[0]);
}

show.createElement = function(htmlStr) {
  var frag = document.createDocumentFragment(),
      temp = document.createElement('div');
  temp.innerHTML = htmlStr;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  return frag;
}

show.append = function(msg) {
  document.getElementById("show").innerHTML += msg;
}


show.equal = function(actual, expected, message) {
  if(actual === expected) {
    message += ': ' + '<span class="pass">Passed.</span>';
  } else {
    message += ': ' + '<span class="fail">Failed.</span>';
  }
  message = '<li>' + message + '</li>'
  show.append(message);
}