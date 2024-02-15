// TODO: 
// - replace old plugin with new referene

FlotiqPlugins.add(
    {
      id: 'deploy-netlify',
      displayName: `Deploy Netlify`,
      description: "Integration with Netlify",
      version: "1.0.1", 
      repository: "https://raw.githubusercontent.com/MaciejLabedzkiCodewave/plugin-001/main/netlify/1/index.js",
      permissions: []
    },
    function (handler, _client) {
        handler.on(
            'flotiq.form.sidebar-plugins::render',
            ({
              plugins,
              contentObject,
              contentType,
              duplicate,
              create,
              disabled,
            }) => {
              console.log('plugins', plugins);
              console.log('contentObject', contentObject);
              console.log('contentType', contentType);
              console.log('duplicate', duplicate);
              console.log('create', create);
              console.log('disabled', disabled);

      
            
      
              // Create div HTML element
              const div = document.createElement('div');
      
              // Add link inside
              div.innerHTML = `
                        <div class="rounded-lg bg-white relative h-fit py-5 px-4 order-60">
                            <span class="mr-2 font-bold text-lg">Plugins</span>

                            <a target="_blank">Build site</a>
                            <div id="message">Updating preview link...</div>

                            <img src="https://i.imgur.com/gSy2SPa_d.webp?maxwidth=760&fidelity=grand"  alt="netlify logo" />
                        </div>
                      `;
      
              // Style panel to look a bit better.
              div.style.background = `white`;
              div.style.padding = `1rem`;
              div.style.margin = '0 0 2rem 0';
              div.style.borderRadius = '1rem';
              div.style.textAlign = 'center';
      
              return div;


            },
          );
    },
  );