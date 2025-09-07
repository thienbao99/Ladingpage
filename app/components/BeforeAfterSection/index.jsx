"use client";

import React from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export default function BeforeAfterSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trước & Sau Tối Ưu
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          So sánh trực quan website trước và sau khi tối ưu hóa: 
          tốc độ nhanh hơn, bố cục gọn gàng, chuẩn SEO.
        </p>

        {/* Slider */}
        <div className="mt-10">
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src="/images/before.png" // ảnh trước tối ưu (public/images/)
                alt="Website trước tối ưu"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="/images/after.png" // ảnh sau tối ưu
                alt="Website sau tối ưu"
              />
            }
            style={{
              width: "100%",
              maxWidth: "900px",
              height: "500px",
              margin: "0 auto",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          />
        </div>
      </div>
    </section>
  );
}
