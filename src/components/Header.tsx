import React from 'react';
import Link from 'next/link';
import { client, MenuLocationEnum } from 'client';

interface Props {
  title?: string;
  description?: string;
}

function Header({
  title = 'Headless by WP Engine',
  description,
}: Props): JSX.Element {
  const { menuItems } = client.useQuery()
  const links = menuItems({
    where: { location: MenuLocationEnum.PRIMARY },
  }).nodes;

  return (
    <>
      <header>
        
      </header>
      <div className='background-animation'>
        <div className="bg-blob1"></div>
        <div className="bg-blob2"></div>
        <div className="bg-blob3"></div>
      </div>
    </>
  );
}

export default Header;
