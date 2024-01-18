FlotiqPlugins.add(
    {
      id: 'PluginsML.title-hide-group',
      displayName: `Hide title and discover on hover`,
      version: `1.0.0`, 
    },
    function (handler) {
      handler.on(
        'flotiq.grid.cell::render',
        ({ contentType, accessor, data }) => {
           
            if (contentType?.name !== 'blogposts'){ return null; }
            if (accessor != 'title') { return null; }   

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