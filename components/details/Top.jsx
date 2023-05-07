import Image from "next/image";
import React from "react";

export default function Top() {
  return (
    <div>
      <div className="w-100 topWrapper flex">
        <div className="topleft flex-1">
          <Image
            alt=""
            width={0}
            sizes="100vw"
            height={0}
            loading="lazy"
            src="https://avada.website/restaurant/wp-content/uploads/sites/112/2020/01/menu262x-600x687.jpg"
            className="w-100 h-100"
          />
        </div>
        <div className="topright flex-1">
          <div className="flex HeroRightC column gap-4 auto">
            <div className="family3 h1 text-white">California Wraps</div>
            <h4 className="fs-18 family2 text-light text-white">
              Tristique tempus condimentum diam donec. Condimentum ullamcorper
              sit elementum hendrerit mi nulla in consequat, ut. Metus, nullam
              scelerisque netus viverra dui pretium pulvinar. Commodo morbi
              amet.
            </h4>
            <div className="w-100 text-start">
              <button
                className="btn text-dark btn-2 family1 uppercase text-white text-light fs-14 py-1"
                style={{ padding: "1.8rem" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
