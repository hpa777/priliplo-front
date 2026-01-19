export default defineI18nLocale(async (locale) => {
    const pageRepo = pageRepository($fetch)
    const { data } = await useAsyncData(`dictionary-${locale}`, () => pageRepo.getDictionary(locale, 'vrn'))
    if (data.value !== null) {
        return data.value.reduce(function (result, row) {
            return {
                ...result,
                [row.key]: row.value,
            }
        }, {})
    }
})
