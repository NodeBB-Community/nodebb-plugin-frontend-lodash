(function () {
	// to prevent changing of NodeBB templates
	// inject modules directly to RequireJS
	var rjsConfig = requirejs.s.contexts._.config,
		pluginPrefix = '',
		pluginPath = '../../plugins/nodebb-plugin-frontend-lodash/';
	var registerAMD = function (name, path) {
		if (!rjsConfig.paths[pluginPrefix + name])
			rjsConfig.paths[pluginPrefix + name] = pluginPath + path;
	};

	registerAMD('lodash', 'lodash/lodash.min');
})();
