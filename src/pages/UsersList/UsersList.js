import React from "react"
import MainLayout from "../../layouts/Main";

function UsersList(props) {
    return (
        <MainLayout>
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <h1>Users List</h1>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default UsersList
