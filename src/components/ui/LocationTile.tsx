import Leaflet from './Leaflet';
import Details from './Details';

interface IProps {
  locationData?: {
    id: string;
    name: string;
    address: {
      name: string;
      street: string;
      city: string;
    };
    contact: {
      name: string;
      phone: string;
      email: string;
    };
    tileImage: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    geolocation: {
      lat: number;
      lng: number;
    };
  };
  index: number;
}

export default function LocationTile({ locationData, index }: IProps) {
  const geolocation = locationData!.geolocation;

  return (
    <div
      id={locationData?.id}
      className={`md:space-y-6 lg:space-y-0 lg:flex lg:gap-6 ${
        index % 2 === 0 ? 'lg:flex-row-reverse' : null
      }`}
    >
      <div className='md:rounded-2xl md:overflow-hidden lg:w-1/3'>
        <Leaflet geolocation={geolocation} />
      </div>
      <div className='flex flex-col items-center md:items-start gap-6 px-6 md:px-20 py-20 bg-peach-100 bg-[url("/assets/shared/bg-pattern-three-circles.svg")] text-center md:rounded-2xl lg:min-w-fit lg:w-2/3'>
        <h2 className='text-peach-600'>{locationData?.name}</h2>
        <div className='space-y-6 text-sm md:text-base md:space-y-0 md:flex md:items-center md:gap-40 lg:gap-28'>
          <Details
            dark={true}
            rowOne={locationData?.address.name}
            rowTwo={locationData?.address.street}
            rowThree={locationData?.address.city}
          />
          <Details
            dark={true}
            rowOne={locationData?.contact.name}
            rowTwo={locationData?.contact.phone}
            rowThree={locationData?.contact.email}
          />
        </div>
      </div>
    </div>
  );
}
