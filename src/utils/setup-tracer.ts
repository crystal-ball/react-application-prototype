import opentelemetry from '@opentelemetry/api' // eslint-disable-line -- Import required to get a tracer in application
import { WebTracerProvider } from '@opentelemetry/web'
import { BatchSpanProcessor } from '@opentelemetry/tracing'
import { CollectorTraceExporter } from '@opentelemetry/exporter-collector'
import { DocumentLoad } from '@opentelemetry/plugin-document-load'

import { LS_ACCESS_TOKEN, NODE_ENV } from '@/config/environment'

if (NODE_ENV === 'production') {
  // Create a provider for activating and tracking spans
  const tracerProvider = new WebTracerProvider({
    plugins: [new DocumentLoad()],
  })

  // Connect to Lightsstep by configuring the exporter with your endpoint and access token.
  tracerProvider.addSpanProcessor(
    new BatchSpanProcessor(
      new CollectorTraceExporter({
        serviceName: 'react-application-prototype',
        url: 'https://ingest.lightstep.com:443/api/v2/otel/trace',
        headers: {
          'Lightstep-Access-Token': LS_ACCESS_TOKEN,
        },
      }),
      {
        bufferTimeout: 1000,
      },
    ),
  )

  // Register the tracer
  tracerProvider.register()
}
