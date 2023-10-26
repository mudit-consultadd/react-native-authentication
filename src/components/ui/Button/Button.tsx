import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import React from 'react';

const BUTTON_VARIANTS = {
  solid: 'solid',
  link: 'link',
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;

type ButtonProps = PressableProps & {
  title: string;
  variant?: ButtonVariant;
  bgColor?: string;
  fgColor?: string;
};

const Button = ({
  title,
  variant = 'solid',
  bgColor,
  fgColor,
  ...props
}: ButtonProps) => {
  return (
    <Pressable
      {...props}
      style={[
        styles.root,
        styles[`root_${variant}`],
        bgColor
          ? {
              backgroundColor: bgColor,
            }
          : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${variant}`],
          fgColor
            ? {
                color: fgColor,
              }
            : {},
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },
  [`root_${BUTTON_VARIANTS.solid}`]: {
    backgroundColor: '#3B71F3',
  },
  [`root_${BUTTON_VARIANTS.link}`]: {},
  text: {
    fontWeight: 'bold',
  },
  [`text_${BUTTON_VARIANTS.solid}`]: {
    color: 'white',
  },
  [`text_${BUTTON_VARIANTS.link}`]: {
    color: 'gray',
  },
});
