import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductCreateForm({
  categories: data,
  products: editProducts,
}) {
  const initialState = {
    descriptionValue: "",
    priceValue: "",
    nameValue: "",
    tagsValue: "",
    categoryValue: "",
  };
  const [productInput, setProductInput] = useState(initialState);
  //const { data, error } = useSWR("api/categories");
  const router = useRouter();

  // if (data.id) {
  //   setProductInput({
  //     ...productInput,
  //     name: data.name,
  //     description: data.description,
  //     price: data.price,
  //     tags: data.tags,
  //     category: data.category,
  //   });
  // }
  console.log(data);
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
        <label>
          Produktname
          <input
            id="name"
            required
            type="text"
            name="name"
            label="name"
            value={productInput.nameValue}
            onChange={(event) => {
              setProductInput({
                ...productInput,
                nameValue: event.target.value,
              });
              // setProductInput((prevState) => ({
              //   productInput: {
              //     // object that we want to update
              //     ...prevState.productInput, // keep all other key-value pairs
              //     nameValue: event.target.value, // update the value of specific key
              //   },
              // }));
            }}
          />
        </label>

        <label>
          Produktbeschreibung
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
        </label>

        <label>
          Preis/Stück
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
        </label>

        <label>
          Kategorie
          <input
            required
            id="categoryList"
            list="category"
            name="categoryList"
          />
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
            {data.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </datalist>
        </label>

        <label>
          Tags
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
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
/*
 */
