/**
 * @jest-environment node
 */

import * as React from 'react';
import { shallow } from 'enzyme';
import { NotFound404 } from './index';

it('renders without crashing', () => {
  shallow(<NotFound404 />);
});
