
var test = require('tape')
var { pull } = require('pull-stream')
var gain = require('../')
var generator = require('pull-audio-generator')
var speaker = require('pull-audio-speaker')

test('regular audio', t => {
  t.plan(1)

  pull(
    generator(t => Math.sin(Math.PI * 2 * t * 400), { duration: 5 }),
    speaker(err => {
      t.false(err, 'finished')
    })
  )
})

test('gain audio', t => {
  t.plan(1)
  
  pull(
    generator(t => Math.sin(Math.PI * 2 * t * 400), { duration: 5 }),
    gain(0.5),
    speaker(err => {
      t.false(err, 'finished')
    })
  )
})

