import { Config } from 'tailwindcss'
import cockpit from 'adonis-cockpit/tailwind'

export default {
  presets: [cockpit],
  plugins: [...cockpit.plugins],
} as Config
