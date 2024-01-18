FlotiqPlugins.add(
    {
      id: 'PluginsML.layout-sidebar-menu-item',
      displayName: `Add menu item`,
      description: "Lorem ipsum",
      version: `1.0.5`, 
    },
    function (handler) {
      handler.on(
        'flotiq.layout.sidebar-menu-item::add',
        ({ permissions, isRoleAdmin, user, isAdmin }) => {
           
            console.log('Valide input',permissions, isRoleAdmin, user,isAdmin); 

            const iconExample = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1244_8750)">
                <path opacity="0.2" d="M16.5 18H18.75C18.9489 18 19.1397 17.921 19.2803 17.7803C19.421 17.6397 19.5 17.4489 19.5 17.25V6.75L15.75 3H8.25C8.05109 3 7.86032 3.07902 7.71967 3.21967C7.57902 3.36032 7.5 3.55109 7.5 3.75V6H12.75L16.5 9.75V18Z" fill="#015BD7"/>
                <path d="M15.75 21H5.25C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V6.75C4.5 6.55109 4.57902 6.36032 4.71967 6.21967C4.86032 6.07902 5.05109 6 5.25 6H12.75L16.5 9.75V20.25C16.5 20.4489 16.421 20.6397 16.2803 20.7803C16.1397 20.921 15.9489 21 15.75 21Z" stroke="#141046" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 6V3.75C7.5 3.55109 7.57902 3.36032 7.71967 3.21967C7.86032 3.07902 8.05109 3 8.25 3H15.75L19.5 6.75V17.25C19.5 17.4489 19.421 17.6397 19.2803 17.7803C19.1397 17.921 18.9489 18 18.75 18H16.5" stroke="#141046" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.25 14.25H12.75" stroke="#141046" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.25 17.25H12.75" stroke="#141046" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1244_8750">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>; 
        
            return [{
                key: 'new-menu-item-1',
                icon: iconExample,
                title: "New Link",
                link: '/',
                target: '_blank',
                rel: 'noreferrer',
                className: '', 
              },{
                key: 'new-menu-item-2',
                icon: iconExample,
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