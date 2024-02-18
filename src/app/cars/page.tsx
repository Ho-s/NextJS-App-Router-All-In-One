import Link from 'next/link';

import 'server-only';

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

async function getCars(): Promise<Car[]> {
  // You need to set base url in .env as origin of your url
  const res = await fetch(API_HOST + '/api/cars');
  await new Promise(resolve => setTimeout(resolve, 4000));
  return res.json();
}

export default async function CarsPage() {
  const cars = await getCars();

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
}
