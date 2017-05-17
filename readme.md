
# pull-audio-gain

> Transform volume of audio in a pull-stream

```js
pull(
  generator(),
  gain({ volume: 0.5 }),
  speaker()
)
```

## Install

```sh
npm install --save pull-audio-gain
```

```sh
yarn add pull-audio-gain
```

## Usage

### `gain(options|volume)`

Returns a [pull-stream transform](https://github.com/pull-stream/pull-stream) that changes volume of audio

Options are the same as [`audio-gain`](https://github.com/audiojs/pull-audio-gain)

```js
pull(
  generator(),
  gain(0.6),
  speaker()
)
```

---

Maintained by [Jamen Marz](https://git.io/jamen) (See on [Twitter](https://twitter.com/jamenmarz) and [GitHub](https://github.com/jamen) for questions & updates)

