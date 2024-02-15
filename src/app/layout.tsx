import type { Metadata } from 'next';

/*
 * Keeping Server-only Code out of the Client Environment
 *  https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
 */
import 'server-only';

import CustomThemeProvider from '~/providers/CustomThemeProvider';
import { notoSans } from '~/styles/theme';

const ALL_IN_ONE = 'NextJS-All-In-One';

export const metadata: Metadata = {
  title: {
    template: ALL_IN_ONE + ' | %s',
    default: ALL_IN_ONE,
  },
  description: 'NextJS + AppROuter',
  other: {
    'naver-site-verification': process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  );
}
