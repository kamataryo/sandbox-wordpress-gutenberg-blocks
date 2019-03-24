import { shallow, mount } from 'enzyme'
import { edit as Edit, save as Save } from './components'

describe('test for Edit component', () => {
  const attributes = { text: '' }

  test('render input', () => {
    const wrapper = shallow(<Edit attributes={attributes} />)
    expect(wrapper.find('input').length).toBe(1)
  })

  test('onChange callback', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(
      <Edit attributes={attributes} setAttributes={mockFn} />
    )
    wrapper
      .find('input')
      .simulate('change', { target: { value: 'next value' } })

    expect(mockFn).toHaveBeenCalledWith({ text: 'next value' })
  })

  test('match snapshot', () => {
    const dom = mount(<Edit attributes={attributes} />).html()
    expect(dom).toMatchSnapshot()
  })
})

describe('test for Save component', () => {
  const attributes = { text: 'abc' }

  test('render text', () => {
    const wrapper = shallow(<Save attributes={attributes} />)
    expect(wrapper.find('.my-text').text()).toEqual('saved: abc')
  })

  test('match snapshot', () => {
    const dom = mount(<Save attributes={attributes} />).html()
    expect(dom).toMatchSnapshot()
  })
})
