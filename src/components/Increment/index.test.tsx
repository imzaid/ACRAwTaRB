/**
 * @jest-environment node
 */

import * as React from 'react';
import { shallow } from 'enzyme';
import Increment from './index';

it('renders without crashing', () => {
  shallow(<Increment count={0} increment={() => null} />);
});
