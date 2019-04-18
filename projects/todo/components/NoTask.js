/**
 * Import, variables
 */
import React from "react";

/**
 * Render h1 title when there is no task
 * @param {Object} props.content The content to render.
 */
const NoTask = props => {
    return (
        <main className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">{props.content}</h1>
                </div>
            </div>
        </main>
    );
}

export default NoTask;