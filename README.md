# msdate

Simple, flexible, functional

## Install <sub><sup><sub><sup>(npm or yarn)</sup></sub></sup></sub>

```js
npm install @mls44/msdate
```

```js
yarn add @mls44/msdate
```

## Use <sub><sup><sub><sup>(import or require)</sup></sub></sup></sub>

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
 1592656024000

today
 1592575200000

toDate(today)
 2020-06-19T14:00:00.000Z

toDate(today + 1 * days)
 2020-06-20T14:00:00.000Z

toDate(now + 1 * days)
 2020-06-21T12:27:04.000Z

toDate(today + 4 * weeks)
 2020-07-17T14:00:00.000Z

toDate(today + 10 * years)
 2030-06-20T02:00:00.000Z

```

### Ranges

```js

import { arrayOf, days, today, toDate } from '@mls44/msdate'

arrayOf({ days: 7 }).from(today)
 [
  1592575200000,
  1592661600000,
  1592748000000,
  1592834400000,
  1592920800000,
  1593007200000,
  1593093600000
]

arrayOf({ days: 7 }, toDate).from(today)
 [
  2020-06-19T14:00:00.000Z,
  2020-06-20T14:00:00.000Z,
  2020-06-21T14:00:00.000Z,
  2020-06-22T14:00:00.000Z,
  2020-06-23T14:00:00.000Z,
  2020-06-24T14:00:00.000Z,
  2020-06-25T14:00:00.000Z
]

arrayOf({ days: 7 }, { weekday: 'long' }).from(today)
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

### Functional/Formatting

```js

import { now, today, arrayOf, toDate, format, formatfp } from '@mls44/msdate'

format(now,  toDate)
 2020-06-20T12:28:55.941Z

format(now, { weekday: 'long' })
 Saturday

arrayOf({ days: 7 }).from(today).map(toDate)
 [
  2020-06-19T14:00:00.000Z,
  2020-06-20T14:00:00.000Z,
  2020-06-21T14:00:00.000Z,
  2020-06-22T14:00:00.000Z,
  2020-06-23T14:00:00.000Z,
  2020-06-24T14:00:00.000Z,
  2020-06-25T14:00:00.000Z
]

arrayOf({ days: 7 }).from(today).map(formatfp({ weekday: 'long' }))
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
