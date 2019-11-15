import API from "./api";

const mainService = {
    getUsers: async (url, onSuccess = () => { }) => {
        try {
            const res = await API.get(url)
            if (res.status === 200) {
                const { data } = res
                onSuccess(data, false)
                return data
            }
            return res
        } catch (error) {
            onSuccess([], false)
            return error
        }
    }
}

export {
    mainService
}