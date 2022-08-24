const draw2d = require("draw2d");

/**
 * Draw2D의 랜더링 화면입니다.
 */
const View = draw2d.Canvas.extend({
	/**
	 * 랜더링 화면 객체를 초기화 합니다.
	 * @constructor
	 * @param {string} id 랜더링 화면 Element의 ID
	 */
	init: function(id) {
		this._super(id, 2000, 2000);
		this.setScrollArea("#" + id);
	}
});

export default View;