import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';  //ommit, if you don't want to load basic css theme
import Application from './erd/Application';
import Table from './erd/shapes/Table';

window.addEventListener("DOMContentLoaded", function() {
	const app = new Application();

	for(let i = 1; i <= 5; i++) {
		const table = new Table({
			name: "table" + i,
			x: 150 * i,
			y: 100
		});
		app.view.add(table);

		for(let j = 1; j <= 10; j++) {
			table.addEntity("Entity" + j);
		}
	}

	window.app = app;
});