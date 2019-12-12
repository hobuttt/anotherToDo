import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList'

const stub = jest.fn()

describe('TodoList', () => {
  let wrapper = shallowMount(TodoList)
  it('should render', () => {
    expect(wrapper.is(TodoList)).toBe(true)
  })
  it('TodoList is not empty', () => {
    expect(wrapper.find(TodoList).isEmpty()).toBe(false)
  })
  it('Should be render correct', () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
