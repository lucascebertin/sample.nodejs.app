const data = 'hello world'
import debug from 'debug'

const log = debug('sample:log')

//eslint-disable-next-line no-console
log.log = console.log.bind(console)

log(data)

/**
 * 
 * It returns test + 10.
 * 
 * @example fn()
 * 
 * @returns {string} Informação sobre data.
**/
const fn = () => data

export default async () => fn()