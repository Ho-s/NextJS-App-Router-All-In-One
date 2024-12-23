import Image from 'next/image';
import Link from 'next/link';

import { Car } from '~/components/Cars';
import { API_HOST } from '~/constants/apiRelated';

export const dynamic = 'force-dynamic';

async function getCarDetail(detail: string): Promise<Car> {
  const res = await fetch(API_HOST + `/api/cars/${detail}`);
  return res.json();
}

export default async function CarsDetailPage({ params }: { params: Promise<{ detail: string }> }) {
  const { detail } = await params;
  const car = await getCarDetail(detail);

  return (
    <div className="cars-detail-page">
      <Image src={car.driverAvatar} width={50} height={50} alt="driver-image" />

      {Object.entries(car).map(([key, value]) => (
        <p key={key}>
          {key}: <span>{value}</span>
        </p>
      ))}
      <button>
        <Link href="/cars">Go back to list</Link>
      </button>
    </div>
  );
}
