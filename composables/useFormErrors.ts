
export function useFormErrors() {
  const errors = ref<FieldErrors>({})

  function has(field: string): boolean {
    return !!errors.value[field]?.length
  }

  function first(field: string): string | null {
    return errors.value[field]?.[0] ?? null
  }

  function set(field: string, messages: string[]) {
    errors.value[field] = messages
  }

  function clear(field?: string) {
    if (field) {
      /* eslint-disable */
      delete errors.value[field]
      /* eslint-enable */
    } else {
      errors.value = {}
    }
  }

  function setFromApi(error: ApiError) {
    clear()
    if ('detail' in error) {
      errors.value._general = typeof error.detail === 'string' ? [error.detail] : error.detail
    } else {
      errors.value = error
    }
  }

  return {
    errors,
    has,
    first,
    set,
    clear,
    setFromApi,
  }
}
