import { LAYOUT_HEADER_LINKS } from '@/constants';

import { LayoutHeader } from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutHeader links={LAYOUT_HEADER_LINKS} />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};
