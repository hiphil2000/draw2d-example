import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';  //ommit, if you don't want to load basic css theme
import Application from './erd/Application';
import Table from './erd/shapes/Table';

window.addEventListener("DOMContentLoaded", function() {
	const app = new Application();

	for(let i = 0; i < 10; i++) {
		const table = new Table({
			name: "table" + (i + 1),
			x: 150 + (250 * (i % 5)),
			y: 100 + (500 * (parseInt(i / 5)))
		});
		app.view.add(table);

		for(let j = 1; j <= 10; j++) {
			table.addEntity("Entity" + j, "NVARCHAR(50)");
		}
	}

	window.app = app;
});