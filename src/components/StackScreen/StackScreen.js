import { css } from '@emotion/core'
import { Block, Flex, Heading, Icon, Input, ListGroup, Text, Button } from 'componentry'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Header, Link } from '@/components/universal'
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

const dependencies = process.env.APPLICATION_DEPENDENCIES

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
  const matchedDependencies = dependencies.filter(dependency =>
    dependency.name.includes(packageSearchFilter),
  )

  return (
    <Flex direction='column' className='flex-grow-1'>
      <Header />

      <Flex direction='column' px='xl' py='base'>
        <Heading textAlign='center' mb='xl'>
          Application stack
        </Heading>
        <Text italic>Application dependencies</Text>
        <Flex>
          <Flex direction='column'>
            <Block>
              <Input>
                <Input.Field
                  value={searchValue}
                  onChange={evt => {
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
            <ListGroup>
              {matchedDependencies.map(pkg => (
                <ListGroup.Item
                  key={pkg.id}
                  as={Link}
                  active={pkg.id === selectedPackage?.id}
                  to={`/application-stack/${encodeURIComponent(pkg.id)}${
                    packageSearchFilter ? `?search=${packageSearchFilter}` : ''
                  }`}
                >
                  {pkg.name}@{pkg.version}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Flex>
          <Flex>
            {selectedPackage && (
              <>
                <Heading>Package selected</Heading>
                <Text>Yay</Text>
              </>
            )}
          </Flex>
        </Flex>

        <Heading>
          <Icon id='education' /> Integrations
        </Heading>
        <Text italic>Workflows supported by 3rd party integrations</Text>
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
StackScreen.displayName = StackScreen

StackScreen.propTypes = {}
