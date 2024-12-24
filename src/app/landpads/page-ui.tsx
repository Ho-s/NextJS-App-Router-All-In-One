'use client';

import Link from 'next/link';

import { LandpadsLoadingStyled, LandpadsPageStyled } from './styled';

export interface Landpad {
  attempted_landings: string | null;
  details: string;
  full_name: string;
  id: string;
  landing_type: string | null;
  location: { latitude: number; longitude: number; name: string; region: string } | null;
  status: string;
  successful_landings: string | null;
  wikipedia: string;
}

interface LandpadsUIPageProps {
  data: Landpad[] | undefined;
  loading: boolean;
}

const LandpadsUIPage = ({ data, loading }: LandpadsUIPageProps) => {
  if (loading) return <LandpadsLoadingStyled>loading</LandpadsLoadingStyled>;

  return (
    <LandpadsPageStyled>
      {data?.map(v => (
        <div key={v.id}>
          <h1>{v.full_name}</h1>
          <p>{v.details}</p>
          <p className="status">{v.status}</p>
          <Link href={v.wikipedia}>{v.wikipedia}</Link>
        </div>
      ))}
    </LandpadsPageStyled>
  );
};

export default LandpadsUIPage;
