export const findByTestAtrr = (component, args) => {
    const wrapper = component.find(`data-test=${args}`)
    return wrapper
}