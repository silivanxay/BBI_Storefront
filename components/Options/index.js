import React, { useState, useEffect } from "react";
import { useRef } from "react";
import postAPI from "./util";
import { useForm} from "react-hook-form";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const initialStates = {
  display: true,
};

export default function Options({ url, method }) {
  const form = useRef(null);
  const execRequest = (values, event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const result = postAPI(method, url, formData);
    console.log(result);
  };
  console.log("url", url);

  const [display, setDisplay] = useState(initialStates);

  const [allPlayers, setAllPlayers] = useState([{}]);

  const [enabled, setEnabled] = useState(false);

  const { register, control, handleSubmit, formState, setValue } = useForm();

  const handleAddPlayers = () => {
    const values = [...allPlayers];
    values.push({});
    setAllPlayers(values);
  };

  const handleRemovePlayers = (index) => {
    const values = [...allPlayers];
    values.splice(index, 1);
    setAllPlayers(values);
  };

  console.log(allPlayers);

  useEffect(() => {
    document.getElementById("option_form").classList.toggle("hidden");
  }, [display]);

  const colourOptionsName = [
    {label: "Color",value: "Color",},
    {label: "Size",value: "Size"},
    {label: "Materil",value: "Materil",},
    {label: "Style",value: "Style"},
  ];

  const colourOptionsType = [
    {label: "True / False",value: "Boolean",},
    {label: "Text",value: "Text",},
    {label: "Integer",value: "Integer",},
    {label: "Float",value: "Float",},
    {label: "Date",value: "Date",},
  ];

  return (
    <>
    <div className="max-w-lg  bg-gray-200 shadow-2xl rounded-lg m-auto text-center py-12 mt-4">
      <form
        action={url}
        ref={form}
        method={method}
        onSubmit={handleSubmit(execRequest)}
        encType="multipart/form-data"
      >
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            id="required"
            name="required"
            {...register("required")}
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            onChange={() => {
              setDisplay(!display);
              console.log(display);
            }}
            readOnly
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className="w-11 h-6 bg-gray-500 rounded-full peer  peer-focus:ring-sky-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500"
          ></div>
          <span className="ml-2 text-sm font-medium text-gray-900">
            Add options
          </span>
        </label>

        <div className="container py-5 max-w-md mx-auto" id="option_form">
          <row className="justify-content-center max-w-md">
            {allPlayers.length > 0 && (
              <>
                {allPlayers.map((index) => (
                  <>
                    <div className="add-player-div">
                      <div className="text-left py-2">
                        <label htmlFor="name" className="text-black ">
                          Option Name
                        </label>
                      </div>
                    </div>
                    <CreatableSelect
                      id="name"
                      name="name"
                      {...register("name")}
                      className="text-left rounded-2xl"
                      isClearable
                      options={colourOptionsName}
                      placeholder="name"
                    />
                    <div className="add-player-div">
                      <div className="text-left py-2">
                        <label htmlFor="name" className="text-black ">
                          Option Type
                        </label>
                      </div>
                    </div>
                    <Select
                      id="type"
                      name="type"
                      {...register("type")}
                      className="text-left rounded-2xl"
                      isClearable
                      options={colourOptionsType}
                      placeholder="type"
                    />
                    <div className="add-player-div">
                      <div className="text-left py-2">
                        <label htmlFor="name" className="text-black ">
                          Option Type
                        </label>
                      </div>
                    </div>
                    <input
                      type="text"
                      id="value"
                      name="value"
                      placeholder="Midium"
                      className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      {...register("value")}
                    />

                    <div className="flex items-center justify-between mt-5 py-1">
                      <button
                        className="bg-sky-500 hover:bg-sky-700 hover:text-black text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Done
                      </button>

                      <button
                        className="bg-red-500 hover:bg-red-700 hover:text-black text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={() => handleRemovePlayers(index)}
                      >
                        delete
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-5"></div>
                  </>
                ))}
              </>
            )}
            <div className="flex items-center justify-between mt-5">
              <button
                className="bg-sky-500 hover:bg-sky-700 hover:text-black text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => handleAddPlayers()}
              >
                + Add another option
              </button>
            </div>
          </row>
        </div>
      </form>
      </div>
    </>
  );
}
