import {colors} from '@/constants/colors';
import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'large' | 'small';
  onPress: () => void;
}

function CustomButton({
  label,
  variant = 'filled',
  size = 'large',
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        styles[variant],
        styles[`${size}Size`],
        pressed && styles.pressed,
      ]}
      {...props}>
      <Text style={styles[`${variant}Text`]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filled: {
    backgroundColor: colors.PINK_700,
  },
  filledText: {
    color: colors.WHITE,
    fontSize: 14,
    fontWeight: 'bold',
  },
  largeSize: {
    width: '100%',
    height: 45,
  },
  smallSize: {
    paddingHorizontal: 10,
    height: 35,
  },
  outlined: {
    backgroundColor: colors.WHITE,
    borderColor: colors.PINK_700,
    borderWidth: 1,
  },
  outlinedText: {
    color: colors.PINK_700,
    fontSize: 14,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.8,
  },
});

export default CustomButton;
