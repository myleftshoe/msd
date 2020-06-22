const { arrayOf, days, now, hours, weeks, years, today, format, toDate } = require('.')

// --------------------------------------------------

log("arrayOf(days, 7).from(today)", arrayOf(days, 7).from(today))

log("arrayOf('days', 7).from(today)", arrayOf('days', 7).from(today))

log("arrayOf({ days: 7 }).from(today)", arrayOf({ days: 7 }).from(today))


log("arrayOf(days, 7, { weekday: 'long' }).from(today)", arrayOf(days, 7, { weekday: 'long' }).from(today))

log("arrayOf('days', 7, { weekday: 'long' }).from(today)", arrayOf('days', 7, { weekday: 'long' }).from(today))

log("arrayOf({ days: 7 }, { weekday: 'long' }).from(today)", arrayOf({ days: 7 }, { weekday: 'long' }).from(today))


log("arrayOf(days, 7).from(today).map(format({ weekday: 'long' }))", arrayOf(days, 7).from(today).map(format({ weekday: 'long' })))

log("arrayOf('days', 7).from(today).map(format({ weekday: 'long' }))", arrayOf('days', 7).from(today).map(format({ weekday: 'long' })))

log("arrayOf({ days: 7 }).from(today).map(format({ weekday: 'long' }))", arrayOf({ days: 7 }).from(today).map(format({ weekday: 'long' })))


log("arrayOf(years, 7, { year: 'numeric' }).from(today)", arrayOf(years, 7, { year: 'numeric' }).from(today))

log("arrayOf('years', 7, { year: 'numeric' }).from(today)", arrayOf('years', 7, { year: 'numeric' }).from(today))

log("arrayOf({ years: 7 }, { year: 'numeric' }).from(today)", arrayOf({ years: 7 }, { year: 'numeric' }).from(today))


log("arrayOf(years, 7).from(today).map(format({ year: 'numeric' }))", arrayOf(years, 7).from(today).map(format({ year: 'numeric' })))

log("arrayOf('years', 7).from(today).map(format({ year: 'numeric' }))", arrayOf('years', 7).from(today).map(format({ year: 'numeric' })))

log("arrayOf({ years: 7 }).from(today).map(format({ year: 'numeric' }))", arrayOf({ years: 7 }).from(today).map(format({ year: 'numeric' })))


log("arrayOf(days, 7, toDate).from(today)", arrayOf(days, 7, toDate).from(today))

log("arrayOf('days', 7, toDate).from(today)", arrayOf('days', 7, toDate).from(today))

log("arrayOf({ days: 7 }, toDate).from(today)", arrayOf({ days: 7 }, toDate).from(today))


log("arrayOf(days, 7, toDate).from(today).map(toDate)", arrayOf(days, 7, toDate).from(today).map(toDate))

log("arrayOf('days', 7, toDate).from(today).map(toDate)", arrayOf('days', 7, toDate).from(today).map(toDate))

log("arrayOf({ days: 7 }, toDate).from(today).map(toDate)", arrayOf({ days: 7 }, toDate).from(today).map(toDate))

// --------------------------------------------------

log("arrayOf(days).between(today, today + 7 * days)", arrayOf(days).between(today, today + 7 * days))

log("arrayOf('days').between(today, today + 7 * days)", arrayOf('days').between(today, today + 7 * days))

log("arrayOf({ days }).between(today, today + 7 * days)", arrayOf({ days }).between(today, today + 7 * days))


log("arrayOf(days, { weekday: 'long' }).between(today, today + 7 * days)", arrayOf(days, { weekday: 'long' }).between(today, today + 7 * days))

log("arrayOf('days', { weekday: 'long' }).between(today, today + 7 * days)", arrayOf('days', { weekday: 'long' }).between(today, today + 7 * days))

log("arrayOf({ days }, { weekday: 'long' }).between(today, today + 7 * days)", arrayOf({ days }, { weekday: 'long' }).between(today, today + 7 * days))


log("arrayOf(days).between(today, today + 7 * days).map(format({ weekday: 'long' }))", arrayOf(days).between(today, today + 7 * days).map(format({ weekday: 'long' })))

log("arrayOf('days').between(today, today + 7 * days).map(format({ weekday: 'long' }))", arrayOf('days').between(today, today + 7 * days).map(format({ weekday: 'long' })))

log("arrayOf({ days }).between(today, today + 7 * days).map(format({ weekday: 'long' }))", arrayOf({ days }).between(today, today + 7 * days).map(format({ weekday: 'long' })))


log("arrayOf(years, { year: 'numeric' }).between(today, today + 7 * years)", arrayOf(years, { year: 'numeric' }).between(today, today + 7 * years))

log("arrayOf('years', { year: 'numeric' }).between(today, today + 7 * years)", arrayOf('years', { year: 'numeric' }).between(today, today + 7 * years))

log("arrayOf({ years }, { year: 'numeric' }).between(today, today + 7 * years)", arrayOf({ years }, { year: 'numeric' }).between(today, today + 7 * years))


log("arrayOf(years).between(today, today + 7 * years).map(format({ year: 'numeric' }))", arrayOf(years).between(today, today + 7 * years).map(format({ year: 'numeric' })))

log("arrayOf('years').between(today, today + 7 * years).map(format({ year: 'numeric' }))", arrayOf('years').between(today, today + 7 * years).map(format({ year: 'numeric' })))

log("arrayOf({ years }).between(today, today + 7 * years).map(format({ year: 'numeric' }))", arrayOf({ years }).between(today, today + 7 * years).map(format({ year: 'numeric' })))


log("arrayOf(days, toDate).between(today, today + 7 * days)", arrayOf(days, toDate).between(today, today + 7 * days))

log("arrayOf('days', toDate).between(today, today + 7 * days)", arrayOf('days', toDate).between(today, today + 7 * days))

log("arrayOf({ days }, toDate).between(today, today + 7 * days)", arrayOf({ days }, toDate).between(today, today + 7 * days))


log("arrayOf(days, toDate).between(today, today + 7 * days).map(toDate)", arrayOf(days, toDate).between(today, today + 7 * days).map(toDate))

log("arrayOf('days', toDate).between(today, today + 7 * days).map(toDate)", arrayOf('days', toDate).between(today, today + 7 * days).map(toDate))

log("arrayOf({ days }, toDate).between(today, today + 7 * days).map(toDate)", arrayOf({ days }, toDate).between(today, today + 7 * days).map(toDate))

// --------------------------------------------------

log("format(now, { weekday: 'long' })", format(now, { weekday: 'long' }))

log("format(now, toDate)", format(now, toDate))

// --------------------------------------------------

function log(msg, cmd) {
    console.log()
    console.log(msg)
    console.log(cmd)
}