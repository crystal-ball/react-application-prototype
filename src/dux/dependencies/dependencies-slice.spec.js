import { updatePathname } from 'dux-routing'
import { dependenciesSlice } from './dependencies-slice'

describe('dependencies-slice', () => {
  it('dependencies slice updates selected id on pathname change', () => {
    expect(
      dependenciesSlice.reducer(
        undefined,
        updatePathname({ pathname: '/application-stack/classnames' }),
      ),
    ).toStrictEqual({
      dependenciesById: {},
      selectedDependencyId: 'classnames',
    })
  })
})
