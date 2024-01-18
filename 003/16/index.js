FlotiqPlugins.add(
  {
    id: 'PluginsML.layout-sidebar-menu-item',
    displayName: `Add menu item`,
    description: "Lorem ipsum",
    version: `1.0.16`, 
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
              icon: icons?.dashboard,
              title: "New Link",
              link: '/',
              target: '',
              rel: '',
              className: '', 
            },{
              key: 'flotiq-page-manu-item',
              icon: <img src="https://raw.githubusercontent.com/MaciejLabedzkiCodewave/plugin-001/main/images/flotiqBadgeLogo.svg" style="width: 20px;height: 20px;"/>,
              title: "Flotiq Page",
              link: "https://flotiq.com/",
              target: '_blank',
              rel: 'noreferer',
              className: '', 
            }];
      },
    );
  },
);