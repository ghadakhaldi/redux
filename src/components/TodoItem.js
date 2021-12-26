import React from "react";
import React from 'react';
import { Checkbox } from "@mui/material"

const TodoItem = ({name,done,id}) => {
    const handlecheck=()=>{

    }
    return (
        <div className="todoItem">

<Checkbox
  checked={done}

  onChange={handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
/>
<p className={done && 'todoItem--done'}> {name}</p>
 </div>
    )
}

export default TodoItem
