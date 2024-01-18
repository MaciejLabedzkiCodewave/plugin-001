FlotiqPlugins.add(
    {
      id: 'PluginsML.layout-sidebar-menu-item',
      displayName: `Add menu item`,
      description: "Lorem ipsum",
      version: `1.0.8`, 
    },
    function (handler) {
      handler.on(
        'flotiq.layout.sidebar-menu-item::add',
        ({ permissions, isRoleAdmin, user, isAdmin, icons }) => {
           
            console.log('Valide input',permissions, isRoleAdmin, user, isAdmin, icons);   
            
            return [{
                key: 'new-menu-item-1',
                icon: "♂",
                title: "New Link",
                link: '/',
                target: '_blank',
                rel: 'noreferrer',
                className: '', 
              },{
                key: 'new-menu-item-2',
                icon:  "♪",
                title: "New Link",
                link: '/',
                target: '_blank',
                rel: 'noreferrer',
                className: '', 
              }];
        },
      );
    },
  );