import draw2d from "draw2d";
import { Padding } from "../../utils";
import Entity from "./Entity";

const Table = draw2d.shape.layout.VerticalLayout.extend({
	NAME: "Table",

	init: function(attr) {
		this._super($.extend({
			stroke: 1,
			gap: 0,
			resizeable: false
		}, attr));
		
		this.initComponents(attr);

	},

	initComponents: function(attr) {
		const label = new draw2d.shape.basic.Label({
			text: attr.name,
			resizeable: true,
			width: 225
			// fontSize: "15px",
			// stroke: 0,
			// width: "100px"
		});
		this.add(label);
	},

	addEntity: function(name, type) {
		const entity = new Entity({
			name,
			type
		});

		this.add(entity);
	},
});

export default Table;