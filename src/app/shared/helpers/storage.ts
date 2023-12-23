
const setLocalStorage = (key: string, value: string) => {
    try {
        localStorage.setItem(`countriesInformations/${key}`, value)
        return { success: true, error: null }
    } catch (error: any) {
        return {
            success: false,
            error
        }
    }
}

const getLocalStorage = (key: string) => {
    try {
        const data = localStorage.getItem(`countriesInformations/${key}`)
        if (data) return { success: true, data }
        throw new Error(`countriesInformations/${key} not founded on website local storage`);
    } catch (error: any) {
        return {
            success: false,
            error
        }
    }
}

const removeItemLocalStorage = (key: string) => {
    try {
        localStorage.removeItem(`countriesInformations/${key}`)
        return { success: true }
    } catch (error: any) {
        return {
            success: false,
            error
        }
    }
}
const alreadyIsLogged = () => {
    const key = 'username'
    try {
        const data = localStorage.getItem(`countriesInformations/${key}`)
        if (data) return { success: true, data }
        throw new Error(`countriesInformations/${key} not founded on website local storage`);
    } catch (error: any) {
        return {
            success: false,
            error
        }
    }
}


export const StorageHelpers = {
    setLocalStorage,
    getLocalStorage,
    alreadyIsLogged,
    removeItemLocalStorage
}