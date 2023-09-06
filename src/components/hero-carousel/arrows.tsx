"use client";

export function NextArrow(props: any) {
  return (
    <>
      <div
        className={props.className}
        // className="item-end bg-slate-500"
        // style={{ ...props.style }}
        style={{ color: "red", padding: "10px" }}
        onClick={props.onClick}
      ></div>
    </>
  );
}

export function PrevArrow(props: any) {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style }}
        onClick={props.onClick}
      ></div>
    </>
  );
}
