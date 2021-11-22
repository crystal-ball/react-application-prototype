import { ZoneContextManager } from '@opentelemetry/context-zone'
import { CollectorTraceExporter } from '@opentelemetry/exporter-collector'
import { registerInstrumentations } from '@opentelemetry/instrumentation'
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load'
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch'
import { Resource } from '@opentelemetry/resources'
import {
  BatchSpanProcessor,
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-base'
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web'

import { LS_ACCESS_TOKEN, NODE_ENV, RELEASE_VERSION } from '@/config/environment'

// --- PROVDER

// Create the provider for activating and tracking spans
const tracerProvider = new WebTracerProvider({
  // Include a service.version attribute in all spans to enable Lightstep deployment markers
  resource: new Resource({
    'service.name': 'react-application-prototype',
    'service.version': RELEASE_VERSION ?? 'local',
  }),
})

// --- PROCESSOR/EXPORTER

if (NODE_ENV === 'production') {
  // Connect to Lightstep by configuring the exporter with your endpoint and access token.
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
} else {
  // Use console exporter in dev
  tracerProvider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()))
}

// --- INSTRUMENTATION

registerInstrumentations({
  instrumentations: [
    new DocumentLoadInstrumentation(),
    new FetchInstrumentation({
      ignoreUrls: [/localhost:8090\/sockjs-node/],
    }),
  ],
  tracerProvider,
})

// --- REGISTER

// Register with config for zone and propagators
tracerProvider.register({
  contextManager: new ZoneContextManager(),
  // propagator
})
