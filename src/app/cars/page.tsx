import 'server-only';

import Cars from '~/components/Cars';

export default async function CarsPage(...props: any) {
  return <Cars latency={4000} />;
}
