export const menus = [
  {
    'name': 'Menu',
  },
  {
    'name': 'Home',
    'icon': 'home',
    'link': '/auth/dashboard',
    'open': false,
  },
  {
    'name': 'Messages',
    'icon': 'messages',
  },
  {
    'name': 'Profile',
    'icon': 'account_circle',
  },
  {
    'name': 'Saved Post',
    'icon': 'bookmark',
  },
  {
    'name': 'Setting',
    'icon': 'settings',
  },
  {
    'name': 'Account',
    'link': '/auth/dashboard',
    'sub': [
      {
        'name': 'Dashboard',
        'link': '/auth/dashboard',
        'icon': 'dashboard',
        'chip': false,
        'open': false,
      }
    ]
  },

];
