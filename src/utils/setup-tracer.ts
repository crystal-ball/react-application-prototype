import opentelemetry from '@opentelemetry/api' // eslint-disable-line -- Import required to get a tracer in application
import { WebTracerProvider } from '@opentelemetry/web'
import { BatchSpanProcessor } from '@opentelemetry/tracing'
import { CollectorTraceExporter } from '@opentelemetry/exporter-collector'
import { Resource } from '@opentelemetry/resources'
import { ZoneContextManager } from '@opentelemetry/context-zone'
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load'
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch'
import { registerInstrumentations } from '@opentelemetry/instrumentation'

import { LS_ACCESS_TOKEN, NODE_ENV, RELEASE_VERSION } from '@/config/environment'

if (NODE_ENV === 'production') {
  // Create a provider for activating and tracking spans
  const tracerProvider = new WebTracerProvider({
    // Include a service.version attribute in all spans to enable Lightstep deployment markers
    resource: new Resource({
      'service.name': 'react-application-prototype',
      'service.version': RELEASE_VERSION,
    }),
  })

  registerInstrumentations({
    instrumentations: [
      new DocumentLoadInstrumentation(),
      new FetchInstrumentation({
        ignoreUrls: [/localhost:8090\/sockjs-node/],
      }),
    ],
    tracerProvider,
  })

  // Connect to Lightsstep by configuring the exporter with your endpoint and access token.
  tracerProvider.addSpanProcessor(
    new BatchSpanProcessor(
      new CollectorTraceExporter({
        url: 'https://ingest.lightstep.com:443/traces/otlp/v0.6',
        headers: {
          'Lightstep-Access-Token': LS_ACCESS_TOKEN,
        },
      }),
      {
        exportTimeoutMillis: 1000,
      },
    ),
  )

  // Register the tracer
  tracerProvider.register({
    contextManager: new ZoneContextManager(),
  })
}
