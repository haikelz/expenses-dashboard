import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { useState } from "react";
import { Chart } from "react-chartjs-2";

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  ChartJS.register(
    ArcElement,
    CategoryScale,
    BarElement,
    LinearScale,
    Tooltip,
    Legend
  );

  const data = [
    { activity: "Grocery", today: 326800 },
    { activity: "Transportation", today: 15000 },
    { activity: "Housing", today: 185750 },
    { activity: "Food and Drink", monday: 156000 },
    { activity: "Entertainment", monday: 35200 },
  ];

  return (
    <div className="bg-[#101010] w-full flex justify-center items-center min-h-screen text-white">
      <div className="flex w-full">
        <div className="w-[500px] hidden sticky top-0 left-0 max-h-screen min-h-screen xl:flex justify-center items-center">
          <div className="w-fit flex flex-col justify-between items-start h-[651px]">
            <div>
              <div className="w-fit relative">
                <img className="" src="/samantha.png" alt="samantha" />
                <div className="absolute -top-4 -right-4 w-8 h-8 text-center flex justify-center items-center bg-red-500 rounded-full">
                  4
                </div>
              </div>
              <h2 className="font-semibold text-3xl my-2">Samantha</h2>
              <p className="text-[17px] text-white/50 font-normal">
                samantha@email.com
              </p>
            </div>
            <ul className="space-y-6 pb-14">
              <li>
                <p className="font-semibold text-[25px] text-white/50">
                  Dashboard
                </p>
              </li>
              <li>
                <p className="font-semibold text-[25px] text-white">Expenses</p>
              </li>
              <li>
                <p className="font-semibold text-[25px] text-white/50">
                  Wallets
                </p>
              </li>
              <li>
                <p className="font-semibold text-[25px] text-white/50">
                  Summary
                </p>
              </li>
              <li>
                <p className="font-semibold text-[25px] text-white/50">
                  Accounts
                </p>
              </li>
              <li>
                <p className="font-semibold text-[25px] text-white/50">
                  Settings
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 w-full">
          <div className="w-full flex flex-col xl:flex-row bg-white rounded-xl">
            <div className="w-full relative py-6 px-8 md:py-14 md:px-16">
              <div className="w-full flex xl:hidden justify-end items-center">
                <button
                  type="button"
                  aria-label="open close navbar"
                  className="text-black"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <XMarkIcon /> : <BarIcon />}
                </button>
              </div>
              {isOpen ? (
                <div className="absolute xl:hidden p-5 top-14 bg-black right-10">
                  <ul className="space-y-2 mt-3">
                    <li>
                      <p className="font-semibold text-base text-white/50">
                        Dashboard
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold text-base text-white">
                        Expenses
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold text-base text-white/50">
                        Wallets
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold text-base text-white/50">
                        Summary
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold text-base text-white/50">
                        Accounts
                      </p>
                    </li>
                    <li>
                      <p className="font-semibold text-base text-white/50">
                        Settings
                      </p>
                    </li>
                  </ul>
                </div>
              ) : null}
              <div className="mt-3 xl:mt-0">
                <div>
                  <div className="flex w-full justify-between items-center">
                    <div>
                      <h1 className="font-semibold text-[40px] text-[#262A41]">
                        Expenses
                      </h1>
                      <p className="text-base text-[#101010]/50">
                        01 - 25 March, 2020
                      </p>
                    </div>
                    <div className="flex justify-center items-center space-x-1">
                      <div className="justify-center hidden sm:flex items-center">
                        <img src="/user-1.svg" alt="user 1" />
                        <img src="/user-2.svg" alt="user 2" />
                        <img src="/user-3.svg" alt="user 3" />
                      </div>
                      <img src="/plus.svg" alt="plus" />
                    </div>
                  </div>
                  <Chart
                    className="my-6"
                    type="bar"
                    data={{
                      labels: data.map((item) => item.activity),
                      datasets: [
                        {
                          label: "Today",
                          data: data.map((item) => item.today),
                          backgroundColor: "#793FDF",
                        },
                        {
                          label: "Monday",
                          data: data.map((item) => item.monday),
                          backgroundColor: "#FFFD8C",
                        },
                      ],
                    }}
                  />
                </div>
                <div className="space-y-10">
                  <div className="w-full space-y-5">
                    <div className="flex justify-between border-b py-2 my-5 items-center w-full">
                      <h4 className="text-lg text-[#262A41] font-semibold">
                        Today
                      </h4>
                      <div className="flex space-x-1">
                        <div className="w-[5px] h-[5px] rounded-full bg-[#979797]/50"></div>
                        <div className="w-[5px] h-[5px] rounded-full bg-[#979797]/50"></div>
                        <div className="w-[5px] h-[5px] rounded-full bg-[#979797]/50"></div>
                      </div>
                    </div>
                    <div className="w-full flex justify-center items-start space-y-5 flex-col">
                      <div className="flex justify-start w-full space-x-4 items-center">
                        <div className="w-[48px] p-4 h-[48px] bg-[#32A7E2] flex justify-center items-center rounded-full">
                          <img src="/grocery.svg" alt="grocery" />
                        </div>
                        <div className="flex w-full justify-between items-center">
                          <div className="w-full">
                            <div className="flex w-full justify-between items-center">
                              <h5 className="font-medium text-base text-[#273240]">
                                Grocery
                              </h5>
                              <p className="text-[#273240] font-semibold">
                                -326.800
                              </p>
                            </div>
                            <p className="text-sm mt-1 text-[#404852]/50">
                              5:12 pm • Belanja di pasar
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full justify-center space-x-4 items-center">
                        <div className="w-[48px] p-4 h-[48px] bg-[#B548C6] flex justify-center items-center rounded-full">
                          <img src="/transportation.svg" alt="transportation" />
                        </div>
                        <div className="flex w-full justify-between items-center">
                          <div className="w-full">
                            <div className="flex w-full justify-between items-center">
                              <h5 className="font-medium text-base text-[#273240]">
                                Transportation
                              </h5>
                              <p className="text-[#273240] font-semibold">
                                -15.000
                              </p>
                            </div>
                            <p className="text-sm mt-1 text-[#404852]/50">
                              5.12 pm • Naik bus umum
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full justify-center space-x-4 items-center">
                        <div className="w-[48px] p-4 h-[48px] bg-[#FF8700] flex justify-center items-center rounded-full">
                          <img src="/housing.svg" alt="housing" />
                        </div>
                        <div className="flex w-full justify-between items-center">
                          <div className="w-full">
                            <div className="flex justify-between items-center">
                              <h5 className="font-medium text-base text-[#273240]">
                                Housing
                              </h5>
                              <p className="text-[#273240] font-semibold">
                                -185.750
                              </p>
                            </div>
                            <p className="text-sm mt-1 text-[#404852]/50">
                              5:12 pm • Bayar Listrik
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full space-y-5">
                    <div className="flex justify-between border-b py-2 my-5 items-center w-full">
                      <h4 className="text-lg text-[#262A41] font-semibold">
                        Monday, 23 March 2020
                      </h4>
                      <div className="flex space-x-1">
                        <div className="w-[5px] h-[5px] rounded-full bg-[#979797]/50"></div>
                        <div className="w-[5px] h-[5px] rounded-full bg-[#979797]/50"></div>
                        <div className="w-[5px] h-[5px] rounded-full bg-[#979797]/50"></div>
                      </div>
                    </div>
                    <div className="w-full flex justify-center items-start space-y-5 flex-col">
                      <div className="flex justify-start w-full space-x-4 items-center">
                        <div className="w-[48px] p-4 h-[48px] bg-[#DC3434] flex justify-center items-center rounded-full">
                          <img src="/food-and-drink.svg" alt="food and drink" />
                        </div>
                        <div className="flex w-full justify-between items-center">
                          <div className="w-full">
                            <div className="flex justify-between items-center">
                              <h5 className="font-medium text-base text-[#273240]">
                                Food and Drink
                              </h5>
                              <p className="text-[#273240] font-semibold">
                                -156.000
                              </p>
                            </div>
                            <p className="text-sm mt-1 text-[#404852]/50">
                              5:12 pm • Makan steak
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-full justify-start space-x-4 items-center">
                        <div className="w-[48px] p-4 h-[48px] bg-[#4BA83D] flex justify-center items-center rounded-full">
                          <img src="/entertainment.svg" alt="entertainment" />
                        </div>
                        <div className="flex w-full justify-between items-center">
                          <div className="w-full">
                            <div className="flex justify-between items-center">
                              <h5 className="font-medium text-base text-[#273240]">
                                Entertainment
                              </h5>
                              <p className="text-[#273240] font-semibold">
                                -35.200
                              </p>
                            </div>
                            <p className="text-sm mt-1 text-[#404852]/50">
                              5:12 pm • Nonton Bioskop
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F9FAFC] py-6 px-8 md:py-14 md:px-16 w-full rounded-xl">
              <div>
                <h4 className="font-semibold text-xl text-[#262A41]">
                  Where your money go?
                </h4>
                <div className="mt-8 space-y-8">
                  <div className="">
                    <div className="flex justify-between items-center w-full">
                      <p className="text-[#273240] text-[14px] font-medium">
                        Food and Drinks
                      </p>
                      <span className="text-[13px] text-[#273240]">
                        872.400
                      </span>
                    </div>
                    <div className="w-full mt-2 relative h-2 rounded-full bg-[#ECEFF5]">
                      <div className="bg-[#31BA96] w-[70px] h-2 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="text-[#273240] text-[14px] font-medium">
                        Shopping
                      </p>
                      <span className="text-[13px] text-[#273240]">
                        1.378.200
                      </span>
                    </div>
                    <div className="w-full mt-2 relative h-2 rounded-full bg-[#ECEFF5]">
                      <div className="bg-[#31BA96] w-[110px] h-2 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="text-[#273240] text-[14px] font-medium">
                        Housing
                      </p>
                      <span className="text-[13px] text-[#273240]">
                        928.500
                      </span>
                    </div>
                    <div className="w-full mt-2 relative h-2 rounded-full bg-[#ECEFF5]">
                      <div className="bg-[#31BA96] w-[90px] h-2 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="text-[#273240] text-[14px] font-medium">
                        Transportation
                      </p>
                      <span className="text-[13px] text-[#273240]">
                        420.700
                      </span>
                    </div>
                    <div className="w-full mt-2 relative h-2 rounded-full bg-[#ECEFF5]">
                      <div className="bg-[#31BA96] w-[60px] h-2 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="text-[#273240] text-[14px] font-medium">
                        Vehicle
                      </p>
                      <span className="text-[13px] text-[#273240]">
                        520.000
                      </span>
                    </div>
                    <div className="w-full mt-2 relative h-2 rounded-full bg-[#ECEFF5]">
                      <div className="bg-[#31BA96] w-[90px] h-2 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-24 p-6 rounded-xl justify-center items-center bg-[#EDF0F6]">
                <div className="flex justify-between w-full relative items-center">
                  <img src="/box.svg" alt="box" className="absolute left-0" />
                  <img
                    src="/flower.svg"
                    alt="flower"
                    className="absolute right-0"
                  />
                </div>
                <div className="mt-14">
                  <h4 className="text-[#273240] font-semibold text-base">
                    Save More Money
                  </h4>
                  <p className="text-[#404852]/70 my-3 text-xs">
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim.
                  </p>
                  <button
                    className="bg-[#101010] rounded-md font-semibold text-[13px] p-4 w-full"
                    type="button"
                    aria-label="View Tips"
                  >
                    View Tips
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function XMarkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function BarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}
