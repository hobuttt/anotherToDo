import { shallowMount } from '@vue/test-utils'
import ShowTaskModal from '@/components/ShowTaskModal'

const stub = jest.fn()
const task = { title: 'test', id: 42, done: false }

describe('TodoList', () => {
  const wrapper = shallowMount(ShowTaskModal)
  wrapper.vm.showModal = true
  wrapper.vm.task = task

  it('should render', () => {
    expect(wrapper.is(ShowTaskModal)).toBe(true)
  })
  it('TodoList is not empty', () => {
    expect(wrapper.find(ShowTaskModal).isEmpty()).toBe(false)
  })
  it('Should be render correct', () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
describe('Methods', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(ShowTaskModal)
    wrapper.vm.task = task
  })

  it('openModal is worked', () => {
    wrapper.vm.openModal(task)
    expect(wrapper.vm.showModal).toEqual(true)
  })

  it('checkTask is worked', () => {
    wrapper.vm.showModal = true
    wrapper.vm.checkTask()
    expect(wrapper.vm.task.done).toEqual(true)
  })
})
describe('Buttons', () => {
  const wrapper = shallowMount(ShowTaskModal)
  wrapper.vm.showModal = true
  wrapper.vm.task = task
  const doneTaskBtn = wrapper.find('.done-task-btn')
  const closeShowTaskBtn = wrapper.find('.close-show-task-btn')

  it('openModal is worked', () => {
    wrapper.setMethods({ checkTask: stub })
    doneTaskBtn.trigger('click')
    expect(stub).toBeCalled()
  })
  it('openModal is worked', () => {
    closeShowTaskBtn.trigger('click')
    expect(wrapper.vm.showModal).toEqual(false)
  })
})
