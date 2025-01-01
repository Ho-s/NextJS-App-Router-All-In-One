'use client';

import Link from 'next/link';

import { Landpad } from '../page-ui';
import { LandpadIdPageStyled } from './styled';

interface LandpadIdUIPageProps {
  data: Landpad;
}

const LandpadsIdUIPage = ({ data }: LandpadIdUIPageProps) => {
  return (
    <LandpadIdPageStyled>
      <h1>{data.full_name}</h1>
      <p>{data.details}</p>
      <p className="status">{data.status}</p>
      <Link href={data.wikipedia} target="_blank">
        {data.wikipedia}
      </Link>
      <Link href={'/landpads'}>
        <p>Go to landpads page</p>
      </Link>
    </LandpadIdPageStyled>
  );
};

export default LandpadsIdUIPage;
