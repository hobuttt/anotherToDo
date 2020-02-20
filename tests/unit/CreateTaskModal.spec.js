import { shallowMount } from '@vue/test-utils'
import CreateTaskModal from '@/components/CreateTaskModal'

const stub = jest.fn()
const task = { title: 'test', id: 42, done: false }

describe('TodoList', () => {
  const wrapper = shallowMount(CreateTaskModal)
  wrapper.vm.showModal = true

  it('should render', () => {
    expect(wrapper.is(CreateTaskModal)).toBe(true)
  })
  it('TodoList is not empty', () => {
    expect(wrapper.find(CreateTaskModal).isEmpty()).toBe(false)
  })
  it('Should be render correct', () => {
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
describe('Methods', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(CreateTaskModal)
  })

  it('openModal is worked', () => {
    wrapper.vm.openModal(true)
    expect(wrapper.vm.showModal).toEqual(true)
  })
  it('openEditModal is worked', () => {
    wrapper.vm.openEditModal(task)
    expect(wrapper.vm.showModal).toEqual(true)
    expect(wrapper.vm.task).toEqual(task)
    expect(wrapper.vm.isEdit).toEqual(true)
  })
  it('addTask is worked as edit', () => {
    wrapper.vm.isEdit = true
    wrapper.vm.showModal = true
    wrapper.vm.addTask()
    expect(wrapper.vm.showModal).toEqual(false)
    expect(wrapper.vm.isEdit).toEqual(false)
  })
  it('addTask is worked as create', () => {
    wrapper.vm.isEdit = false
    wrapper.vm.showModal = true
    wrapper.vm.task = task
    wrapper.vm.addTask()
    expect(wrapper.vm.task).toEqual({})
    expect(wrapper.vm.showModal).toEqual(false)
  })
})
