type BdomEl = {
	tag: string;
	attributes?: any;
	children?: BdomEl[] | string[];
};

// export function b(tag, attributes, children): BdomEl {
// 	return { tag, attributes, children };
// }

export function createElement(node: BdomEl | string): HTMLElement | Text {
	if (typeof node === 'string') {
		return document.createTextNode(node);
	}

	const { tag, attributes, children = [] } = node;

	const el: HTMLElement = document.createElement(tag);

	for (let attribute in attributes) {
		el.setAttribute(attribute, attributes[attribute]);
	}

	if (!children.length) {
		return el;
	}

	let child: BdomEl | string;

	for (child of children) {
		if (typeof child === 'string') {
			const node = document.createTextNode(child);
			return el.appendChild(node);
		}

		let node: HTMLElement;

		if (!child.children) {
			const el = createElement;
			node = document.createElement((child as BdomEl).tag);
		} else {
			node = document.createElement((child as BdomEl).tag);

			for (child of child.children) {
				const childEl = createElement(child);
				node.appendChild(childEl);
			}
		}

		el.appendChild(node);
	}

	return el;
}

export function firstRender(tree, el) {
	el.innerHTML = tree;
}
