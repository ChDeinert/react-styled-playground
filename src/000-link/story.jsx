import React from 'react';
import { storiesOf } from '@storybook/react';

import { InlineStyled, WithGlamorous, WithStyledComponents } from './';

storiesOf('000 - Link', module)
  .add('1 - inline styled', () => <InlineStyled href="#">test</InlineStyled>)
  .add('2 - with glamorous', () => <WithGlamorous href="#">test</WithGlamorous>)
  .add('3 - with styled-components', () => <WithStyledComponents href="#">test</WithStyledComponents>);
