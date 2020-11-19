import { updatePathname } from 'dux-routing'
import { packagesSlice } from './packages-slice'

describe('packages-slice', () => {
  test('package slice updates selected id on pathname change', () => {
    expect(
      packagesSlice.reducer(
        undefined,
        updatePathname({ pathname: '/application-stack/classnames' }),
      ),
    ).toEqual({
      packagesById: {},
      selectedPackageId: 'classnames',
    })
  })
})
