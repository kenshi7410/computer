// trang chủ chính
import { SearchOutlined } from "@ant-design/icons";
import { Footer, Header } from "antd/es/layout/layout";
import React from "react";
import MenuHome from "./MenuHome";

const Home = () => {
  let thu_nghiem = [
    "vùng 1",
    "vùng 1",
    "vùng 1",
    "vùng 1",
    "vùng 1",
    "vùng 1",
    "vùng 1",
    "vùng 1",
  ];
  return (
    <div>
      <Header className="flex flex-nowrap text-4xl  bg-white">
        <span class="basis-2/12 text-center h-auto">logo</span>
        <div class="basis-7/12 text-center ">
          <input type="search" className=" bg-slate-300" />
          <button className="bg-red-600 text-white rounded -ml-6">
            <div className="h-auto inline">
              <SearchOutlined className="align-top mt-1" />
            </div>
            <span>Tìm kiếm</span>
          </button>
        </div>
        <div class="basis-2/12 text-right">
          <span className="">đăng nhập</span>
        </div>
        <div class="basis-1/12 text-center">
          <span className="">giỏ hàng</span>
        </div>
      </Header>

      <div>
        <div>
        <MenuHome />
        </div>
        <div></div>
      </div>

      {/* <Footer className="mt-80">
        <div className="flex flex-wrap">
          {thu_nghiem.map((item) => {
            return (
              <div className="basis-1/4 p-5">
                <h1>sadasdadasdas</h1> 
                <h1>sadasdadasdas</h1>
                <h1>sadasdadasdas</h1>
                <h1>sadasdadasdas</h1>
                <h1>sadasdadasdas</h1>
                <h1>sadasdadasdas</h1>               
                <h1>{item}</h1>
              </div>
            );
          })}
        </div>
      </Footer> */}
    </div>
  );
};

export default Home;
