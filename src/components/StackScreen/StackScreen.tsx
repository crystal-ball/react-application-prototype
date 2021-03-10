import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import numeral from 'numeral'
import { Block, Flex, Icon, Input, List, Text, Typography } from 'componentry'
import { getSearchParams } from 'dux-routing'

import { fetchDependencySize } from '@/api/dependencies'
import { Footer, Header, Link } from '@/components/universal'
import { selectDependenciesById, selectSelectedDependencyId } from '@/dux/dependencies'
import { Dependency } from '@/entities/dependency'
import { DependenciesFilter } from '@/entities/dependencies-filter'
import Bundlephobia from '@/media/bundlephobia.svg'
import CodeClimate from '@/media/code-climate.svg'
import Cypress from '@/media/cypress.svg'
import Github from '@/media/github.svg'
import Renovate from '@/media/renovate.svg'
import Zeit from '@/media/zeit.svg'
import layoutClasses from '@/components/App/layouts.css'

import { Filter } from './Filter/Filter'
import classes from './stack-screen.css'

const integrations = [
  { id: 'codeclimate', Logo: CodeClimate },
  { id: 'cypress', Logo: Cypress },
  { id: 'github', Logo: Github },
  { id: 'renovate', Logo: Renovate },
  { id: 'zeit', Logo: Zeit },
]

export default function StackScreen(): JSX.Element {
  const dependencies = useSelector(selectDependenciesById)
  const selectedDependencyId = useSelector(selectSelectedDependencyId)
  const searchParams: { filter?: DependenciesFilter } = useSelector(getSearchParams)

  const [searchValue, setSearchValue] = useState('')
  const [dependencySize, setDependencySize] = useState<number>(null)

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

  const matchedDependencies: Dependency[] = useMemo(() => {
    return filteredDependencies.filter((pkg) => pkg.name.includes(searchValue))
  }, [filteredDependencies, searchValue])

  // --------------------------------------------------------
  // Render

  return (
    <Flex className={layoutClasses.main} direction='column'>
      <Header />

      <Flex className='flex-grow' direction='column' px='xl'>
        <Typography variant='heading-1' textAlign='center' pt='lg'>
          Application stack
        </Typography>

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
                <Bundlephobia className={classes.bundlephobia} />
              </Flex>
            </div>
          </Flex>
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
