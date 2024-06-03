import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

import DefaultLayout from '../../layout/DefaultLayout';

const FormElements = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Form Elements" />

      <div className="grid grid-cols-1 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Personal Information
              </h3>
            </div>
            
            <div className="p-7">
              <form action="#">
                {/* input group1 */}

                {/* input group2 */}
                <div className='mb-5.5 flex flex-col gap-5.5 sm:flex-row'>
                  {/* input 1 */}
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="phoneNumber"
                    >
                      Phone Number
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="+990 3343 7865"
                      defaultValue="+990 3343 7865"
                    />
                  </div>

                  {/* input 2 */}
                  <div className="w-full sm:w-1/2">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Address"
                    >
                      Address
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>

                {/* imput group3 */}
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  <div className="w-full sm:w-1/3">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Age"
                    >
                      Age
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="Age"
                        id="Age"
                        placeholder="Age"
                        defaultValue=""
                      />
                    </div>
                  </div>

                  <div className="w-full sm:w-1/3">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Gender"
                    >
                      Gender
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="Gender"
                      placeholder="Gender"
                      defaultValue=""
                    />
                  </div>


                  <div className="w-full sm:w-1/3">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="City"
                    >
                      City
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="City"
                      placeholder="City"
                      defaultValue=""
                    />
                  </div>
                </div>

                {/* imput group4 */}
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  <div className="w-full sm:w-1/4">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Pincode"
                    >
                      Pincode
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="Pincode"
                        id="Pincode"
                        placeholder="Pincode"
                        defaultValue=""
                      />
                    </div>
                  </div>

                  <div className="w-full sm:w-1/4">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="District"
                    >
                      District
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="District"
                      placeholder="District"
                      defaultValue=""
                    />
                  </div>


                  <div className="w-full sm:w-1/4">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="State"
                    >
                      State
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="State"
                      placeholder="State"
                      defaultValue=""
                    />
                  </div>

                  <div className="w-full sm:w-1/4">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Country"
                    >
                      Country
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="Country"
                      placeholder="Country"
                      defaultValue=""
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4.5">
                  <button
                    className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                    type="submit"
                  >
                    Cancel
                  </button>
                  <button
                    className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </DefaultLayout>
  );
};

export default FormElements;
