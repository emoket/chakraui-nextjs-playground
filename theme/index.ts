import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'brand.500',
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: 'none',
      },
    },
  },
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: '#EFF6FC',
        100: '#E5EFF9',
        200: '#D0E1F4',
        300: '#BFD6F2',
        400: '#A1BEE2',
        500: '#81A4D1',
        600: '#6387B7',
        700: '#4A6C9B',
        800: '#375684',
        900: '#274472',
      },
    },
    fonts: {
      heading: `Nanum Gothic ${base.fonts?.heading}`,
      body: `Inter ${base.fonts?.body}`,
    },
    components: {
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: 'none',
            _focus: {
              ring: 2,
              ringColor: 'brand.500',
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox'],
  }),
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select'],
  })
);

export default theme;
