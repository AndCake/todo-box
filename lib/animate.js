/**
 * animates a given element based on CSS transitions.
 *
 * @param {DOMElement|string} el the DOM node to be animated, if it's a string, you need to bind this function to a target element's parent and the el parameter will be interpreted as CSS selector
 * @param {string} action can either bei 'add', 'remove' or 'toggle'
 * @param {string} trigger the css class to be added to the DOM node to trigger the animation
 * @returns {Promise} resolves if the animation finishes, else will reject.
 */
export default function animate(el, action, triggerClass) {
	let _this = this;
	return new Promise(resolve => {
		if (typeof el === 'string') {
			el = _this.querySelector(el);
		}
		el.classList[action](triggerClass);
		requestAnimationFrame(() => {
			el.addEventListener('transitionend', el._transitionendlistener = () => {
				resolve();
				el.removeEventListener('transitionend', el._transitionendlistener);
			}, false);
		});
	});
}