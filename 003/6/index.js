FlotiqPlugins.add(
    {
      id: 'PluginsML.layout-sidebar-menu-item',
      displayName: `Add menu item`,
      description: "Lorem ipsum",
      version: `1.0.6`, 
    },
    function (handler) {
      handler.on(
        'flotiq.layout.sidebar-menu-item::add',
        ({ permissions, isRoleAdmin, user, isAdmin }) => {
           
            console.log('Valide input',permissions, isRoleAdmin, user,isAdmin);   
            
            return [{
                key: 'new-menu-item-1',
                icon: undefined ,
                title: "New Link",
                link: '/',
                target: '_blank',
                rel: 'noreferrer',
                className: '', 
              },{
                key: 'new-menu-item-2',
                icon: undefined ,
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