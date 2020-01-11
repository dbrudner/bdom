/**
 * @jest-environment jsdom
 */

import { createElement } from '../lib/bdom';

describe('createElement', () => {
	it('should return html', () => {
		const bDomTree = {
			tag: 'div'
		};

		const expected = createElement(bDomTree);

		expect(expected instanceof HTMLElement).toBe(true);
	});

	it('should create correct tag', () => {
		const bDomTree = {
			tag: 'div'
		};

		const expected = (createElement(bDomTree) as HTMLElement).tagName;

		expect(expected).toBe('DIV');
	});

	it('should pass attributes', () => {
		const bDomTree = {
			tag: 'div',
			attributes: {
				randomAttribute: 'true'
			}
		};

		const expected = (createElement(bDomTree) as HTMLElement).getAttribute(
			'randomAttribute'
		);

		expect(expected).toBe('true');
	});

	it('should render child text nodes', () => {
		const bDomTree = {
			tag: 'div',
			attributes: {
				randomAttribute: 'true'
			},
			children: ['hey']
		};

		const expected = (createElement(bDomTree) as HTMLElement).textContent;

		expect(expected).toBe('hey');
	});

	it('should render child bDom nodes', () => {
		const bDomTree = {
			tag: 'div',
			children: [
				{
					tag: 'div',
					children: [
						{
							tag: 'div'
						}
					]
				}
			]
		};

		const expected = (createElement(bDomTree) as HTMLElement).querySelector(
			'div div'
		);

		expect(expected).toBeTruthy();
	});
});
