import React, { Fragment } from "react";
import { db } from "@/db/server";
import { redirect } from "next/navigation";

const SnippetCreatePage = () => {
  async function createSnippet(formData: FormData) {
    "use server";

    const snippet = await db.snippet.create({
      data: {
        title: formData.get("title") as string,
        code: formData.get("code") as string,
      },
    });

    console.log(snippet);
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        action={createSnippet}
        className="flex flex-col w-6/12  justify-items-center justify-center rounded border-black-200 border-2"
      >
        <h3 className="font-bold m-3">Create a snippet</h3>
        <div className="flex flex-col gap-4">
          <label className="w-2" htmlFor="title">
            Title
          </label>
          <input
            className="w-full p-2 h-3/4"
            type="text"
            name="title"
            placeholder="Enter title"
          />
          <label className="w-2" htmlFor="code">
            Code
          </label>
          <textarea
            className="bg-amber-50 min-h-30 w-full p-2"
            name="code"
            placeholder="Enter code"
            id="code"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SnippetCreatePage;
