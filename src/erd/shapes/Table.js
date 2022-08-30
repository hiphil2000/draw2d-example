import draw2d from "draw2d";
import { Padding } from "../../utils";
import Entity from "./Entity";

const Table = draw2d.shape.layout.VerticalLayout.extend({
	NAME: "Table",

	init: function(attr) {
		this._super($.extend({
			stroke: 1,
			gap: 0,
		}, attr));
		
		this.on("resize", this.handleResize);


		this.initComponents(attr);

	},

	initComponents: function(attr) {
		const label = new draw2d.shape.basic.Text({
			text: attr.name,
			resizeable: false
			// fontSize: "15px",
			// stroke: 0,
			// width: "100px"
		});
		this.add(label);
	},

	addEntity: function(name) {
		const entity = new Entity({
			entityName: name
		});

		const leftPort = entity.lblTitle.createPort("hybrid");
		leftPort.setName("LeftPort_" + entity.id);

		this.add(entity);
	},

	handleResize: function(emitter, obj) {
		const children = emitter.getChildren().data;
		if (children instanceof Array) {
			children.forEach(child => {
				if (child.hasOwnProperty("setWidth")) {
					child.setWidth(emitter.width);
				}
			});
		}
	}
});

export default Table;