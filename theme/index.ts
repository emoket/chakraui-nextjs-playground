import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';
import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools';

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

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.500',
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
      Button: {
        variants: {
          primary: (props: Record<string, any> | StyleFunctionProps) => ({
            rounded: 'none',
            ...brandRing,
            color: mode('white', 'gray.700')(props),
            backgroundColor: mode('brand.500', 'brand.200')(props),

            _hover: {
              backgroundColor: mode('brand.600', 'brand.300')(props),
            },
            _active: {
              backgroundColor: mode('brand.700', 'brand.400')(props),
            },
          }),
        },
      },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: 'none',
            ...brandRing,
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
