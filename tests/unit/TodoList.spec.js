import { shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList'

const stub = jest.fn()
const task = { title: 'test', id: 42 }
const task2 = { title: 'test2', id: 43 }

describe('TodoList', () => {
  const wrapper = shallowMount(TodoList)
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

describe('Methods', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(TodoList)
  })
  it('createTask is worked correct', () => {
    wrapper.vm.createTask(task)
    expect(wrapper.vm.listItems).toEqual([task])
  })
  it('editTask is worked correct', () => {
    wrapper.vm.listItems = [task]
    wrapper.vm.editTask({ title: 'testy', id: 42 })
    expect(wrapper.vm.listItems).toEqual([{ title: 'testy', id: 42 }])
  })
  it('deleteTask is worked correct', () => {
    wrapper.vm.listItems = [task, task2]
    wrapper.vm.deleteTask(task2)
    expect(wrapper.vm.listItems).toEqual([task])
  })
})
