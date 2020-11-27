import { updatePathname } from 'dux-routing'
import { dependenciesSlice } from './dependencies-slice'

describe('dependencies-slice', () => {
  test('dependencies slice updates selected id on pathname change', () => {
    expect(
      dependenciesSlice.reducer(
        undefined,
        updatePathname({ pathname: '/application-stack/classnames' }),
      ),
    ).toEqual({
      dependenciesById: {},
      selectedDependencyId: 'classnames',
    })
  })
})
