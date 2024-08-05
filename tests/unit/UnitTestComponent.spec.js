import { mount } from '@vue/test-utils'
import UnitTestComponent from '@/components/UnitTestComponent.vue'

describe('UnitTestComponent.vue', () => {
  it('renders the initial count', () => {
    const wrapper = mount(UnitTestComponent)
    expect(wrapper.text()).toContain('0')
  })

  it('increments the count when button is clicked', async () => {
    const wrapper = mount(UnitTestComponent)
    const button = wrapper.find('button')

    await button.trigger('click')

    expect(wrapper.text()).toContain('1')
  })
})
