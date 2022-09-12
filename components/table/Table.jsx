/* eslint-disable @next/next/no-img-element */
import React from "react";

const Table = () => {
  return (
    <div>
      <section className=" pl-64 bg-coolGray-50 py-10 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -m-2 mb-4">
            <div className="w-full md:w-1/2 p-2">
              <p className="font-semibold text-xl text-coolGray-800">
                Productss
              </p>
            </div>
          </div>
          <div className="overflow-hidden border border-coolGray-100 rounded-md shadow-dashboard">
            <div className="">
              <table className=" w-full">
                <tbody>
                  <tr className=" mb-4 border-b border-gray-200 whitespace-nowrap h-11 bg-coolGray-50 bg-opacity-80 border-coolGray-100">
                    <div className="">
                      <ul
                        className="flex flex-wrap -mb-px text-sm font-medium text-center"
                        id="myTab"
                        data-tabs-toggle="#myTabContent"
                        role="tablist"
                      >
                        <li className="mr-2" role="presentation">
                          <button
                            className=" px-5 inline-block p-4 rounded-t-lg border-b-2 border-transparent text-gray-500  hover:text-black hover:border-green-500 dark:hover:text-gray-300"
                            id="profile-tab"
                            data-tabs-target="#profile"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            All
                          </button>
                        </li>
                        <li className="mr-2" role="presentation">
                          <button
                            className="inline-block p-4 rounded-t-lg border-b-2 border-transparent text-gray-500  hover:text-black hover:border-green-500 dark:hover:text-gray-300"
                            id="dashboard-tab"
                            data-tabs-target="#dashboard"
                            type="button"
                            role="tab"
                            aria-controls="dashboard"
                            aria-selected="false"
                          >
                            Active
                          </button>
                        </li>
                        <li className="mr-2" role="presentation">
                          <button
                            className="inline-block p-4 rounded-t-lg border-b-2 border-transparent text-gray-500  hover:text-black hover:border-green-500 dark:hover:text-gray-300"
                            id="settings-tab"
                            data-tabs-target="#settings"
                            type="button"
                            role="tab"
                            aria-controls="settings"
                            aria-selected="false"
                          >
                            Draft
                          </button>
                        </li>
                        <li role="presentation">
                          <button
                            className="inline-block p-4 rounded-t-lg border-b-2 border-transparent text-gray-500  hover:text-black hover:border-green-500 dark:hover:text-gray-300"
                            id="contacts-tab"
                            data-tabs-target="#contacts"
                            type="button"
                            role="tab"
                            aria-controls="contacts"
                            aria-selected="false"
                          >
                            Archived
                          </button>
                        </li>
                      </ul>
                    </div>
                  </tr>
                  <tr className="whitespace-nowrap h-11 bg-coolGray-50 bg-opacity-80 border-b border-coolGray-100">
                    <th className="px-4 text-xs text-gray-400 uppercase text-left">
                      <div className="flex items-center">
                        <input
                          className="mr-3 w-4 h-4 bg-white rounded"
                          type="checkbox"
                        />
                        <p className=" px-40 ">Product</p>
                      </div>
                      
                    </th>
                    <th className="whitespace-nowrap text-gray-400 text-xs text-coolGray-500 uppercase text-left">
                      Status
                    </th>
                    <th className="whitespace-nowrap text-gray-400 px-10 text-xs text-coolGray-500 uppercase text-center">
                      Inventory
                    </th>
                    <th className="whitespace-nowrap text-gray-400 px-4 text-xs text-coolGray-500 uppercase text-left">
                      Type
                    </th>
                    <th className="whitespace-nowrap text-gray-400 px-4 text-xs text-coolGray-500 uppercase text-center">
                      Vendor
                    </th>
                  </tr>
                  <tr className="h-18 border-b border-coolGray-100">
                    <th className="whitespace-nowrap px-4 bg-white text-left">
                      <div className="flex items-center -m-2">
                        <div className="w-auto p-2">
                          <input
                            className="w-4 h-4 bg-white rounded"
                            type="checkbox"
                          />
                        </div>
                        <div className="w-auto p-2">
                          <img
                            src="images/face.jpg"
                            alt=""
                            className="w-12 h-12 rounded-full dark:bg-gray-500"
                          />
                        </div>
                        <div className=" px-24 no-underline hover:underline" href="/">
                          <h1>Jorden 1</h1>
                        </div>

                      </div>
                    </th>
                    <th className="whitespace-nowrap bg-white text-sm font-medium text-coolGray-800 text-left">
                      Active
                    </th>
                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">
                      24
                    </th>
                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-left">
                      $2,855.00
                    </th>
                    <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">
                      5
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Table;
