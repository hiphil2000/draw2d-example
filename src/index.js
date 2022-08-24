import View from './erd/View';

import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';  //ommit, if you don't want to load basic css theme

let view = null;

window.addEventListener("DOMContentLoaded", function() {
	view = new View("view");
});