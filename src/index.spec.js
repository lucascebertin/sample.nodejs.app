import index from './index'

describe('Index test', () => {
  it('Should just works when invoked', async () => {
    const result = await index()
    expect(result).toBe('hello world')
  })
})