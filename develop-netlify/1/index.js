FlotiqPlugins.add(
    {
      id: 'PluginsML.deploy-netlify',
      displayName: `Deploy Netlify`,
      description: "add",
      version: `1.0.0`, 
    },
    function (handler) {
      handler.on(
        'flotiq.plugin.library::add',
        ({ finalCtdOptions }) => {
           
            console.log('finalCtdOptions',finalCtdOptions);
        
            return {name:"Netlify build", desc:"Integration with the Netlify. After adding the plugin, you will be able to build your page on Netlify within Flotiq.",};
        },
      );
    },
  );