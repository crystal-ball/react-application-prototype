import { Flex, Icon, Text } from 'componentry'

import { mainAreaCx } from '@/components/App/layout'
import { Footer, Header } from '@/components/universal'

/** HomeScreen */
export default function HomeScreen(): JSX.Element {
  return (
    <Flex className={mainAreaCx} direction='column'>
      <Header />

      <Flex className='flex-grow' direction='column' px='xl'>
        <Text variant='heading-1' align='center' mt='lg'>
          Prototype application
          <br /> for
          <span className='d-inline-block px-xs' aria-label='crystal ball' role='img'>
            🔮
          </span>
          projects
        </Text>

        <div className='mx-xl mt-xl'>
          <Text variant='heading-3'>
            <Icon id='coffee' /> Application feature set
          </Text>
          <ul className='list-disc list-inside mt-md'>
            <li>
              Automatic deployments with Vercel{' '}
              <span aria-label='mind-blown' role='img'>
                🚀
              </span>
            </li>
            <li>
              All the notifications in Slack{' '}
              <span aria-label='yay' role='img'>
                📣
              </span>
            </li>
            <li>
              Visual regression testing with Percy{' '}
              <span aria-label='hedgehog' role='img'>
                🦔
              </span>
            </li>
            <li>
              Application observability with OpenTelemetry and Lightstep{' '}
              <span aria-label='telescope' role='img'>
                🔭
              </span>
            </li>
            <li>JS compilation with Babel+webpack</li>
            <li>Sourcemaps for dev and prod workflows</li>
            <li>
              Automatic script injection with <code>html-webpack-plugin</code>
            </li>
            <li>
              Friendly webpack errors with <code>friendly-errors-webpack-plugin</code>
            </li>
            <li>Dev server with hot reloading</li>
            <li>Progress indicators</li>
            <li>Production optimizations including uglify and module concatenation</li>
            <li>Output directory cleaning</li>
            <li>
              Injected <code>PUBLIC_PATH</code> for routing
            </li>
          </ul>
        </div>
      </Flex>

      <Footer />
    </Flex>
  )
}
