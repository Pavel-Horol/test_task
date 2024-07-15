/** @type {import('tailwindcss').Config} */
import * as defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,tsx,jsx}",
      "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        },
        colors: {
            'primary-bg': '#242731',
            'primary-input': '#272D3D',
            'primary-placeholder': "#D7D7D7",
            'raspberry': '#FF3459',
            'primary-form': '#303A53'
        }
    },
  },
  plugins: [
      import('flowbite/plugin')
  ],
}

