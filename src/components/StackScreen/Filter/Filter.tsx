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
    <Flex justify='flex-end' mt='md' align='center'>
      <Tooltip>
        <Tooltip.Trigger>
          <Icon id='information' />
        </Tooltip.Trigger>
        <Tooltip.Content>
          {detailsList.map(({ id, description, label }) => (
            <div key={id}>
              {label}: {description}
            </div>
          ))}
        </Tooltip.Content>
      </Tooltip>
      <Text variant='subtitle-1' mr='sm'>
        Filter:
      </Text>
      {detailsList.map(({ id, label }) => (
        <Link
          key={id}
          to={createURI(routeDetails.stack.path, {})}
          searchParams={{ filter: id }}
          mr='md'
        >
          {label}
        </Link>
      ))}
    </Flex>
  )
}
