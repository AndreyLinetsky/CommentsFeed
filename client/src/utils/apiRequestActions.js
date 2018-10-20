export function apiRequestActions(name) {
  return {
    success: `${name}_SUCCESS`,
    error: `${name}_ERROR`,
    pending: `${name}_PENDING`
  };
}
