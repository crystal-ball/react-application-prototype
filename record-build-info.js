const { metrics } = require('@opentelemetry/api-metrics')
const {
  MeterProvider,
  ConsoleMetricExporter,
  PeriodicExportingMetricReader,
} = require('@opentelemetry/sdk-metrics-base')
const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-http')

// To create an instrument, you first need to initialize the Meter provider.
// NOTE: The default OpenTelemetry meter provider does not record any metric instruments.
//       Registering a working meter provider allows the API methods to record instruments.
const meterProvider = new MeterProvider()

// const exporter = new ConsoleMetricExporter()

const exporter = new OTLPMetricExporter({
  url: 'ingest.lightstep.com/metrics/otlp/v0.6',
  headers: {
    'Lightstep-Access-Token':
      '7SyrqImzQoU5GsJaRyDanbUwloR4NL/QUvhkaYsMsYbwaywuQk+sWEFxbV2ULi48O8TGFJr0wx1gRR1EWNU2RqN0JFcx88Iu6YJgFvak',
  },
})

const reader = new PeriodicExportingMetricReader({ exporter })
meterProvider.addMetricReader(reader) // exporter

const meter = meterProvider.getMeter('application-prototype')

// To record a metric event, we used the global singleton meter to create an instrument.
const buildSizeCounter = meter.createCounter('build-size')

function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2500)
  })
}

async function record() {
  console.log('RECORD')
  // record a metric event.

  buildSizeCounter.add(Math.random() * 10000, { attributeKey: 'attribute-value' })

  await exporter.forceFlush()
  await reader.forceFlush()
  await meterProvider.forceFlush()

  await exporter.shutdown
  await reader.shutdown()
  await meterProvider.shutdown()

  await wait()
  console.log('DONE')
}

record()
