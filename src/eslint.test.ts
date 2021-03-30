import config from './eslint'

it('matches the snapshot', () => {
  expect(config).toMatchSnapshot()
})
