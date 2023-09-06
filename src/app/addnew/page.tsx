"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { storage } from "@/config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type productProps = {
  Name: string;
  Description: string;
  Price: number;
  ImageLink: string;
};

const Add = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<productProps>();

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<productProps> = async (data) => {
    setLoading(true);

    const fileInput = document.getElementById(
      "photosInput"
    ) as HTMLInputElement | null;

    if (fileInput && fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];

      const storageRef = ref(storage, `files/${file.name}`);

      const uploadTask = uploadBytes(storageRef, file);

      await uploadTask
        .then((snapshot) => {
          getDownloadURL(storageRef)
            .then((downloadURL) => {
              data.ImageLink = downloadURL;
              console.log("Image is Uploaded");
              addDoc(collection(db, "productsData"), {
                productData: data,
              });
            })
            .then(() => {
              setLoading(false);
              alert("Data is Uploaded Successfully!");
              router.push("/");
            })
            .catch((error) => {
              alert("Error getting download URL: " + error.message);
            });
        })
        .catch((error) => {
          alert("Error uploading file: " + error.message);
        });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center justify-between p-4 gap-8 shadow-md shadow-slate-500 bg-gray-100">
        <input
          {...register("Name", { required: true })}
          className="border-2 border-gray-400 rounded-md font-light p-2 focus:outline-none bg-transparent w-full resize-none"
          placeholder="Name"
        />

        <input
          {...register("Description", { required: true })}
          className="border-2 border-gray-400 rounded-md font-light p-2 focus:outline-none bg-transparent w-full resize-none"
          placeholder="Description"
        />

        <input
          {...register("Price", { required: true })}
          className="border-2 border-gray-400 rounded-md font-light p-2 focus:outline-none bg-transparent w-full resize-none"
          placeholder="Price"
        />

        <input
          type="file"
          id="photosInput"
          className="border-2 border-gray-400 rounded-md font-light p-2 focus:outline-none bg-transparent"
          placeholder="Photo"
        />
        <button
          type="submit"
          className="border-2 bg-blue-500 p-2 text-white rounded-lg"
        >
          {loading ? "Adding" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default Add;
