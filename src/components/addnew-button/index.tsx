"use client";

import { useRouter } from "next/navigation";
import { BiSolidMessageSquareAdd } from "react-icons/bi";

const AddNew = () => {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.push("/addnew")}>
        <BiSolidMessageSquareAdd className="w-10 h-10 text-orange-600" />
      </button>
    </>
  );
};

export default AddNew;
