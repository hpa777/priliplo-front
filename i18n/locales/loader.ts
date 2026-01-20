export default defineI18nLocale(locale => {    
    return $fetch(`/api/v1/dictionary/${locale}/vrn/`)    
})
