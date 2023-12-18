import 'server-only';

interface Car {
  createdAt: string;
  driverName: string;
  driverAvatar: string;
  carName: string;
  carManufacturer: string;
  isAllocation: boolean;
  carId: string;
}

async function getCars(): Promise<Car[]> {
  const res = await fetch(`https://647de137af984710854a86f2.mockapi.io/api/v1/cars`);
  await new Promise(resolve => setTimeout(resolve, 4000));
  return res.json();
}

export default async function CarsPage() {
  const cars = await getCars();

  return (
    <main>
      <ul>
        {cars.map(v => (
          <li key={v.carId}>{v.carName}</li>
        ))}
      </ul>
    </main>
  );
}
