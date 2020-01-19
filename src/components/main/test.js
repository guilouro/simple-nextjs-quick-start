import React from 'react'
import Main from '.'
import { render } from '@testing-library/react'

describe('Main', () => {
  it('Should render correctly', () => {
    const { container } = render(<Main />)
    expect(container).toMatchSnapshot()
  })
})
