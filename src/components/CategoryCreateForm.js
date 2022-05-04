import { useRouter } from "next/router";
import { useState } from "react";

const initialState = {
  descriptionValue: "",
  nameValue: "",
};

export default function CategoryCreateForm() {
  const [categoryInput, setCategoryInput] = useState(initialState);

  const router = useRouter();

  const submit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/category/create", {
      method: "POST",
      body: JSON.stringify({
        description: categoryInput.descriptionValue,
        name: categoryInput.nameValue,
      }),
    });

    router.push("/categories");
  };

  return (
    <>
      <form onSubmit={submit}>
        <label>
          Kategoriename
          <input
            required
            type="text"
            name="name"
            label="name"
            value={categoryInput.nameValue}
            onChange={(event) => {
              setCategoryInput({
                ...categoryInput,
                nameValue: event.target.value,
              });
              // setCategoryInput((prevState) => ({
              //   categoryInput: {
              //     // object that we want to update
              //     ...prevState.categoryInput, // keep all other key-value pairs
              //     nameValue: event.target.value, // update the value of specific key
              //   },
              // }));
            }}
          />
        </label>

        <label>
          Kategoriebeschreibung
          <input
            required
            type="text"
            name="description"
            label="description"
            value={categoryInput.descriptionValue}
            onChange={(event) => {
              setCategoryInput({
                ...categoryInput,
                descriptionValue: event.target.value,
              });
            }}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
