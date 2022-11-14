import React from 'react'
import {PlusCircleIcon} from '@heroicons/react/24/outline'

export default function AddForm() {
  return (
    <>
          <div className="space-y-6 flex flex-col bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-3 space-y-3">
                
                  <div className="mt-1 flex rounded-md shadow-md">
                    <span className="inline-flex items-center rounded-l-md  border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 p-3 flex-[0.2]">
                      Name
                    </span>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="block w-full flex-[0.8] rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-1"
                      placeholder="Product Title"
                      // {...blogValues.getFieldProps("title")}
                    />
                  </div>
                
                  <div className="mt-1 flex rounded-md shadow-md">
                    <span className="inline-flex items-center rounded-l-md  border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 p-3 flex-[0.2]">
                      Price
                    </span>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="block w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-1 flex-[0.8]"
                      placeholder="Product Price"
                      // {...blogValues.getFieldProps("title")}
                    />
                  </div>

                  <div className="mt-1 flex flex-1 rounded-md shadow-md">
                    <span className="inline-flex items-center rounded-l-md  border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 p-3 flex-[0.2]">
                      Category
                    </span>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="block w-full  rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-1 flex-[0.8]"
                      placeholder="Product Price"
                      // {...blogValues.getFieldProps("title")}
                    />
                  </div>
              </div>

              <div className="col-span-3 sm:col-span-3">
                <label
                  htmlFor="content"
                  className="block text-sm font-bold text-gray-700"
                >
                  Description
                </label>
                <div className="flex gap-5 items-center">
                  <div className="mt-1 flex flex-grow rounded-md shadow-sm">
                    <div className="w-full">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-transparent focus:ring-transparent sm:text-sm h-[150px] overflow-auto resize-none"
                        placeholder="Description"
                       
                      />
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="col-span-3 sm:col-span-2">
                <div className='flex items-center gap-3'>
                  <label className="block text-sm font-bold text-gray-700">
                    Photo
                  </label>

                  <div className="mt-1 flex items-center">
                    {/* File Input */}
                    <label
                      htmlFor="imageURL"
                      className="mr-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2"
                    >
                      <div className="w-7">

                      <PlusCircleIcon className='w-full' />
                      </div>
                    </label>
                    <input
                      type="file"
                      id="imageURL"
                      name="imageURL"
                      accept="image/*"
                      className="hidden"
                      
                    />

                    
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <button type="submit" className="self-end btn btn-outline">
                {/* {blogValues.isSubmitting
                  ? "Publishing..."
                  : state
                  ? "Update Post"
                  : "Publish Post"} */}
              </button>
              
            </div>
          </div>
    </>
  )
}
