import React from 'react';

const EditExpensePage=(props)=>(
    <div>
        This is my EditExpensePage component with dinamic id : {props.match.params.id}
    </div>
)

export default EditExpensePage;