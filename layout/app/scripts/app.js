// repeat in js

function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}

multiplyNode(document.querySelector('.box__layout--content'), 10, true);

// button click

var box__layout = document.querySelector('.box__layout--content');
var text = ['.box__layout--content'];
var i = 0;

function prev() {
    if(i <= 0) i = text.length;	
	i--;
	return setImg();
}

function next() {
    if(i <= 0) i = text.length;	
	i--;
	return setImg();
}

function setImg(){
    return box__layout.setAttribute('.box__layout--content');
}