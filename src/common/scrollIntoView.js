export const scrollIntoView = inputs =>
  Array.from(inputs).forEach(input =>
    input.addEventListener('focus', () => setTimeout(() => input.scrollIntoView(false), 250)),
  )
