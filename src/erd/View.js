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
		const parentBox = document.getElementById(id).parentNode;
		this._super(id, parentBox.clientWidth, parentBox.clientHeight);
		this.setScrollArea("#" + id);
	},

	/**
	 * Converts document coordinate to cavnas's coordinate type.
	 * @param {number} x X Coordinate
	 * @param {number} y Y Coordinate
	 * @returns 
	 */
	fromDocumentToCanvasCoordinate: function(x, y) {
		return new draw2d.geo.Point(
			(x + window.pageXOffset - this.getAbsoluteX() + this.getScrollLeft())*this.zoomFactor,
			(y + window.pageYOffset - this.getAbsoluteY() + this.getScrollTop())*this.zoomFactor
		);
	},

	/**
	 * Converts cavnas coordinate to document's coordinate type.
	 * @param {number} x X Cooridnate
	 * @param {number} y Y Cooridnate
	 * @returns Document Coordinate
	 */
	fromCanvasToDocumentCoordinate: function(x, y) {
		return new draw2d.geo.Point(
			((x*(1/this.zoomFactor)) + this.getAbsoluteX() - this.getScrollLeft() - window.pageXOffset),
			((y*(1/this.zoomFactor)) + this.getAbsoluteY() - this.getScrollTop() - window.pageYOffset)
		);
	}
});

export default View;