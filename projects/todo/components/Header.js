/**
 * Import, variables, actions..
 */
import React from "react";

/**
 * Render the header with React.memo for performances.
 */
const Header = React.memo(() => {
    return (
        <header className="container mt-3 mb-3">
            <div className="row">
                <div className="col-12">
                    <h1>Todo app</h1>
                    <hr/>
                </div>
            </div>
        </header>
    );
})

export default Header;
