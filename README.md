# msd

## examples

```

arrayOf({ days: 6 }, { weekday: 'long' }).from(today)
[ 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ]

arrayOf({ days: 6 }, toDate).from(today).map(formatfp({ weekday: 'long' }))
[ 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday' ]

arrayOf({ days: 6 }, toDate).from(today)
[
  2020-06-19T14:00:00.000Z,
  2020-06-20T14:00:00.000Z,
  2020-06-21T14:00:00.000Z,
  2020-06-22T14:00:00.000Z,
  2020-06-23T14:00:00.000Z,
  2020-06-24T14:00:00.000Z
]

arrayOf({ days: 6 }).from(today).map(toDate)
[
  2020-06-19T14:00:00.000Z,
  2020-06-20T14:00:00.000Z,
  2020-06-21T14:00:00.000Z,
  2020-06-22T14:00:00.000Z,
  2020-06-23T14:00:00.000Z,
  2020-06-24T14:00:00.000Z
]

arrayOf({ weeks: 4 }).from(today).map(toDate)
[
  2020-06-19T14:00:00.000Z,
  2020-06-26T14:00:00.000Z,
  2020-07-03T14:00:00.000Z,
  2020-07-10T14:00:00.000Z
]

format(now, {weekday: 'long'})
Saturday

format(now,  toDate)
2020-06-20T03:46:18.779Z

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

toDate(today + weeks * 2 + days * 2)
2020-07-05T14:00:00.000Z
```


