import { Flex, Text } from 'componentry'
import { useEffect, useState } from 'react'
import { Pool, spawn } from 'threads'

import { mainAreaCx } from '@/components/App/layout'
import { Footer, Header } from '@/components/universal'

// eslint-disable-next-line
import workerURL from 'threads-plugin/dist/loader?name=worker!./random-id.js'

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const pool = Pool(() => spawn(new Worker(workerURL)), 4)

export default function WorkersScreen() {
  return (
    <Flex className={mainAreaCx} direction='column'>
      <Header />

      <Flex className='flex-grow' direction='column' px='xl'>
        <Text variant='heading-1' align='center' pt='lg'>
          Web Workers
        </Text>
        <Text variant='heading-3'>Demo</Text>
        <ol>
          {list.map((key) => (
            <WorkerExample key={key} />
          ))}
        </ol>
      </Flex>

      <Footer />
    </Flex>
  )
}

function WorkerExample() {
  const [id, setID] = useState(null)

  useEffect(() => {
    async function start() {
      pool.queue(async (generateRandomID) => {
        const id = await generateRandomID(Date.now())
        console.log('GENERATED ID: ', id)
        setID(id)
      })
    }

    start()
  }, [])

  return id ? <li>GENERATED ID: {id}</li> : <li>Loading...</li>
}
