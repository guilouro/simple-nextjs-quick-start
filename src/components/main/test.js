import React from 'react'
import Main from '.'
import { render } from 'react-testing-library'

describe('Main', () => {
  it('Should render correctly', () => {
    const { container } = render(<Main />)
    expect(container).toMatchSnapshot()
  })
})
