import opentelemetry from '@opentelemetry/api' // eslint-disable-line -- Import required to get a tracer in application
import { WebTracerProvider } from '@opentelemetry/web'
import { SimpleSpanProcessor } from '@opentelemetry/tracing'
import { CollectorTraceExporter } from '@opentelemetry/exporter-collector'
import { DocumentLoad } from '@opentelemetry/plugin-document-load'

import { LS_ACCESS_TOKEN } from '@/config/environment'

// Create a provider for activating and tracking spans
const tracerProvider = new WebTracerProvider({
  plugins: [new DocumentLoad()],
})

// Connect to Lightsstep by configuring the exporter with your endpoint and access token.
tracerProvider.addSpanProcessor(
  new SimpleSpanProcessor(
    new CollectorTraceExporter({
      url: 'https://ingest.lightstep.com:443/api/v2/otel/trace',
      headers: {
        'Lightstep-Access-Token': LS_ACCESS_TOKEN,
      },
    }),
  ),
)

// Register the tracer
tracerProvider.register()
