import { render } from '@testing-library/react';

import ButtonForm from './button-form';

describe('ButtonForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonForm />);
    expect(baseElement).toBeTruthy();
  });
});
