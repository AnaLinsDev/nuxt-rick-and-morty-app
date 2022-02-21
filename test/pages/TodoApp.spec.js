import { mount } from '@vue/test-utils';
import TodoApp from '../../pages/TodoApp.vue';

describe('TodoApp.vue', () => {
  test('renders a todo', () => {
    // cria instancia do TodoApp
    const wrapper = mount(TodoApp)
    // pega a tag que tem data-test="todo"
    const todo = wrapper.get('[data-test="todo"]')
    // espera-se que o texto printado seja 'Learn Vue.js 3'
    expect(todo.text()).toBe('Learn Vue.js 3')
  })



  test('creates a todo', async () => {
    // cria instancia do TodoApp
    const wrapper = mount(TodoApp)
    //espera-se que a qtd de data-test="todo" seja 1
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    // o async-await é necessário, pois o jest não iria esperar 
    // a atualização do v-model, e iria gerar um erro de qtd 1 x 2

    //pegará a tag com data-test="new-todo" e adicionará o value 'New todo'
    await wrapper.get('[data-test="new-todo"]').setValue('New todo')
    // mandará o form que tem a tag data-test="form"
    await wrapper.get('[data-test="form"]').trigger('submit')
    // agora, que novo todo foi criado, esperasse que a qtd seja 2
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
  })




  test('completes a todo', async () => {
    // cria instancia do TodoApp
    const wrapper = mount(TodoApp)
    // pegará a tag com data-test="todo-checkbox" e dará check true
    await wrapper.get('[data-test="todo-checkbox"]').setChecked()
    // espera-se que a tag com data-test="todo" tenha a class = 'completed'
    expect(wrapper.get('[data-test="todo"]').classes()).toContain('done')
  })



  test('completes a todo', () => {
    // cria instancia do TodoApp
    const wrapper = mount(TodoApp)
    // espera-se que a mensagem com class msg-todo seja 'TODO APP'
    expect(wrapper.get('.msg-todo').text()).toContain('TODO APP')
  })


})