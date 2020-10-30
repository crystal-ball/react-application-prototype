import { FC, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Flex, Icon, Input, List, Text, Typography } from 'componentry'

import { Footer, Header, Link } from '@/components/universal'
import { selectPackagesById, selectSelectedPackageId } from '@/dux/packages'
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

const StackScreen: FC = () => {
  const packages = useSelector(selectPackagesById)
  const selectedPackageId = useSelector(selectSelectedPackageId)

  const [searchValue, setSearchValue] = useState('')

  // --------------------------------------------------------
  // Effects

  const matchedDependencies = useMemo(() => {
    return Object.values(packages).filter((pkg) => pkg.name.includes(searchValue))
  }, [packages, searchValue])

  // --------------------------------------------------------
  // Render

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
          </Flex>

          <List mt='md' width='50%'>
            {matchedDependencies.map((pkg) => (
              <List.Item
                key={pkg.name}
                as={Link}
                active={pkg.name === selectedPackageId}
                to={`/application-stack/${encodeURIComponent(pkg.name)}${
                  searchValue ? `?search=${searchValue}` : ''
                }`}
              >
                {pkg.name}@{pkg.version}
              </List.Item>
            ))}
          </List>
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

export default StackScreen
