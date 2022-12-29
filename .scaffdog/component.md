---
name: 'component'
root: '.'
output: '.'
ignore: []
questions:
  name: "What is the component called?"
  context: 'Which context does the component belong to?'
---

# Variables
- name: `{{ inputs.name | pascal }}`
- context: `{{ inputs.context | kebab }}`
- path: `./src/features/{{ context }}/components/{{ name }}`

# `{{ path }}/index.ts`

```tsx
export * from "./{{ name }}";
```

# `{{ path }}/{{ name }}.tsx`

```tsx
import styles from "./{{ name }}.module.scss";

export type {{ name }}Props = {
  // TODO: Add props
}

export const {{ name }} = (props) => {
  return (
    <div>{{ name }}</div>
  );
};
```

# `{{ path }}/{{ name }}.module.scss`

```scss
// TODO: Add styles
```
