import React from "react"
import MainLayout from "../../layouts/Main";
import DataListingContainer from "../../common/DataListingContainer";

export default function Users() {
    return (
        <MainLayout>
            <DataListingContainer title={'Users Page'} url={'https://jsonplaceholder.typicode.com/users'} />
        </MainLayout>
    )
}
