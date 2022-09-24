import axios from "axios";
import { language } from "gray-matter";
import React, { useState } from "react";
// import { setNewProduct } from "./API/productApi";
import { NumericFormat } from "react-number-format";
import { toast } from "react-toastify";
import AdminLayout from "../../../../components/layouts/admin";
// import UploadPro from "./API/productApi"

const transModel = {
  title:"",
  description:"",
};
console.log(transModel)

const LanguageModel = {
  language:"la",
}

const translations = {};
translations[LanguageModel.language] = transModel;

const initialState = {
  // price: "100000",
  // slug:"vansss",
  // translations: translations,
  // user: 1,
  ...translations
};

const AddProduct = () => {

  const upload = JSON.stringify(initialState);

  const [trans, setTrans] = useState(transModel)

  const [language, setLanguage] = useState(LanguageModel);

  const [formData, setFormData] = useState(upload);

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeTrans = (e) =>{
    setTrans({...trans, [e.target.name]: e.target.value })
    // console.log(trans)
  }

  const handleChangeLanguage = (e) => {
    setLanguage({ ...language, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const AddNewProduct = () => {
    // const tran = "{\"en\":{\"title\":\"NikeShoe\",\"description\":\"AirForce\"}}";
    const trans1 = {
      en: {
        title: "TC",
        description: "UN",
      },
    };

    
    const sentdata = {
      translations: upload,
      // translations:"{\"en\":{\"title\":\"NikeShoe\",\"description\":\"AirForce\"}}",
      slug: "asdfghjkl",
      price: "010101",
      audience: "Public",
      user: 1,
    }
    console.log (sentdata)

    return axios({
      method: "post",
      url: "http://localhost:8000/api/v1/product/",
      data: sentdata,
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  const onFileChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title === "") {
      toast.error("Title can’t be blank");
    } else if (formData.price === "") {
      toast.error("Price can’t be blank");
    } else if (formData.subitle === "") {
      toast.error("Subitle can’t be blank");
    } else if (formData.dessiption === "") {
      toast.error("Dessiption can’t be blank");
    } else {
      // token = sessionStorage.getItem(process.env.NEXT_PUBLIC_TOKEN_ACCESS);

      // if (!token) {
      //   toast.error("unauthorize");
      // }
      // return;
      // const formFormData = new FormData();

      // for (const key of Object.keys(formData)) {
      //   formFormData.append(key, formData[key]);
      // }

      // formFormData.append("image", file);

      const formData = new FormData();
      formData.append("image", image);

      AddNewProduct(formData, "token")
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          // toast.error("cannot connect api");
          console.log(err);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="max-w-lg  bg-gray-900 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 ">
          <h1 className="text-gray-200 text-center font-extrabold mt-3 text-3xl">
            Language
          </h1>
          <div className="container py-5 max-w-md mx-auto flex flex-col-2 justify-center">
            <div className="bg-gray-200 text-lg  p-1 rounded-md">
              <input
              id="en"
                type="radio"
                name="language"
                value="en"
                onChange={handleChangeLanguage}
                className="peer hidden"
              />
              <label htmlFor="en" className="block cursor-pointer select-none rounded-xl p-3 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">English</label>
            </div>
            <div className="bg-gray-200 ml-5 text-lg p-1 rounded-md">
            <input
                type="radio"
                name="language"
                value="la"
                className="peer hidden"
                id="la"
                onChange={handleChangeLanguage}
              />{" "}
                 <label htmlFor="la" className="block cursor-pointer select-none rounded-xl p-3 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">Lao</label>
            </div>
          </div>
        </div>

        <div className="max-w-lg  bg-gray-900 shadow-2xl rounded-lg m-auto text-center py-12 mt-4 ">
          <h1 className="text-gray-200 text-center font-extrabold -mt-3 text-3xl">
            Add product
          </h1>
          <div className="container py-5 max-w-md mx-auto">
            <div className="text-left">
              <label htmlFor="title" className="text-white ">
                Title
              </label>
            </div>
            <div className="mb-4">
              <input
                placeholder="Title"
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                name="title"
                onChange={(e) => handleChangeTrans(e)}
              />
            </div>

            <div className="text-left">
              <label htmlFor="slug" className="text-white ">
                Slug
              </label>
            </div>
            <div className="mb-4">
              <input
                placeholder="Slug"
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="slug"
                type="text"
                name="slug"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="text-left">
              <label htmlFor="price" className="text-white ">
                Price
              </label>
            </div>
            <div className="mb-4">
              <NumericFormat
                placeholder="Price"
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                name="price"
                defaultValue={formData.price}
                thousandSeparator={false}
                onValueChange={({ value }) => {
                  setFormData({
                    ...formData,
                    price: value,
                  });
                  console.log(value);
                }}
                maxLength={15}
              />
            </div>

            <div className="text-left">
              <label htmlFor="subitle" className="text-white ">
                Subtitle
              </label>
            </div>
            <div className="mb-4">
              <input
                placeholder="Subitle"
                className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subitle"
                type="text"
                name="subtitle"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="text-left">
              <label htmlFor="description" className="text-white ">
              Description
              </label>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-800 text-sm font-semibold mb-2"
                htmlFor=""
              ></label>
              <textarea
                className="appearance-none w-full p-3 text-xs font-semibold leading-none bg-gray-50 rounded outline-none"
                name="description"
                rows="3"
                placeholder="Write something..."
                onChange={(e) => handleChangeTrans(e)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="max-w-lg  bg-gray-900 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 ">
          <h1 className="text-gray-200 text-center font-extrabold -mt-3 text-3xl">
            Media
          </h1>
          <div className="container py-5 max-w-md mx-auto">
            <div className="text-left">
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 " htmlFor="image">
                Image
              </label>
            </div>
            <div className="flex justify-center  w-full">
              <input
                className="block w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                type="file"
                name="image"
                onChange={onFileChange}
              />
            </div>

            <div className="flex items-center justify-between mt-5">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};



export default AddProduct;

AddProduct.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
