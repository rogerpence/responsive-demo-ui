module.exports = {
  purge: [],
  theme: {
    extend: {
        fontFamily: {
            'bodytext': ['Montserrat', 'sans-serif']
        },
        //https://javisperez.github.io/tailwindcolorshades/#/?paco=451F11&black-pearl=0D1F2C&cadet-blue=a0aec0&Wild%20Sand=F5F5F6&tv=1
        colors: {
          'paco': {
            100: '#ECE9E7',
            200: '#D1C7C4',
            300: '#B5A5A0',
            400: '#7D6258',
            500: '#451F11',
            600: '#3E1C0F',
            700: '#29130A',
            800: '#1F0E08',
            900: '#150905',
            },
            'black-pearl': {
            100: '#E7E9EA',
            200: '#C3C7CA',
            300: '#9EA5AB',
            400: '#56626B',
            500: '#0D1F2C',
            600: '#0C1C28',
            700: '#08131A',
            800: '#060E14',
            900: '#04090D',
            },
            'cadet-blue': {
            100: '#F6F7F9',
            200: '#E7EBEF',
            300: '#D9DFE6',
            400: '#BDC6D3',
            500: '#A0AEC0',
            600: '#909DAD',
            700: '#606873',
            800: '#484E56',
            900: '#30343A',
            },
            'wild-sand': {
            100: '#F5F5F6',
            200: '#DCDCDD',
            300: '#C4C4C4',
            400: '#ABABAC',
            500: '#939393',
            600: '#7A7A7B',
            700: '#626262',
            800: '#494949',
            900: '#313131',
            },
        }
    },
  },


  variants: {
    borderStyle: ['responsive', 'hover'],
    fontStyle: ['responsive', 'hover'],
  },
  plugins: [],
}
