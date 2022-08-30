import draw2d from "draw2d";
import Table from "./shapes/Table";
import View from "./View";

export default class Application {
	view = null;

	constructor() {
		this.view = new View("view");
		this.view.installEditPolicy(new draw2d.policy.connection.DragConnectionCreatePolicy({
			createConnection: function(srcPort, destPort) {
				const connection = new draw2d.Connection();
				connection.setRouter(new draw2d.layout.connection.ManhattanConnectionRouter());
				return connection;
			}
		}))
	}

	async getJSON() {
		return new Promise((resolve, reject) => {
			const writer = new draw2d.io.json.Writer();
			writer.marshal(this.view, function(json){
				resolve(json);
			});
		});
	}	
}