FlotiqPlugins.add(
  {
    id: 'PluginsML.layout-sidebar-menu-item',
    displayName: `Layout menu link`,
    description: "Add additional menu item in layout sidebar",
    version: `1.0.22`, 
  },
  function (handler) {
    handler.on(
      'flotiq.layout.sidebar-menu-item::add',
      ({ isAdmin }) => {

        const menuItems = [];

        if(isAdmin){
          menuItems.push(
            {
              key: 'sentry-link',
              iconSrc: "https://raw.githubusercontent.com/MaciejLabedzkiCodewave/plugin-001/main/images/sentry.svg",
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