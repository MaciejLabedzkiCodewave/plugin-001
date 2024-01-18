FlotiqPlugins.add(
    {
      id: 'PluginsML.title-tailwind-hide-group',
      displayName: `Hide title and discover on hover`,
      version: `1.0.0`, 
    },
    function (handler, client) {
      handler.on(
        'flotiq.grid.cell::render',
        ({ contentType, accessor, data }) => {
           
            if (contentType?.name !== 'blogposts') { return null };
            if (accessor != 'title') { return null }; 

            // Anchor for validation if Tailwind Hover Group style are added
            const validateAddedStyle = document.querySelector('body').classList.contains("thg-enabled");

            if(!validateAddedStyle){
                // Add Tailwind Rules For Group Hidde
                const headElement = document.querySelector('head');
                const newStyle = `<style> ` +
                                    `.group:hover .group-hover\\:block { display: block; } ` +
                                    `.group:hover .group-hover\\:hidden { display: none; } ` + 
                                `</style>`;
                headElement.insertAdjacentHTML('beforeend', newStyle);

                document.querySelector('body').classList.add("thg-enabled");
            }

            // Create Grup Div
            const divContainer = document.createElement('div');
            divContainer.className = "group";

            // Create new span element with current title
            const spanTitle = `<span class="hidden group-hover:block">${data}</span>`;

            // Creater new span element with hide placeholder
            const spanHidePlaceholderTitle = `<span class="block group-hover:hidden ">🔍 SHOW TITLE ON HOVER</span>`;        
        
            divContainer.innerHTML = spanTitle + spanHidePlaceholderTitle;
        
            return divContainer;

        },
      );
    },
  );