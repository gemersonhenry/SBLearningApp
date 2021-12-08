## CUSTOM BUTTON


```ts
interface CustomButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  type?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
  bgColor?: string;
  fontColor?: string;
  marginHorizontal?: number;
}
```

```jsx

<CustomButton
  text="YOUR_CUSTOM_MESSAGE"
  onPress={onForgotPasswordPressed}
  type="TERTIARY"
/>

```