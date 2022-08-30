import draw2d from "draw2d";
import { extend } from "jquery";

const Entity = draw2d.shape.layout.FlexGridLayout.extend({
	NAME: "Entity",
	chkUseYn: null,
	lblTitle: null,
	lblType: null,

	init: function(attr) {
		this._super(extend({
			minHeight: 20,
			columns: "25, 100, 100",
			rows: "grow",
			stroke: 1,
			resizeable: true
		}, attr));

		const port = this.createPort("hybrid");
		port.setName("LeftPort_" + this.id);

		this.initComponents(attr);
	},
	initComponents: function(attr) {
		this.chkUseYn = new draw2d.shape.basic.Rectangle({
			width: 25,
			stroke: 2
		});
		this.add(this.chkUseYn, {row: 0, col: 0});

		this.lblTitle = new draw2d.shape.basic.Label({
			text: attr.name,
			resizeable: true,
			bgColor: "#EEEEEE",
			color: "#00000",
			cssClass: "testclass",
			width: 100
		});
		this.add(this.lblTitle, {row: 0, col: 1});
		
		this.lblType = new draw2d.shape.basic.Label({
			text: attr.type,
			resizeable: true,
			bgColor: "#EEEEEE",
			color: "#00000",
			cssClass: "testclass",
			width: 100
		});
		this.add(this.lblType, {row: 0, col: 2});
	}
	
});

export default Entity;