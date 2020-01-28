import React from 'react'

function ContainerApp (props) {
    return (
        <main>
            <div className="container">
                <div className="row">
                    {props.children}
                </div>

            </div>
        </main>
    )
}
export default ContainerApp

