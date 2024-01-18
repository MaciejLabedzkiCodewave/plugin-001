FlotiqPlugins.add(
    {
      id: 'PluginsML.layout-menu-items',
      displayName: `Add menu item`,
      version: `1.0.2`, 
    },
    function (handler) {
      handler.on(
        'flotiq.layout.sidebar-menu-item::add',
        ({ permissions, isRoleAdmin, user,isAdmin }) => {
           
            console.log('Valide input',permissions, isRoleAdmin, user,isAdmin);
        
            return {
                key: 'new-menu-item',
                icon: undefined,
                title: "New menu item",
                link: '/',
              };
        },
      );
    },
  );