import { Avatar, Card } from "antd";
import React from "react";

const ActionsCard = () => {
  return (
    <Card className="max-w-4xl">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <Avatar size={45} />
          <div className="flex-col">
            <div className="font-semibold text-base">Ayush Agarwal</div>
            <div>2 hours ago</div>
          </div>
          <div className="text-blue-700 bg-blue-50 h-fit p-1 text-xs">
            QUESTION
          </div>
        </div>
        <div className="text-blue-700 bg-blue-50 h-fit p-1 text-xs border-r-2 border-blue-800 translate-x-[24px]">
          GROUP NAME
        </div>
      </div>

      <div className="mt-4">What is navachar?</div>
      <div className="flex mt-2 space-x-3 overflow-scroll scrollbar-hide">
        <img
          className="max-h-48 rounded-xl"
          src="https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?b=1&s=170667a&w=0&k=20&c=qxO3Yl7LBs5jewoI5eAWsLrVtEw0QyH4RdKwyZrALCg="
          alt=""
        />
        <img
          className="max-h-48 rounded-xl"
          src="https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?b=1&s=170667a&w=0&k=20&c=qxO3Yl7LBs5jewoI5eAWsLrVtEw0QyH4RdKwyZrALCg="
          alt=""
        />
        <img
          className="max-h-48 rounded-xl"
          src="https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?b=1&s=170667a&w=0&k=20&c=qxO3Yl7LBs5jewoI5eAWsLrVtEw0QyH4RdKwyZrALCg="
          alt=""
        />
      </div>
      <div className="mt-4 flex space-x-5">
        <button className="bg-[#0F943C] text-white px-10 text-base font-bold rounded-md py-2">
          Approve
        </button>
        <button className="text-[#940F0F] border-[#940F0F] border-2 px-10 text-base font-bold rounded-md py-2">
          Reject
        </button>
      </div>
    </Card>
  );
};

export default ActionsCard;
