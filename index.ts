import { b, firstRender } from './lib/bdom';

// 1: Create a function that declares what the DOM should look like
function render(count) {
	return b({
		children: ['hey'],
		tag: 'div',
		attributes: {
			style: {
				textAlign: 'center',
				lineHeight: 100 + count + 'px',
				border: '1px solid red',
				width: 100 + count + 'px',
				height: 100 + count + 'px'
			}
		}
	});
}

// 2: Initialise the document
var count = 0; // We need some app data. Here we just store a count.

var tree = render(count); // We need an initial tree

console.log({ tree });

// var rootNode = createElement(tree);     // Create an initial root DOM node ...
// document.body.appendChild(rootNode);    // ... and it should be in the document

// // 3: Wire up the update logic
// setInterval(function () {
//       count++;

//       var newTree = render(count);
//       var patches = diff(tree, newTree);
//       rootNode = patch(rootNode, patches);
//       tree = newTree;
// }, 1000);
