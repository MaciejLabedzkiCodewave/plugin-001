FlotiqPlugins.add(
  {
    id: 'PluginsML.layout-sidebar-menu-item',
    displayName: `Add menu item`,
    description: "Lorem ipsum",
    version: `1.0.20`, 
  },
  function (handler) {
    handler.on(
      'flotiq.layout.sidebar-menu-item::add',
      ({ permissions, isRoleAdmin, user, isAdmin, icons }) => {

        const menuItems = [];

        if(isAdmin){
          menuItems.push(
            {
              key: 'sentry-link',
              icon: "https://raw.githubusercontent.com/MaciejLabedzkiCodewave/plugin-001/main/images/sentry.svg",
              title: "Sentry",
              link: 'https://sentry.dev.cdwv.pl/organizations/cdwv/issues/',
              target: '_blank',
              rel: 'noreferer',
              className: undefined, 
            }
          )
        }

        menuItems.push({
          key: 'flotiq-page-manu-item',
          iconSrc: "https://raw.githubusercontent.com/MaciejLabedzkiCodewave/plugin-001/main/images/flotiqBadgeLogo.svg",
          title: 'Flotiq Page',
          link: 'https://flotiq.com/',
          target: '_blank',
          rel: 'noreferer',
          className: undefined, 
        })

          
        return menuItems;
      },
    );
  },
);