import {
  NavigationLink,
  NavigationPaths,
} from '@olympia/core/navigation/common';

export function getLinks(paths: NavigationPaths): NavigationLink[] {
  return [
    {
      route: paths.home,
      label: 'Головна',
      icon: 'homeIcon',
      routerLinkActiveOptions: {
        exact: true,
      },
    },
    {
      route: paths.photo,
      label: 'Фото',
      icon: 'photoIcon',
    },
    {
      route: paths.price,
      label: 'Ціни',
      icon: 'priceIcon',
    },
    {
      route: paths.contact,
      label: 'Контакти',
      icon: 'contactIcon',
    },
  ];
}
