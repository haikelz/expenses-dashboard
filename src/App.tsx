import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";

export default function App() {
  ChartJS.register(
    ArcElement,
    CategoryScale,
    BarElement,
    LinearScale,
    Tooltip,
    Legend
  );

  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  return (
    <div className="bg-[#101010] w-full flex justify-center items-center min-h-screen text-white">
      <div className="flex w-full">
        <div className="w-[500px] sticky top-0 left-0 max-h-screen min-h-screen p-10">
          <div className="w-fit">
            <div className="w-fit relative">
              <img className="" src="/samantha.png" alt="samantha" />
              <div className="absolute top-0 right-0 w-8 h-8 text-center flex justify-center items-center bg-red-500 rounded-full">
                4
              </div>
            </div>
            <h2 className="font-semibold text-3xl my-1">Samantha</h2>
            <p className="text-[17px] text-white/50 font-normal">
              samantha@email.com
            </p>
            <ul className="space-y-6">
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
          <div className="w-full flex bg-white rounded-xl">
            <div className="w-full p-10">
              <div>
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
                    <div className="flex justify-center items-center space-x-3">
                      <div className="flex justify-center items-center">
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
                      labels: data.map((item) => item.year),
                      datasets: [
                        {
                          label: "Pengeluaran",
                          data: data.map((item) => item.count),
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
                        <div className="w-[48px] h-[48px] bg-[#32A7E2] flex justify-center items-center rounded-full">
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
                        <div className="w-[48px] h-[48px] bg-[#B548C6] flex justify-center items-center rounded-full">
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
                        <div className="w-[48px] h-[48px] bg-[#FF8700] flex justify-center items-center rounded-full">
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
                        <div className="w-[48px] h-[48px] bg-[#DC3434] flex justify-center items-center rounded-full">
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
                        <div className="w-[48px] h-[48px] bg-[#4BA83D] flex justify-center items-center rounded-full">
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
            <div className="bg-[#F9FAFC] w-full rounded-xl">
              <div>
                <h4 className="font-semibold text-xl text-[#262A41]">
                  Where your money go?
                </h4>
                <div>
                  <p className="text-[#273240] text-[14px] font-medium">
                    Food and Drinks
                  </p>
                  <span className="text-[13px] text-[#273240]">872.400</span>
                </div>
                <div>
                  <p className="text-[#273240] text-[14px] font-medium">
                    Shopping
                  </p>
                  <span className="text-[13px] text-[#273240]">1.378.200</span>
                </div>
                <div>
                  <p className="text-[#273240] text-[14px] font-medium">
                    Housing
                  </p>
                  <span className="text-[13px] text-[#273240]">928.500</span>
                </div>
                <div>
                  <p className="text-[#273240] text-[14px] font-medium">
                    Transportation
                  </p>
                  <span className="text-[13px] text-[#273240]">420.700</span>
                </div>
                <div>
                  <p className="text-[#273240] text-[14px] font-medium">
                    Vehicle
                  </p>
                  <span className="text-[13px] text-[#273240]">520.000</span>
                </div>
              </div>
              <div className="flex flex-col bg-[#EDF0F6]">
                <div className="flex justify-between items-center">
                  <img src="/box.svg" alt="box" />
                  <img src="/flower.svg" alt="flower" />
                </div>
                <div>
                  <h4 className="text-[#273240] font-semibold text-base">
                    Save More Money
                  </h4>
                  <p className="text-[#404852] text-xs">
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim.
                  </p>
                  <button
                    className="bg-[#101010] rounded-md font-semibold text-[13px] p-4"
                    type="button"
                    aria-label="view tips"
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
