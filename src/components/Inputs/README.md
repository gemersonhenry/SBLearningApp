## CUSTOM INPUT


```ts
type inputStyleTypes = 'UNDERLINE' | 'OUTLINE';

interface CustomInput01Props {
  value: string;
  setValue: (value: string) => void;
  width: number;
  placeholder?: string;
  secureType?: boolean;
  styleType?: inputStyleTypes;
  marginBottom?: number;
  marginTop?: number;
  marginVertical?: number;
}
```

```jsx

<CustomInput01
  value={username}
  setValue={setUsername}
  width={contentWidth} // you should the width of this input
  placeholder="Username or Email"
  marginBottom={20}
/>

```