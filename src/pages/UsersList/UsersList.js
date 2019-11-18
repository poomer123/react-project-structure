import React from "react"
import MainLayout from "../../layouts/Main";
import DataListingContainer from "../../common/DataListingContainer";

function UsersList(props) {

    return (
        <MainLayout>
            <DataListingContainer title={'Users Listing Page'} url={'https://jsonplaceholder.typicode.com/users'} />
        </MainLayout>
    )
}

export default UsersList
