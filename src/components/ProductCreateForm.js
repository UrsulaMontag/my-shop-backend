import { useRouter } from "next/router";
import { useState } from "react";

const initialState = {
  descriptionValue: "",
  priceValue: "",
  nameValue: "",
  tagsValue: "",
  categoryValue: "",
};

export default function ProductCreateForm() {
  const [productInput, setProductInput] = useState(initialState);

  const router = useRouter();

  const submit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/product/create", {
      method: "POST",
      body: JSON.stringify({
        description: productInput.descriptionValue,
        name: productInput.nameValue,
        price: productInput.priceValue,
        category: productInput.categoryValue,
        tags: productInput.tagsValue,
      }),
    });

    router.push("/products");
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          required
          type="text"
          name="name"
          label="name"
          value={productInput.nameValue}
          onChange={(event) => {
            setProductInput({ nameValue: event.target.value });
            // setProductInput((prevState) => ({
            //   productInput: {
            //     // object that we want to update
            //     ...prevState.productInput, // keep all other key-value pairs
            //     nameValue: event.target.value, // update the value of specific key
            //   },
            // }));
          }}
        />

        <input
          required
          type="text"
          name="description"
          label="description"
          value={productInput.descriptionValue}
          onChange={(event) => {
            setProductInput({
              ...productInput,
              descriptionValue: event.target.value,
            });
          }}
        />

        <input
          required
          type="text"
          name="price"
          label="price"
          value={productInput.priceValue}
          onChange={(event) => {
            if (!event.target.value.match(/[^0-9]/)) {
              setProductInput({
                ...productInput,
                priceValue: event.target.value,
              });
            } else {
              alert("Only numeric input allowed");
            }
          }}
        />

        <input
          required
          type="text"
          name="category"
          label="category"
          value={productInput.categoryValue}
          onChange={(event) => {
            setProductInput({
              ...productInput,
              categoryValue: event.target.value,
            });
          }}
        />

        <input
          required
          placeholder="Enter tags separated by comma"
          type="text"
          name="tags"
          label="tags"
          value={productInput.tagsValue}
          onChange={(event) => {
            const tagArray = event.target.value.split(",");

            setProductInput({ ...productInput, tagsValue: tagArray });
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
/* <input required id="categoryList" list="category" name="categoryList" />

        <datalist
          id="category"
          value={productInput.categoryValue}
          onChange={(event) => {
            setProductInput({
              ...productInput,
              categoryValue: event.target.value,
            });
          }}
        >
          {categoryArray.map((category) => {
            return (
              <>
                <option value={category.name} key={category.id} />
              </>
            );
          })}
        </datalist>
*/
