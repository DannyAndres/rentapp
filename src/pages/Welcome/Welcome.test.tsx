import React from 'react';

import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import Home from './index';

const customRender = (): RenderResult => {
  return render(<Home />);
};

describe('Home', () => {
  it('renders without crashing', () => {
    const { container } = customRender();
    expect(container).toBeInTheDocument();
  });
});
