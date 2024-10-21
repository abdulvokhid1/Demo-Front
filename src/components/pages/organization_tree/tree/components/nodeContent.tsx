import React from "react";
import { css } from "@emotion/css";

type ContentProps = {
  id: number;
  name?: string;
  memberId?: string;
  level?: string;
  createdAt?: string;
  onClickHandle?: (id: number) => void;
};
export const NodeContent = ({
  id,
  name,
  memberId,
  level,
  createdAt,
  onClickHandle,
}: ContentProps) => {
  return (
    <div
      className={css`
        color: red;
        position: relative;
        padding: 18px 0 0;
        margin: 0 5px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background: #f6f6f6;
        overflow: hidden;
        border: 1px solid red;

        box-sizing: border-box;
        display: inline-block;
        text-align: center;
        transition: transform 0.3s, opacity 0.3s;
      `}
    >
      <div
        className={css`
          padding: 5px 0;
          border-radius: 0;
          height: 20px;
          font-size: 12px;
          color: #212121;
          background-color: gray;
          background-color: rgba(0, 0, 0, 0.01);
          display: block;
          cursor: pointer;
          line-height: 85%;
        `}
      >
        {/*<i className="fa fa-users symbol"></i>*/}
        <p
          className={css`
            display: block;
            margin-block-start: 5px;
            margin-block-end: 1em;
            //margin-inline-start: 0px;
            //margin-inline-end: 0px;
            unicode-bidi: isolate;
          `}
        >
          {level ?? "정회원"}
        </p>
      </div>
      <div
        className={css`
          height: 50px;
          width: 150px;
          padding: 3px;
          border: 0;
          border-radius: 0;
          font-size: 11px;
          color: #212121;
          text-align: center;
          background: #ccc;
          display: block;
          cursor: pointer;
          line-height: 100%;
        `}
      >
        <div
          style={{
            background: "#ffe599",
            color: "black",
            margin: "-3px",
            width: "200%",
            height: "200%",
          }}
        >
          <div style={{ width: "52%", paddingTop: "10px" }}>
            {name ?? "호기동"}
            <span style={{ fontWeight: "normal", fontSize: "13px" }}>
              ({createdAt})
            </span>
            <br />
            <br />
            <p
              className="user_number"
              style={{ background: "#ffe599", color: "black" }}
              onClick={(e) => {
                // alert('Hello' + e.target)
                if (onClickHandle) {
                  // onClickHandle('200001')
                  onClickHandle(id ?? 1);
                }
              }}
            >
              {memberId ?? "2000001"}
            </p>
          </div>
          <p
            className="user_info"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              // alert('Hello' + e.target)
              if (onClickHandle) {
                // onClickHandle('200001')
                onClickHandle(id ?? 1);
              }
            }}
            data-uid="2000001"
          >
            <img src="/images/ic_my.gif" width="12" height="12" />
          </p>
        </div>
      </div>
      <i className="edge verticalEdge topEdge fa"></i>
      <i className="edge verticalEdge bottomEdge fa"></i>
    </div>
  );
};
