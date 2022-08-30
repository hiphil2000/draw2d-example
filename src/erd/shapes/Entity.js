import draw2d from "draw2d";
import { extend } from "jquery";

const Entity = draw2d.shape.layout.FlexGridLayout.extend({
	NAME: "Entity",
	lblTitle: null,

	init: function(attr) {
		this._super(extend({
			minHeight: 20,
			columns: "grow",
			rows: "grow",
			stroke: 1,
			resizeable: true
		}, attr));

		this.initComponents(attr);
	},
	initComponents: function(attr) {
		this.lblTitle = new draw2d.shape.basic.Label({
			text: attr.entityName,
			resizeable: true,
			bgColor: "#EEEEEE",
			color: "#00000"
		});
		this.add(this.lblTitle, {row: 0, col: 0});
	}
	
});

export default Entity;