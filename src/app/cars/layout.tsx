import 'server-only';

import { ReactNode } from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car-List',
};

export default function CarsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
