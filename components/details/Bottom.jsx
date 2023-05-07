import React from "react";

export default function Bottom() {
  return (
    <div>
      <div className="w-100 flex item-start gap-4 justify-space topWrapper">
        <div className="flex column gap-4 flex-1">
          <div className="family3 fs-26 uppercase text-light text-dark">
            Additional informations
          </div>
          <h4 className="family2 fs-18 uppercase text-light text-dark">
            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec
            sollicitudin molestie malesuada. Proin eget tortor risus. Nulla
            porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id
            imperdiet et, porttitor at sem. Donec sollicitudin molestie
            malesuada.
          </h4>
        </div>
        <div style={{ gap: ".6rem" }} className="flex column flex-1">
          <div className="details flex" style={{ gap: ".6rem" }}>
            <div className="detailsInfoL fs-20 text-center family3">
              Calories
            </div>
            <div className="detailsInfoR fs-20 family2">860</div>
          </div>
          <div className="details flex" style={{ gap: ".6rem" }}>
            <div className="detailsInfoL fs-20 text-center family3">
              Calories
            </div>
            <div className="detailsInfoR fs-20 family2">860</div>
          </div>
          <div className="details flex" style={{ gap: ".6rem" }}>
            <div className="detailsInfoL fs-20 text-center family3">
              Calories
            </div>
            <div className="detailsInfoR fs-20 family2">860</div>
          </div>
        </div>
      </div>
    </div>
  );
}
