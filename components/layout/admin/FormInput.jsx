import React from "react";

const FormInput = () => {
  return (
    <>
      <div className="max-w-lg  bg-gray-900 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 ">
        <h1 className="text-gray-200 text-center font-extrabold -mt-3 text-3xl">
          Add product
        </h1>
        <div className="container py-5 max-w-md mx-auto">
          <form method action>
            <div className="text-left">
              <label for="title" className="text-white ">
                Title
              </label>
            </div>
            <div className="mb-4">
              <input
                placeholder="Title"
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
              />
            </div>

            <div className="text-left">
              <label for="subitle" className="text-white ">
                Subitle
              </label>
            </div>
            <div className="mb-4">
              <input
                placeholder="Subitle"
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subitle"
                type="text"
              />
            </div>
            <div className="text-left">
              <label for="dessiption" className="text-white ">
                Dessiption
              </label>
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-800 text-sm font-semibold mb-2"
                for=""
              ></label>
              <textarea
                class="appearance-none w-full p-3 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                name="field-name"
                rows="3"
                placeholder="Write something..."
              ></textarea>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-lg  bg-gray-900 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 ">
        <h1 className="text-gray-200 text-center font-extrabold -mt-3 text-3xl">
          Media
        </h1>
        <div className="container py-5 max-w-md mx-auto">
          <form method action>
            <div class="flex justify-center items-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    class="mb-3 w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>

            <div className="flex items-center justify-between mt-5">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormInput;
