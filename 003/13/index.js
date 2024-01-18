FlotiqPlugins.add(
    {
      id: 'PluginsML.layout-sidebar-menu-item',
      displayName: `Add menu item`,
      description: "Lorem ipsum",
      version: `1.0.13`, 
    },
    function (handler) {
      handler.on(
        'flotiq.layout.sidebar-menu-item::add',
        ({ permissions, isRoleAdmin, user, isAdmin, icons }) => {
           
          console.log('Layout Param: permissions',permissions ); 
          console.log('Layout Param: isRoleAdmin',isRoleAdmin ); 
          console.log('Layout Param: user',user ); 
          console.log('Layout Param: isAdmin',isAdmin );
          console.log('Layout Param: icons', icons);   
            
            return [{
                key: 'new-menu-item-1',
                icon: icons?.docs || "♂",
                title: "New Link",
                link: '/',
                target: '',
                rel: '',
                className: '', 
              },{
                key: 'new-menu-item-2',
                icon: icons?.docs || "♪",
                title: "Another Link",
                link: '/',
                target: '',
                rel: '',
                className: '', 
              }];
        },
      );
    },
  );