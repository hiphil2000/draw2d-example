import draw2d from "draw2d";
import View from "./View";

const ErdApp = draw2d.Class.extend({
	init: function (viewId) {
		this.view = new View(viewId);
	}
});

export default ErdApp;