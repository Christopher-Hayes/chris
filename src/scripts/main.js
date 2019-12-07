

// Set focus to main content
function skipContent() {
  console.log('skip');
  // $('#content').focus();
  // console.log(document.getElementById('content'));
  // console.log(document.getElementById('content').focus());
  console.log(focus(document.getElementById('content')));
}
function focus(el){
	el.focus();
	return el==document.activeElement;
}
