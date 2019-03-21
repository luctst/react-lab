/**
 * Import, variables, actions..
 */
import React from "react";

/**
 * Render the header with React.memo for performances.
 */
const Header = () => {
    return (
        <section className="container mt-3 mb-3">
            <div className="row">
                <div className="col-12">
                    <h1>React Test !</h1>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Header);