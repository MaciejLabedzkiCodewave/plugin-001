FlotiqPlugins.add(
    {
      id: 'PluginsML.deploy-netlify',
      displayName: `Deploy Netlify`,
      description: "Integration with Netlify",
      version: "1.0.11", 
      repository: "https://raw.githubusercontent.com/MaciejLabedzkiCodewave/plugin-001/main/develop-netlify/1/index.js",
      permissions: []
    },
    function (handler) {
      handler.on(
        'flotiq.plugin.library::add',
        ({exclude}) => {  
          // Validate Parsable String
          function isJsonParsable(str) {
              try {
                  JSON.parse(str);
              } catch (e) {
                  return false;
              }
              return true;
          }

          // Case: is plugin excluded  
          if(typeof exclude === "string" && 
            exclude?.length > 0 &&
            isJsonParsable(exclude) &&
            JSON.parse(exclude)?.includes("Netlify Build")) {
            return null;
          }

          // Case: Netlify Build Settings
          return {
              "type": "netlify-build",
              "code": "__API_URL__/bundles/netlifybuild/netlify-build/button.html",
              "name": "Netlify Build",
              "version": "0.2",
              "internal": {
                  "createdAt": "",
                  "deletedAt": "",
                  "updatedAt": "",
                  "contentType": "_plugin"
              },
              "settings": [
                  {
                      "key": "build_instance_url",
                      "label": "Build Instance URL",
                      "value":"",
                  },
                  {
                      "key": "build_webhook_url",
                      "label": "Build Webhook URL",
                      "value":"",
                  }
              ],
              "description": "Integration with the Netlify. After adding the plugin, you will be able to build your page on Netlify within Flotiq.",
              "contentTypeDefinitions": "",
              "order": "-1",
              "disabled": false
            }
        },
      );
    },
  );