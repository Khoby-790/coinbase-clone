/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BtcChart } from "../../../components";
import BtcIcon from "../../../assets/btcicon.png";

const TableRatingSection = () => {
  return (
    <div className="w-full mb-10  flex justify-center">
      <div className="w-4/5">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow-lg overflow-hidden border-b border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-white">
                    <tr className="py-3">
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Change
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Chart
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Trade
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={"bg-white hover:bg-gray-100"}>
                      <td className="px-6 py-7 whitespace-nowrap text-sm font-medium text-gray-900">
                        {1}
                      </td>
                      <td className="px-6 py-7 w-96 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex items-center flex-row">
                          <img
                            className="h-11 mr-4"
                            src={BtcIcon}
                            // height={null}
                            alt="btc"
                          />
                          <span>Bitcoin</span>
                        </div>
                      </td>
                      <td className="px-6 py-7 whitespace-nowrap text-xl">
                        GHS 280,930.47
                      </td>
                      <td className="px-6 py-7 whitespace-nowrap text-xl text-red-500">
                        -1.8%
                      </td>
                      <td className="px-6 py-7 whitespace-nowrap text-sm text-gray-500">
                        <BtcChart />
                      </td>
                      <td className="px-6 py-7 whitespace-nowrap text-sm font-medium">
                        <button
                          href="#"
                          className=" bg-green-500 p-2 outline-none focus:outline-none  text-white rounded-sm"
                        >
                          Buy
                        </button>
                      </td>
                    </tr>
                    <tr className={"bg-white hover:bg-gray-100"}>
                      <td className="px-6 py-7 whitespace-nowrap text-sm font-medium text-gray-900">
                        {1}
                      </td>
                      <td className="px-6 py-7 w-96 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex items-center flex-row">
                          <img
                            className="h-11 mr-4"
                            src={BtcIcon}
                            // height={null}
                            alt="btc"
                          />
                          <span>Bitcoin</span>
                        </div>
                      </td>
                      <td className="px-6 py-7 whitespace-nowrap text-xl">
                        GHS 280,930.47
                      </td>
                      <td className="px-6 py-7 whitespace-nowrap text-xl text-red-500">
                        -1.8%
                      </td>
                      <td className="px-6 py-7 whitespace-nowrap text-sm text-gray-500">
                        <BtcChart />
                      </td>
                      <td className="px-6 py-7 whitespace-nowrap text-sm font-medium">
                        <button
                          href="#"
                          className=" bg-green-500 p-2 outline-none focus:outline-none text-white rounded-sm"
                        >
                          Buy
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableRatingSection;
