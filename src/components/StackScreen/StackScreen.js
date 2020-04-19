import { css } from '@emotion/core'
import { Block, Button, Flex, Icon, Input, List, Typography } from 'componentry'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Header, Link } from '@/components/universal'
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

/**
 * @typedef {Object} Dependency
 * @property {string} id
 * @property {string} name
 * @property {string} version
 */

/** @type {Dependency[]} */
const dependencies = JSON.parse(APPLICATION_DEPENDENCIES)

const integrationContainerStyles = css`
  display: flex;
  align-items: center;
  width: 75px;
  height: 75px;
  margin: 0 10px;
  color: #fff;

  svg {
    fill: currentColor;
  }
`

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
    <Flex direction='column' className='flex-grow-1'>
      <Header />

      <Flex direction='column' px='xl' py='md'>
        <Typography variant='heading-1' textAlign='center' mb='xl'>
          Application stack
        </Typography>
        <Typography italic>Application dependencies</Typography>
        <Flex>
          <Flex direction='column'>
            <Block>
              <Input>
                <Input.Field
                  value={searchValue}
                  onChange={(evt) => {
                    setSearchValue(evt.target.value)
                  }}
                />
              </Input>
              <Button
                onClick={() => {
                  dispatch(updatePackageSearchFilter(searchValue))
                }}
              >
                Search
              </Button>
            </Block>
            <List>
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
        </Flex>

        <Typography variant='heading-2'>
          <Icon id='education' /> Integrations
        </Typography>
        <Typography italic>Workflows supported by 3rd party integrations</Typography>
        <Flex justify='center'>
          <div css={integrationContainerStyles}>
            <Renovate />
          </div>
          <div css={integrationContainerStyles}>
            <CodeClimate />
          </div>
          <div css={integrationContainerStyles}>
            <Github />
          </div>
          <div css={integrationContainerStyles}>
            <Cypress />
          </div>
          <div css={integrationContainerStyles}>
            <Zeit />
          </div>
        </Flex>
      </Flex>
    </Flex>
  )
}
StackScreen.displayName = 'StackScreen'

StackScreen.propTypes = {}
