FlotiqPlugins.add(
    {
      id: 'PluginsML.layout-menu-items',
      displayName: `Add menu item`,
      description: "Lorem ipsum",
      version: `1.0.3`, 
    },
    function (handler) {
      handler.on(
        'flotiq.layout.sidebar-menu-item::add',
        ({ permissions, isRoleAdmin, user,isAdmin }) => {
           
            console.log('Valide input',permissions, isRoleAdmin, user,isAdmin);

            const newItem = {
                key: 'new-menu-item',
                icon: undefined,
                title: "New menu item",
                link: '/',
              }
        
            return newItem;
        },
      );
    },
  );