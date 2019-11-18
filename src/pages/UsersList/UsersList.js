import React, { useEffect, useState } from "react"
import MainLayout from "../../layouts/Main";
import Loading from "../../components/Loading";
import { mainService } from "../../services";

function UsersList(props) {

    const [usersData, setUsersData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        mainService.getUsers(
            'https://jsonplaceholder.typicode.com/users',
            onSuccess
        )
    }, [])

    const onSuccess = (dataToSet = [], loadingToSet = true) => {
        setUsersData(dataToSet)
        setIsLoading(loadingToSet)
    }

    return (
        <MainLayout>
            <div className="row">
                <div className="col">
                    <h1>Users List</h1>
                    {isLoading
                        ? <Loading />
                        : <>
                            {usersData.length > 0
                                ? <ul>
                                    {usersData.map(
                                        user => <li key={user.id}>{user.name}</li>
                                    )}
                                </ul>
                                : <h3>No data..</h3>
                            }
                        </>
                    }
                </div>
            </div>
        </MainLayout>
    )
}

export default UsersList
