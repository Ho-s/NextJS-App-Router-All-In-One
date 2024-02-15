import { ReactNode } from 'react';

import { Metadata } from 'next';

import 'server-only';

export const metadata: Metadata = {
  title: 'Car-List',
};

export default function CarsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
