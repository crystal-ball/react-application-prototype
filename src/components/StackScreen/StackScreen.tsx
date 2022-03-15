import { css } from '@linaria/core'
import { trace } from '@opentelemetry/api'
import { Block, Flex, Icon, Input, List, Text } from 'componentry'
import { getSearchParams } from 'dux-routing'
import numeral from 'numeral'
import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { fetchDependencySize } from '@/api/dependencies'
import { mainAreaCx } from '@/components/App/layout'
import { Footer, Header, Link } from '@/components/universal'
import { selectDependenciesById, selectSelectedDependencyId } from '@/dux/dependencies'
import { DependenciesFilter } from '@/entities/dependencies-filter'
import { Dependency } from '@/entities/dependency'
import Bundlephobia from '@/media/bundlephobia.svg'
import CodeClimate from '@/media/code-climate.svg'
import Cypress from '@/media/cypress.svg'
import Github from '@/media/github.svg'
import Renovate from '@/media/renovate.svg'
import Zeit from '@/media/zeit.svg'

import { Filter } from './Filter/Filter'

const integrations = [
  { id: 'codeclimate', Logo: CodeClimate },
  { id: 'cypress', Logo: Cypress },
  { id: 'github', Logo: Github },
  { id: 'renovate', Logo: Renovate },
  { id: 'zeit', Logo: Zeit },
]

const iconCx = css`
  fill: theme('colors.gray.50');
  width: 75px;
  height: 75px;
`

const bundlephobiaCx = css`
  width: 50px;
  height: 61px;
`

export default function StackScreen(): JSX.Element {
  const dependencies = useSelector(selectDependenciesById)
  const selectedDependencyId = useSelector(selectSelectedDependencyId)
  const searchParams: { filter?: DependenciesFilter } = useSelector(getSearchParams)

  const [searchValue, setSearchValue] = useState('')
  const [dependencySize, setDependencySize] = useState<null | number>(null)

  const filteredDependencies: Dependency[] = useMemo(() => {
    if (!searchParams.filter || searchParams.filter === 'all') {
      return Object.values(dependencies)
    }

    return Object.values(dependencies).filter(
      (dependency) => dependency.type === searchParams.filter,
    )
  }, [dependencies, searchParams.filter])

  // --------------------------------------------------------
  // Effects

  useEffect(() => {
    const getDependencyDetails = async (selectedDependencyId: string) => {
      setDependencySize(await fetchDependencySize(selectedDependencyId))
    }

    if (selectedDependencyId) {
      getDependencyDetails(selectedDependencyId)
    }
  }, [selectedDependencyId])

  useEffect(() => {
    // Testing creating a span with attributes
    const span = trace.getTracer('default').startSpan('stack-screen')
    span.setAttribute('string_id', '123456781234567890')
    span.setAttribute('number_id', 123456781234567890)
    span.end()
  }, [])

  const matchedDependencies: Dependency[] = useMemo(() => {
    return filteredDependencies.filter((pkg) => pkg.name.includes(searchValue))
  }, [filteredDependencies, searchValue])

  // --------------------------------------------------------
  // Render

  return (
    <Flex className={mainAreaCx} direction='column'>
      <Header />

      <Flex className='flex-grow' direction='column' px='xl'>
        <Text variant='heading-1' align='center' pt='lg'>
          Application stack
        </Text>

        <Text variant='heading-3'>Application dependencies</Text>

        <Filter />

        <Flex width='90%' mt='sm'>
          <Input>
            <Input.Field
              value={searchValue}
              onChange={(evt) => {
                setSearchValue(evt.target.value)
              }}
            />
          </Input>
        </Flex>

        <Flex mt='md'>
          <List width='50%'>
            {matchedDependencies.map((pkg) => (
              <List.Item
                key={pkg.name}
                as={Link}
                active={pkg.name === selectedDependencyId}
                to={`/application-stack/${encodeURIComponent(pkg.name)}${
                  searchValue ? `?search=${searchValue}` : ''
                }`}
              >
                {pkg.name}@{pkg.version}
              </List.Item>
            ))}
          </List>

          <Flex width='50%' pl='md'>
            <div>
              <Flex className='sticky-top'>
                <Block pr='sm'>
                  <Text variant='heading-3'>
                    GZIP size: {numeral(dependencySize).format('0.0 b')}
                  </Text>
                  <Text italic>Sizes provided by Bundlephobia</Text>
                </Block>
                <Bundlephobia className={bundlephobiaCx} />
              </Flex>
            </div>
          </Flex>
        </Flex>

        <Text variant='heading-2' mt='xl'>
          <Icon id='education' /> Integrations
        </Text>
        <Text italic>Workflows supported by 3rd party integrations</Text>

        <Flex justify='center'>
          {integrations.map(({ Logo, id }) => (
            <Flex key={id} align='center' mx='md'>
              <Logo className={iconCx} />
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  )
}
