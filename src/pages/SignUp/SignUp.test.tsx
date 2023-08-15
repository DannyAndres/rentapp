import React from 'react';

import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import SignUp from './index';

const customRender = (): RenderResult => {
  return render(<SignUp />);
};

describe('SignUp', () => {
  it('renders without crashing', () => {
    const { container } = customRender();
    expect(container).toBeInTheDocument();
  });
});
