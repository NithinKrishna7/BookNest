import React, { useState } from "react";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from "react-router-dom";

const EditBooks = () => {
  const { id } = useParams();
  const bookData = useLoaderData();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
  } = bookData;

  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Programming",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Memoir",
    "Poetry",
    "Children's books",
    "Travel",
    "Religion and spirituality",
    "Science",
    "Art and design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    category || bookCategories[0]
  );
  const [successMessage, setSuccessMessage] = useState("");

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };

    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSuccessMessage("Modified successfully!");
        setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
      });
  };

  return (
    <div className="px-4 my-12 overflow-hidden">
      <h2 className="mb-8 text-3xl font-bold font-alata">Modify Book</h2>
      <form
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
        onSubmit={handleUpdate}
      >
        {/* first row */}
        <div className="flex gap-8">
          {/* book name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label
                className="font-alata text-base"
                htmlFor="bookTitle"
                value="Book Title"
              />
            </div>
            <TextInput
              id="bookTitle"
              placeholder="Book Name"
              required
              type="text"
              name="bookTitle"
              className="w-full"
              defaultValue={bookTitle}
            />
          </div>

          {/* author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label
                className="font-alata text-base"
                htmlFor="authorName"
                value="Author Name"
              />
            </div>
            <TextInput
              id="authorName"
              placeholder="Author Name"
              required
              type="text"
              name="authorName"
              className="w-full"
              defaultValue={authorName}
            />
          </div>
        </div>

        {/* 2nd Row */}
        <div className="flex gap-8">
          {/* book url */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label
                className="font-alata text-base"
                htmlFor="imageURL"
                value="Book Image URL"
              />
            </div>
            <TextInput
              id="imageURL"
              placeholder="Image URL"
              required
              type="text"
              name="imageURL"
              className="w-full"
              defaultValue={imageURL}
            />
          </div>

          {/* book category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label
                className="font-alata text-base"
                htmlFor="inputState"
                value="Book Category"
              />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* full width div for book description */}
        <div>
          <div className="mb-2 block">
            <Label
              className="font-alata text-base"
              htmlFor="bookDescription"
              value="Book Description"
            />
          </div>
          <Textarea
            id="bookDescription"
            placeholder="Book Description"
            required
            type="text"
            name="bookDescription"
            className="w-full"
            rows={4}
            defaultValue={bookDescription}
          />
        </div>

        {/* book pdf url */}
        <div>
          <div className="mb-2 block">
            <Label
              className="font-alata text-base"
              htmlFor="bookPDFURL"
              value="Book PDF Link"
            />
          </div>
          <TextInput
            id="bookPDFURL"
            placeholder="Paste Book PDF URL here"
            required
            type="text"
            name="bookPDFURL"
            className="w-full"
            defaultValue={bookPDFURL}
          />
        </div>

        {/* Submit btn */}
        <Button
          type="submit"
          className="mx-auto bg-logotextcolor w-30 mt-5 font-alata font-bold hover:bg-black tracking-widest "
        >
          Modify book
        </Button>
      </form>

      {successMessage && (
        <p className="text-center text-green-500 mt-6 font-alata font-bold text-lg">
          {successMessage}
        </p>
      )}
    </div>
  );
};

export default EditBooks;
