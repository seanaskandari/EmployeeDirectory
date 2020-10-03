import React from "react";

function SearchForm (props) {
    return(
        <form>
            <input onChange={props.onChange} className="mx-auto form-control form-control-lg col-4 text-center" 
            type="text" placeholder="Search by employee">
            </input>
        </form>
    );
}

export default SearchForm;