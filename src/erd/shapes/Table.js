import draw2d from "draw2d";

const Table = draw2d.layout.VerticalLayout.extend({
	init: function(attr) {
		this._super($.extend({
			stroke: 1
		}, attr));

	}
});

export default Table;