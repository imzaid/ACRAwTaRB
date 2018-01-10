/**
 * @jest-environment node
 */

import * as React from 'react';
import { shallow } from 'enzyme';
import App from 'src/routes/App';

it('renders without crashing', () => {
  shallow(<App />);
});
