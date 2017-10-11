import React from 'react';
import { action, storiesOf } from '@storybook/react';

import { InlineStyled, WithGlamorous, WithStyledComponents } from './';

storiesOf('010 - Button', module)
  .add('1 - inline styled', () => <InlineStyled onClick={action('click')}>test</InlineStyled>)
  .add('2 - with glamorous', () => <WithGlamorous onClick={action('click')}>test</WithGlamorous>)
  .add('3 - with styled-components', () => <WithStyledComponents onClick={action('click')}>test</WithStyledComponents>);
