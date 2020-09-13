import { Button, Flex, Icon, Input, List, Text, Typography } from 'componentry'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Footer, Header, Link } from '@/components/universal'
import { APPLICATION_DEPENDENCIES } from '@/config/environment'
import {
  getPackage,
  getPackageSearchFilter,
  getSelectedPackageId,
  updatePackageSearchFilter,
} from '@/dux/packages'
import CodeClimate from '@/media/code-climate.svg'
import Cypress from '@/media/cypress.svg'
import Github from '@/media/github.svg'
import Renovate from '@/media/renovate.svg'
import Zeit from '@/media/zeit.svg'

import layoutClasses from '@/components/App/layouts.scss'
import classes from './stack-screen.scss'

const integrations = [
  { id: 'codeclimate', Logo: CodeClimate },
  { id: 'cypress', Logo: Cypress },
  { id: 'github', Logo: Github },
  { id: 'renovate', Logo: Renovate },
  { id: 'zeit', Logo: Zeit },
]

/**
 * @typedef {Object} Dependency
 * @property {string} id
 * @property {string} name
 * @property {string} version
 */

/** @type {Dependency[]} */
const dependencies = JSON.parse(APPLICATION_DEPENDENCIES)

export default function StackScreen() {
  const dispatch = useDispatch()

  const packageSearchFilter = useSelector(getPackageSearchFilter)
  const selectedPackageId = useSelector(getSelectedPackageId)
  const selectedPackage = useSelector(getPackage(selectedPackageId))

  const [searchValue, setSearchValue] = useState(packageSearchFilter)

  // ℹ️ Possible example for memoization?
  const matchedDependencies = dependencies.filter((dependency) =>
    dependency.name.includes(packageSearchFilter),
  )

  return (
    <Flex className={layoutClasses.mainSection} direction='column'>
      <Header />

      <Flex className='flex-grow-1' direction='column' px='xl'>
        <Typography variant='heading-1' textAlign='center' pt='lg'>
          Application stack
        </Typography>

        <Text variant='heading-3'>Application dependencies</Text>

        <Flex direction='column'>
          <Flex>
            <div className='flex-grow-1'>
              <Input>
                <Input.Field
                  value={searchValue}
                  onChange={(evt) => {
                    setSearchValue(evt.target.value)
                  }}
                />
              </Input>
            </div>
            <Button
              ml='md'
              onClick={() => {
                dispatch(updatePackageSearchFilter(searchValue))
              }}
            >
              Search
            </Button>
          </Flex>

          <List mt='md' width='50%'>
            {matchedDependencies.map((pkg) => (
              <List.Item
                key={pkg.id}
                as={Link}
                active={pkg.id === selectedPackage?.id}
                to={`/application-stack/${encodeURIComponent(pkg.id)}${
                  packageSearchFilter ? `?search=${packageSearchFilter}` : ''
                }`}
              >
                {pkg.name}@{pkg.version}
              </List.Item>
            ))}
          </List>
        </Flex>
        <Flex>
          {selectedPackage && (
            <>
              <Typography variant='heading-2'>Package selected</Typography>
              <Typography>Yay</Typography>
            </>
          )}
        </Flex>

        <Typography variant='heading-2' mt='xl'>
          <Icon id='education' /> Integrations
        </Typography>
        <Typography italic>Workflows supported by 3rd party integrations</Typography>

        <Flex justify='center'>
          {integrations.map(({ Logo, id }) => (
            <Flex key={id} align='center' mx='md'>
              <Logo className={classes.icon} />
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  )
}

StackScreen.propTypes = {}
