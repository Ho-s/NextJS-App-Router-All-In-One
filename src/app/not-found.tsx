import Image from 'next/image';
import Link from 'next/link';

import 'server-only';
import notFoundImage from '~/assets/images/not-found.png';

export default function NotFound() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          fontSize: '25px',
          color: '#333',
          marginBottom: '5px',
          fontWeight: 600,
        }}
      >
        Error 404 - Page Not Found
      </div>
      <Image src={notFoundImage} width={400} height={175} alt="not-found-image" />
      <div style={{ fontSize: '20px', color: '#999' }}>The page you requested wan not found!</div>
      <div style={{ fontSize: '20px', color: '#999' }}>Check the url plaease.</div>

      <Link
        replace={true}
        href="/"
        style={{
          margin: '20px',
          color: 'white',
          border: '1px solid #E31937',
          backgroundColor: '#E31937',
          padding: '10px 20px',
        }}
      >
        Go home
      </Link>

      <p style={{ fontSize: '14px', fontWeight: 500, color: '#666' }}>
        Ho-s | <Link href="https://github.com/Ho-s">https://github.com/Ho-s</Link>
      </p>
    </div>
  );
}
