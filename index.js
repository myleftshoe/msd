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
const _formatfp = f => ms => _format(ms, f)
const _formatph = {
    apply: (target, self, args) => {
        if (args.length > 1)
            return _format(...args)
        else
            return _formatfp(args[0])
    }
}
const format = new Proxy(_format, _formatph)

const range = (size, start = 0) => Array(size).fill(start).map((v, i) => v + i)
const rangeOf = (unit, count, start = 0) => range(count, 0).map(n => n * unit + start)
const between = (u, f) => (start, end) => rangeOf(u, (end - start) / u, start).map(format(f))
const from = (u, n, f) => from => rangeOf(u, n).map(v => v + from).map(format(f))

const _between = (u, f) => ({ between: between(u, f) })
const _from = (u, n, f) => ({ from: from(u, n, f) })
const _arrayOf = {
    apply: (target, self, args) => {
        switch (args.length) {
            case 1: return _between(...args)
            case 3: return _from(...args)
            case 2: {
                if (typeof args[1] === 'number')
                    return _from(...args)
                else
                    return _between(...args)
            }
        }
    }
}
const arrayOf = new Proxy(_between, _arrayOf)


module.exports = {
    seconds: s,
    days: d,
    minutes: m,
    hours: h,
    days: d,
    weeks: w,
    years: y,
    setLocale,
    now,
    today,
    toDate,
    fromDate,
    format,
    arrayOf,
}


