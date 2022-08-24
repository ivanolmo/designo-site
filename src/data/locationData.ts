interface Address {
  name: string;
  street: string;
  city: string;
}

interface Contact {
  name: string;
  phone: string;
  email: string;
}

interface TileImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Location {
  id: string;
  name: string;
  address: Address;
  contact: Contact;
  tileImage: TileImage;
  image: string;
  withButton: boolean;
}

export const locationData: Location[] = [
  {
    id: 'can',
    name: 'Canada',
    address: {
      name: 'Designo Central Office',
      street: '3886 Wellington Street',
      city: 'Toronto, Ontario M9C 3J5',
    },
    contact: {
      name: 'Contact',
      phone: '+1 253-863-8967',
      email: 'contact@designo.co',
    },
    tileImage: {
      mobile: '/assets/shared/locations/image-map-canada.png',
      tablet: '/assets/tablet/locations/image-map-canada.png',
      desktop: '/assets/shared/locations/image-map-canada.png',
    },
    image: '/assets/shared/components/illustration-canada.svg',
    withButton: true,
  },
  {
    id: 'aus',
    name: 'Australia',
    address: {
      name: 'Designo AU Office',
      street: '19 Balonne Street',
      city: 'New South Wales 2443',
    },
    contact: {
      name: 'Contact',
      phone: '(02) 6720 9092',
      email: 'contact@designo.au',
    },
    tileImage: {
      mobile: '/assets/shared/locations/image-map-australia.png',
      tablet: '/assets/tablet/locations/image-map-australia.png',
      desktop: '/assets/shared/locations/image-map-australia.png',
    },
    image: '/assets/shared/components/illustration-australia.svg',
    withButton: true,
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    address: {
      name: 'Designo UK Office',
      street: '13 Colorado Way',
      city: 'Rhyd-y-fro SA8 9GA',
    },
    contact: {
      name: 'Contact',
      phone: '078 3115 1400',
      email: 'contact@designo.uk',
    },
    tileImage: {
      mobile: '/assets/shared/locations/image-map-united-kingdom.png',
      tablet: '/assets/tablet/locations/image-map-united-kingdom.png',
      desktop: '/assets/shared/locations/image-map-united-kingdom.png',
    },
    image: '/assets/shared/components/illustration-united-kingdom.svg',
    withButton: true,
  },
];
