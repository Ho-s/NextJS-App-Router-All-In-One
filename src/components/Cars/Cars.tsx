import 'server-only';

import Link from 'next/link';

import { API_HOST } from '~/constants/apiRelated';

export interface Car {
  createdAt: string;
  driverName: string;
  driverAvatar: string;
  carName: string;
  carManufacturer: string;
  isAllocation: boolean;
  carId: string;
}

async function getCars(latency: number): Promise<Car[]> {
  // You need to set base url in .env as origin of your url
  const res = await fetch(API_HOST + '/api/cars');
  await new Promise(resolve => setTimeout(resolve, latency));
  return res.json();
}

interface CarsProps {
  latency: number;
}

const Cars = async ({ latency }: CarsProps) => {
  const cars = await getCars(latency);

  return (
    <div className="cars-root-page">
      <ul>
        {cars.map(v => (
          <li key={v.carId}>
            <Link href={`/cars/${v.carId}`}>{v.carName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
