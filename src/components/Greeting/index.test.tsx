/**
 * @jest-environment node
 */

import * as React from 'react';
import { shallow } from 'enzyme';
import Greeting from './index';

it('renders without crashing', () => {
  shallow(<Greeting greeting={`asdf`} updateGreeting={() => null} />);
});
