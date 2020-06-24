import React from "react";

const EditExpensePage = (props)=>(
    <div>
        This is from my edit expense component id {props.match.params.id}
    </div>
);

export default EditExpensePage;