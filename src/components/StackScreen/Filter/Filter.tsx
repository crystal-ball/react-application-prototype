import { Flex, Icon, Text, Tooltip } from 'componentry'
import { createURI } from 'dux-routing'

import { Link } from '@/components/universal'
import { routeDetails } from '@/config/routing'
import { DependenciesFilter } from '@/entities/dependencies-filter'

// Example of creating details for filters
const dependenciesFiltersDetails: Record<
  DependenciesFilter,
  { description: string; id: DependenciesFilter; label: string }
> = {
  all: {
    description: 'App dependencies and devDependencies',
    id: 'all',
    label: 'ALL',
  },
  dependencies: {
    description: 'App production dependencies',
    id: 'dependencies',
    label: 'PROD',
  },
  devDependencies: {
    description: 'App development dependencies',
    id: 'devDependencies',
    label: 'DEV',
  },
}

export function Filter(): JSX.Element {
  const detailsList = Object.values(dependenciesFiltersDetails)

  return (
    <Flex justify='end' mt={4} align='center'>
      <Tooltip>
        <Tooltip.Action>
          <Icon id='information' />
        </Tooltip.Action>
        <Tooltip.Content>
          {detailsList.map(({ id, description, label }) => (
            <div key={id}>
              {label}: {description}
            </div>
          ))}
        </Tooltip.Content>
      </Tooltip>
      <Text variant='subtitle-1' mr={2}>
        Filter:
      </Text>
      {detailsList.map(({ id, label }) => (
        <Link
          key={id}
          to={createURI(routeDetails.stack.path, {})}
          searchParams={{ filter: id }}
          mr={4}
        >
          {label}
        </Link>
      ))}
    </Flex>
  )
}
