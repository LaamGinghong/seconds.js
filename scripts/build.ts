import webpack, { Stats } from 'webpack'
import configuration from '../config/webpack.config'

webpack(configuration).run((err, stats) => {
  if (err) {
    console.log(err)
    return
  }

  const options: Stats.ToStringOptions = {
    colors: true,
    modules: false,
  }

  console.log(stats.toString(options))
})
