const { now, today } = require('./getters.js')

const s = 1000
const m = s * 60
const h = m * 60
const d = h * 24
const w = d * 7
const y = d * 365.25

let locale

function setLocale(string) {
    locale = string
    return locale
}

const toDate = ms => new Date(ms)
const fromDate = date => date.getTime()

function _format(ms, f) {
    switch (typeof f) {
        case 'object': return new Intl.DateTimeFormat(locale, { ...f }).format(ms)
        case 'function': return f(ms)
        default: return ms
    }
}
_format.proxyHandler = {
    apply: (target, self, args) => {
        if (args.length === 1) return ms => _format(ms, args[0])
        return _format(...args)
    }
}
const format = new Proxy(_format, _format.proxyHandler)

function range(size, start = 0) {
    if (size < 0) {
        size = -size
        start -= size
    }
    return Array(size).fill(start).map((v, i) => v + i)
}
const rangeOf = (unit, count, start = 0) => range(count, 0).map(n => n * unit + start)
const between = (u, f) => (start, end) => rangeOf(u, (end - start) / u, start).map(format(f))
const from = (u, n, f) => from => rangeOf(u, n).map(v => v + from).map(format(f))

function parseArgs(a, b, c) {
    switch (typeof a) {
        case 'number': return { u: a, n: b, f: c }
        case 'string': return { u: u[a], n: b, f: c }
        case 'object': {
            const k = Object.keys(a)[0];
            return { u: u[k], n: a[k], f: b }
        }
    }
}

const arrayOf = (...args) => {
    const { u, n, f } = parseArgs(...args)
    return {
        between: between(u, f),
        from: from(u, n, f),
    }
}

const u = {
    seconds: s,
    days: d,
    minutes: m,
    hours: h,
    days: d,
    weeks: w,
    years: y,
}

module.exports = {
    ...u,
    setLocale,
    now,
    today,
    toDate,
    fromDate,
    format,
    arrayOf,
}


