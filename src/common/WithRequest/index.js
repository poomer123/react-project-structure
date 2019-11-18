import { useEffect, useState } from "react"
import { mainService } from "../../services";

const WithRequest = (url) => {

    const [dataList, setDataList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        mainService.getUsers(
            url,
            onSuccess
        )
    }, [url])

    const onSuccess = (dataToSet = [], loadingToSet = true) => {
        setDataList(dataToSet)
        setIsLoading(loadingToSet)
    }

    return {
        dataList,
        isLoading
    }
}

export default WithRequest
