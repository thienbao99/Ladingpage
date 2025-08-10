"use client"; // ✅ Thêm dòng này đầu tiên

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const Tag = ({ text, bg, color = "#000" }) => {
    return (
        <div className='rounded-full p-2' style={{ backgroundColor: bg }}>
            <h1 className='text-sm' style={{ color }}>{text}</h1>
        </div>
    );
};

export default function BeforeAfter() {
    const [befores, setBefores] = useState([
        { name: 'List 1', checked: false },
        { name: 'List 2', checked: true },
        { name: 'List 3', checked: true },
        { name: 'List 4', checked: false },
    ]);

    const afters = [
  { day: 'Day 1', name: 'Read pages 1-10', time: '8:00 AM', status: 'done' },
  { day: 'Day 2', name: 'Read pages 11-20', time: '9:00 AM', status: 'doing' },
  { day: 'Day 3', name: 'Read pages 21-30', time: '10:00 AM', status: 'waiting' },
  { day: 'Day 4', name: 'Read pages 31-40', time: '11:00 AM', status: 'done' },
  { day: 'Day 5', name: 'Read pages 41-50', time: '1:00 PM', status: 'doing' },
  { day: 'Day 6', name: 'Read pages 51-60', time: '2:00 PM', status: 'waiting' },
];


    const renderColor = {
        done: '#16a34a',
        doing: '#15a3c3',
        waiting: '#bec2c2'
    };

    const handleCheckboxChange = (index) => {
        const updated = [...befores];
        updated[index].checked = !updated[index].checked;
        setBefores(updated);
    };
    const [currentIndex, setCurrentIndex] = useState(1); // bắt đầu từ phần tử thứ 2 cho có trái - giữa - phải

const handleNext = () => {
  if (currentIndex < afters.length - 1) {
    setCurrentIndex(currentIndex + 1);
  }
};

const handlePrev = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
};

// Lấy 3 phần tử: trước, hiện tại, sau
const visibleAfters = afters.slice(
  Math.max(0, currentIndex - 1),
  Math.min(afters.length, currentIndex + 2)
);

  

    return (
        <div className='w-full flex flex-col items-center p-10'>
            <h1 className='text-black text-3xl font-bold'>Say good bye to boring list,</h1>
            <h1 className='text-black text-3xl font-bold'>Shout out to the fresh style</h1>
            <div className='flex w-full justify-center p-10 gap-10'>
                <div className='w-1/3 bg-gray-100 h-[500px] flex flex-col justify-between items-center p-5 rounded-md'>
                    <Tag text="Before" bg="#16a34a" color="#fff" />
                    <div className='flex flex-col gap-4 w-full'>
                        {befores.map((before, index) => (
                            <div key={index} className='flex items-center gap-2 bg-white p-4 rounded-2xl'>
                                <input
                                    type='checkbox'
                                    checked={before.checked}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                <span className={before.checked ? "line-through" : ""}>
                                    {before.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repudiandae numquam,
                    </p>
                </div>

                <div className='w-[500px] bg-gray-100 h-[500px] overflow-hidden flex flex-col justify-between items-center py-5 rounded-md'>

  <Tag text="After" bg="#ddd236" color="#fff" />

  {/* Nút + Nội dung After */}
  <div className="flex items-center justify-center gap-2 w-full relative px-2">
    {/* Nút trái */}
    <Button variant="secondary" size="icon" className="size-8" onClick={handlePrev}>
      <ChevronLeftIcon />
    </Button>

    {/* Nội dung After (3 item hiển thị) */}
    <div className="flex gap-4 overflow-hidden w-[90%]">
      {visibleAfters.map((after, index) => (
        <div key={index} className='flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-2xl min-w-[120px]'>
          <Tag text={after.day} bg={renderColor[after.status]} color="#fff" />
          <h2 className={`text-xl font-bold text-center ${after.status === 'done' ? 'line-through text-gray-200' : ''}`}>
            {after.name}
          </h2>
          <span className='text-gray-200 text-xs'>
            {after.time}
          </span>
        </div>
      ))}
    </div>

    {/* Nút phải */}
    <Button variant="secondary" size="icon" className="size-8" onClick={handleNext}>
      <ChevronRightIcon />
    </Button>
  </div>

  {/* Nội dung mô tả bên dưới */}
  <p className="text-center mt-4 px-2 text-sm text-gray-700">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repudiandae numquam,
  </p>
</div>

            </div>
        </div>
    );
}
