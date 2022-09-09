interface Address {
  name: string;
  street: string;
  city: string;
}

interface Geolocation {
  lat: number;
  lng: number;
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
  geolocation: Geolocation;
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
    geolocation: {
      lat: 43.70897190056188,
      lng: -79.24798156261842,
    },
    contact: {
      name: 'Contact',
      phone: '+1 253-863-8967',
      email: 'contact@designo.co',
    },
    tileImage: {
      mobile: '/assets/shared/locations/image-map-canada.webp',
      tablet: '/assets/tablet/locations/image-map-canada.webp',
      desktop: '/assets/shared/locations/image-map-canada.webp',
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
    geolocation: {
      lat: -33.11058088110388,
      lng: 151.63184082232843,
    },
    contact: {
      name: 'Contact',
      phone: '(02) 6720 9092',
      email: 'contact@designo.au',
    },
    tileImage: {
      mobile: '/assets/shared/locations/image-map-australia.webp',
      tablet: '/assets/tablet/locations/image-map-australia.webp',
      desktop: '/assets/shared/locations/image-map-australia.webp',
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
    geolocation: {
      lat: 53.73334265523879,
      lng: -1.3270570498374588,
    },
    contact: {
      name: 'Contact',
      phone: '078 3115 1400',
      email: 'contact@designo.uk',
    },
    tileImage: {
      mobile: '/assets/shared/locations/image-map-united-kingdom.webp',
      tablet: '/assets/tablet/locations/image-map-united-kingdom.webp',
      desktop: '/assets/shared/locations/image-map-united-kingdom.webp',
    },
    image: '/assets/shared/components/illustration-united-kingdom.svg',
    withButton: true,
  },
];
