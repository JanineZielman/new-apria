import React from 'react';

interface Props {
  copyrightHolder?: string;
}

function Footer({ copyrightHolder = 'Company Name' }: Props): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>
        <p>{`© ${year} ${copyrightHolder}. All rights reserved.`}</p>
      </div>
    </footer>
  );
}

export default Footer;
