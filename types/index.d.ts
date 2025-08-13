declare global {    
    type FieldErrors = Record<string, string[]> & { _general?: string[] }
    type DetailError = { detail: string }
    type ApiError = FieldErrors | DetailError    
}
export {};