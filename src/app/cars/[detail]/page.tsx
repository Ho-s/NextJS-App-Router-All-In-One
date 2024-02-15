import Image from 'next/image';
import Link from 'next/link';

import { Car } from '../page';

async function getCarDetail(detail: string): Promise<Car> {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/cars/${detail}`);
  return res.json();
}

export default async function CarsDetailPage({
  params: { detail },
}: {
  params: { detail: string };
}) {
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
