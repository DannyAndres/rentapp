import React from 'react';

import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import LogIn from './index';

const customRender = (): RenderResult => {
  return render(<LogIn />);
};

describe('LogIn', () => {
  it('renders without crashing', () => {
    const { container } = customRender();
    expect(container).toBeInTheDocument();
  });
});
