'use client';

import Link from 'next/link';

import { PostLoadingStyled, PostPageStyled } from './styled';

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

interface PostUIPageProps {
  data: Landpad[] | undefined;
  loading: boolean;
}

const PostUIPage = ({ data, loading }: PostUIPageProps) => {
  if (loading) return <PostLoadingStyled>loading</PostLoadingStyled>;

  return (
    <PostPageStyled>
      {data?.map(v => (
        <div key={v.id}>
          <h1>{v.full_name}</h1>
          <p>{v.details}</p>
          <p className="status">{v.status}</p>
          <Link href={v.wikipedia}>{v.wikipedia}</Link>
        </div>
      ))}
    </PostPageStyled>
  );
};

export default PostUIPage;
