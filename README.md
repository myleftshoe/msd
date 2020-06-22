# msdate

Simple, flexible, functional

## Install <sub><sup>(npm or yarn)</sup></sub>

```js
npm install @mls44/msdate
```

```js
yarn add @mls44/msdate
```

## Use <sub><sup>(import or require)</sup></sub>

```js
const { now, today, seconds, minutes, hours, days, weeks, years } = require('@mls44/msdate')
```

```js
import { now, today, seconds, minutes, hours, days, weeks, years } from '@mls44/msdate'
```

## Examples


### Simple

```js

import { now, today, days, weeks, years, toDate } from '@mls44/msdate'

now
 1592692591560

today
 1592661600000

fromDate(new Date())
 1592692591566

toDate(today)
 2020-06-20T14:00:00.000Z

toDate(today + 1 * days)
 2020-06-21T14:00:00.000Z

toDate(now + 1 * days)
 2020-06-21T22:36:31.560Z

toDate(today + 4 * weeks)
 2020-07-18T14:00:00.000Z

toDate(today + 10 * years)
 2030-06-21T02:00:00.000Z

```

### Ranges

```js

import { arrayOf, days, today, toDate } from '@mls44/msdate'

arrayOf(days, 7).from(today)
 [
  1592575200000,
  1592661600000,
  1592748000000,
  1592834400000,
  1592920800000,
  1593007200000,
  1593093600000
]

arrayOf(days, 7, toDate).from(today)
 [
  2020-06-19T14:00:00.000Z,
  2020-06-20T14:00:00.000Z,
  2020-06-21T14:00:00.000Z,
  2020-06-22T14:00:00.000Z,
  2020-06-23T14:00:00.000Z,
  2020-06-24T14:00:00.000Z,
  2020-06-25T14:00:00.000Z
]

arrayOf(days, 7, { weekday: 'long' }).from(today)
 [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
]

// Or use between:

arrayOf(days, { weekday: 'long' }).between(today, today + days * 7)
 [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
]

```

In the above examples, you need to import `days`. Alternatively you can call `arrayOf` like this:

```
arrayOf('days', 7)
arrayOf({ days: 7})
```

### Formatting

*msdate* uses [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Provide an options object as per the spec to `format`.

`arrayOf` also accepts the same object (or even a function like `toDate`) as an optional second argument (see above examples).

```js

import { now, today, toDate, format } from '@mls44/msdate'

format(now,  toDate)
 2020-06-20T23:20:27.448Z

format(now, { weekday: 'long' })
 Sunday

```

### Functional

`toDate`, `fromDate`, and `format` can be used functionally, e.g. `[...].map(toDate)`.

```js

import { now, today, arrayOf, days, toDate, fromDate, format } from '@mls44/msdate'

arrayOf(days, 7).from(today).map(toDate)
 [
  2020-06-20T14:00:00.000Z,
  2020-06-21T14:00:00.000Z,
  2020-06-22T14:00:00.000Z,
  2020-06-23T14:00:00.000Z,
  2020-06-24T14:00:00.000Z,
  2020-06-25T14:00:00.000Z,
  2020-06-26T14:00:00.000Z
]

arrayOf(days, 7).from(today).map(format({ weekday: 'long' }))
 [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

[
    new Date('2020-06-19T14:00:00.000Z'),
    new Date('2020-06-20T14:00:00.000Z'),
    new Date('2020-06-21T14:00:00.000Z'),
    new Date('2020-06-22T14:00:00.000Z'),
    new Date('2020-06-23T14:00:00.000Z'),
    new Date('2020-06-24T14:00:00.000Z'),
    new Date('2020-06-25T14:00:00.000Z')
].map(fromDate)
 [
  1592575200000,
  1592661600000,
  1592748000000,
  1592834400000,
  1592920800000,
  1593007200000,
  1593093600000
]

```
