FlotiqPlugins.add(
    {
      id: 'PluginsML.deploy-netlify',
      displayName: `Deploy Netlify`,
      description: "Integration with Netlify",
      version: "1.0.8", 
      repository: "https://raw.githubusercontent.com/MaciejLabedzkiCodewave/plugin-001/main/develop-netlify/1/index.js",
      permissions: []
    },
    function (handler) {
      handler.on(
        'flotiq.plugin.library::add',
        ({ finalCtdOptions }) => {

          return {
              "type": "netlify-build",
              "code": "__API_URL__/bundles/netlifybuild/netlify-build/button.html",
              "name": "Netlify Build",
              "version": "0.2",
              "internal": {
                  "createdAt": "2020-04-20T14:00:40+00:00",
                  "deletedAt": "",
                  "updatedAt": "2020-04-21T12:16:21+00:00",
                  "contentType": "_plugin"
              },
              "settings": [
                  {
                      "key": "build_instance_url",
                      "label": "Build Instance URL"
                  },
                  {
                      "key": "build_webhook_url",
                      "label": "Build Webhook URL"
                  }
              ],
              "description": "Integration with the Netlify. After adding the plugin, you will be able to build your page on Netlify within Flotiq.",
              "contentTypeDefinitions": "",
              "order": 4,
              "disabled" : true
            }
        },
      );
    },
  );