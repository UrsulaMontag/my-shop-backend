import { useState } from "react";

export default function Category({ id, name, description }) {
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <h5>{description}</h5>
      </div>

      <div>
        <button
          onClick={() => {
            console.log("Delete Category", id, name);
          }}
        >
          Delete
        </button>
        <button onClick={onEnableDeleteMode}>Edit</button>
      </div>
    </div>
  );
}
