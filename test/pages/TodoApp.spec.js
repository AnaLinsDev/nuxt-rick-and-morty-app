import { mount } from '@vue/test-utils';
import TodoApp from '../../pages/TodoApp.vue';

describe('TodoApp.vue', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(TodoApp)
  })

  it('creates a todo', async () => {
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(0)
    
    await wrapper.get('[data-test="new-todo"]').setValue('New todo')
    await wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)
  })




  it('completes a todo', async () => {
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(0)
    
    await wrapper.get('[data-test="new-todo"]').setValue('New todo')
    await wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    await wrapper.get('[data-test="todo-checkbox"]').setChecked()

    expect(wrapper.get('[data-test="todo"]').classes()).toContain('done')
  })



  it('render title ', () => {
    expect(wrapper.get('.msg-todo').text()).toContain('TODO APP')
  })

})