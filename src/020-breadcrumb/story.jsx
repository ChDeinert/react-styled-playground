import React from 'react';
import { storiesOf } from '@storybook/react';

import { InlineStyled, WithGlamorous, WithStyledComponents } from './';

const breadcrumbItems = [
  { label: 'Start', href: '/' },
  { label: 'Between', href: '/between' },
  { label: 'Current' },
];

storiesOf('020 - Breadcrumb', module)
  .add('1 - inline styled', () => <InlineStyled items={breadcrumbItems} />)
  .add('2 - with glamorous', () => <WithGlamorous items={breadcrumbItems} />)
  .add('3 - with styled-components', () => <WithStyledComponents items={breadcrumbItems} />);
