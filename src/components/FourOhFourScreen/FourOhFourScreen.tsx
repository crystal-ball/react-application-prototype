import { Block, Flex, Icon, Text } from 'componentry'

import { Link } from '@/components/universal'

export default function FourOhFourScreen(): JSX.Element {
  return (
    <div className='flex-grow'>
      <Text variant='h2' mt={12} textAlign='center'>
        <Icon variant='feather' fontColor='warning' id='mood-sad-outline' /> The page you
        are looking for can't be found 😣
      </Text>
      <Flex className='mt-12' justify='center'>
        <Block className='mx-4'>
          <Link to='/'>Introduction</Link>
        </Block>
        <Block className='mx-4'>
          <Link to='/application-stack'>Application Stack</Link>
        </Block>
      </Flex>
    </div>
  )
}
