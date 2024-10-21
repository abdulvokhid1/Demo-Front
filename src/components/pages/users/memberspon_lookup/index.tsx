"use client";
import { CreatedAtType, UserInfo } from "@/utils/types/type";
import React, { useEffect, useState } from "react";
import { message } from "antd";
import { useMutation } from "@tanstack/react-query";
import USER_API from "@/services/api/users";
import LEVEL_API from "@/services/api/levels";
import { LevelTypeProps } from "@/services/api/levels/type";
import { useRouter } from "next/navigation";
import PAGE_ROUTES from "@/utils/constants/routes";
import { useSetRecoilState } from "recoil";
import { userSelectedKey } from "@/services/recoil/selectedKey";

const MemberLookup = () => {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const [sliderVisible, setSliderVisible] = useState(true);
  const [isSelectedHover, setIsSelectedHover] = useState(false);
  const [isSelectedClicked, setIsSelectedClicked] = useState(false);
  const [userListState, setUserListState] = useState<UserInfo[]>([]);
  const [createdAt, setCreatedAt] = useState<CreatedAtType>({});
  const [levels, setLevels] = useState<LevelTypeProps[]>([]);
  const [memberId, setMemberId] = useState<string>();
  const [centerId, setCenterId] = useState<number>(0);
  const [email, setEmail] = useState<string>();
  const [idState, setIdState] = useState<number>(0);
  const [nameState, setNameState] = useState<string>("");
  const [userName, setUserName] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(2);
  const setSelectedKey = useSetRecoilState(userSelectedKey);
  const { mutate: mutateLevel } = useMutation({
    mutationFn: LEVEL_API.getList,
    onSuccess: async (values: any) => {
      setLevels(values);
      console.log(JSON.stringify(levels));
    },
    onError: (error: any) => {
      if (error.response.status === 401) {
        router.push(PAGE_ROUTES.AUTH.LOGIN);
      }
    },
  });
  const { isPending, mutate, isSuccess, isError } = useMutation({
    mutationFn: USER_API.getList,
    onSuccess: async (values: any) => {
      setUserListState(values.users);
      setTotalUsers(values.total);
      console.log(JSON.stringify(userListState));
    },

    onError: (error: any) => {
      if (error.response.status === 401) {
        router.push(PAGE_ROUTES.AUTH.LOGIN);
      }
    },
  });
  useEffect(() => {
    setSelectedKey(0);
    mutateLevel();
  }, []);

  const onSubmit = async (formData: FormData) => {
    const memberId = formData.get("pass_id");
    const name = formData.get("pass_name");
    const level = formData.get("sst");

    const params = {
      memberId: memberId?.toString(),
      name: name?.toString(),
      level: level ? Number(level.toString()) : 0,
      page: 0,
      limit: 0,
    };
    console.log(params);
    mutate(params);

    // Handle response if necessary
    // const data = await response.json()
    // ...
  };

  const userListDisplay = () => {
    if (userListState?.length > 0) {
      return userListState.map((item, index) => {
        return (
          <tr
            key={item.id}
            className="selectToggle"
            style={{ cursor: "pointer" }}
          >
            <td>{index + 1}</td>
            <td>
              <input
                id="isRelation"
                type="radio"
                name="id"
                value={item.id}
                onChange={() => {
                  setIdState(item?.id || 0);
                  setNameState(item?.name || "");
                }}
              />
            </td>
            <td>{item.member_id}</td>
            <td>{item.sponid}</td>

            <td>{item.name}</td>
            <td>{item.center.name}</td>
            <td>{item.Level.title}</td>

            <td style={{ textAlign: "left" }}></td>
          </tr>
        );
      });
    }
    return (
      <tr>
        <td colSpan={10} height={40}>
          검색을 해주세요.
        </td>
      </tr>
    );
  };
  return (
    <html>
      <body>
        <div id="wrap" style={{ background: "#fff" }}>
          <div className="content_section">
            <div className="content_section_fix" style={{ background: "#fff" }}>
              <form name="relationForm" method="get" action={onSubmit}>
                <input type="hidden" name="formname" value="" />
                <input type="hidden" name="relation_procode" value="" />
                <input type="hidden" name="code" value="" />
                <input type="hidden" name="mode" value="search" />

                <input
                  type="hidden"
                  name="q1"
                  value="mode=&amp;app_mode=popup"
                />
                <input type="hidden" name="page" value="" />
                <div className="form_box_area">
                  <table className="form_TB" summary="검색항목">
                    <tbody>
                      <tr>
                        <td className="article">아이디</td>
                        <td className="conts">
                          <input
                            type="text"
                            name="pass_id"
                            className="input_text"
                          />
                        </td>

                        <td className="article">회원명</td>
                        <td className="conts">
                          <input
                            type="text"
                            name="pass_name"
                            className="input_text"
                          />
                        </td>
                        <td className="article">레벨</td>
                        <td className="conts">
                          <select name="sst">
                            <option value="">레벨</option>
                            {levels?.length > 0 &&
                              levels.map((item: any, index) => {
                                return (
                                  <option key={item.id} value={item.id}>
                                    {item.title}
                                  </option>
                                );
                              })}
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="top_btn_area">
                    <div className="btn_line_up_center">
                      <span className="shop_btn_pack btn_input_blue">
                        <input
                          type="submit"
                          className="input_medium"
                          title="검색"
                          value="검색"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </form>
              <div className="content_section_inner">
                <table className="list_TB" summary="리스트기본">
                  <colgroup>
                    <col width="60px" />
                    <col width="60px" />
                    <col width="220px" />
                    <col width="*" />
                    <col width="150px" />
                    <col width="150px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" className="colorset">
                        NO
                      </th>
                      <th scope="col" className="colorset">
                        선택
                      </th>
                      <th scope="col" className="colorset">
                        아이디
                      </th>
                      <th scope="col" className="colorset">
                        회원명(대표자)
                      </th>
                      <th scope="col" className="colorset">
                        상호명
                      </th>

                      <th scope="col" className="colorset">
                        등급
                      </th>
                      <th scope="col" className="colorset">
                        추천인
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*{!userListState?.length && (*/}
                    {/*    <tr>*/}
                    {/*        <td colSpan={10} height={40}>검색을 해주세요.</td>*/}
                    {/*    </tr>*/}
                    {/*)}*/}
                    {userListDisplay()}
                  </tbody>
                </table>
              </div>
              <div className="top_btn_area">
                <div className="btn_line_up_center">
                  <span className="shop_btn_pack btn_input_blue">
                    <input
                      type="button"
                      className="input_medium"
                      title="선택적용"
                      value="선택적용"
                      onClick={() => {
                        const sponid_hidden =
                          window.opener.document.getElementById(
                            "sponid_hidden"
                          );
                        sponid_hidden.value = idState;
                        const sponid_display =
                          window.opener.document.getElementById(
                            "sponid_display"
                          );
                        sponid_display.value = nameState;
                        console.log(sponid_display.value);
                        window.opener.focus();
                        window.close();
                      }}
                    />
                  </span>
                  <span className="shop_btn_pack">
                    <span className="blank_3"></span>
                  </span>
                  <span className="shop_btn_pack btn_input_blue">
                    <input
                      type="button"
                      className="input_medium"
                      title="창닫기"
                      value="창닫기"
                      onClick={() => {
                        window.opener.focus();
                        window.close();
                      }}
                    />
                  </span>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default MemberLookup;
