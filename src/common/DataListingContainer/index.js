import React from "react";
import Loading from "../../components/Loading";
import { WithRequest } from "../../common";

const DataListingContainer = (props) => {

    const { title, url } = props
    const { isLoading, dataList } = WithRequest(url)

    return (
        <div className="row">
            <div className="col">
                {title && <h1>{title}</h1>}

                {isLoading
                    ? <Loading />
                    : <>
                        {dataList.length > 0
                            ? <ul>
                                {dataList.map(
                                    data => <li key={data.id}>{data.name}</li>
                                )}
                            </ul>
                            : <h3>No data..</h3>
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default DataListingContainer