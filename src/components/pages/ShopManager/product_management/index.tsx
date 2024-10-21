'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'

import ReactPaginate from 'react-paginate';
import { CreatedAtType, ProductType, UserInfo } from "@/utils/types/type";
import Link from 'next/link'
import HeadElement from '@/components/layouts/Header'
import FooterElement from "@/components/layouts/Footer";
import Slider from '@/components/layouts/Slider/general'
import Head from 'next/head'
import {Layout, message } from 'antd'
import Navbar from "@/components/layouts/Navbar";
import PAGE_ROUTES from "@/utils/constants/routes";
import {useEffect, useState} from "react";
import { useMutation } from '@tanstack/react-query';
import ProductManage_API from '@/services/api/productmd';
import { userState } from '@/services/recoil/user';
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { prodSelectedKey } from "@/services/recoil/selectedKey";

const Dashboard = () => {
    const router = useRouter();
    const [messageApi, contextHolder] = message.useMessage()
    const [sliderVisible, setSliderVisible] = useState(true)
    const [isSelectedHover, setIsSelectedHover] = useState(false)
    const [isSelectedClicked, setIsSelectedClicked] = useState(false)
    const [userListState, setUserListState] = useState<UserInfo[]>([])
    const [createdAt, setCreatedAt] = useState<CreatedAtType>({})
    const [memberId, setMemberId] = useState<string>()
    const [centerId, setCenterId] = useState<number>(0)
    const [email, setEmail] = useState<string>()
    const [bankAccount, setBankAccount] = useState<string>()
    const [mobilephone, setMobilePhone] = useState<string>()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalUsers, setTotalUsers] = useState<number>(0)
    const [perPage, setPerPage] = useState<number>(2)
    const [product, setproduct] = useState<ProductType>()
    const setSelectedKey = useSetRecoilState(prodSelectedKey)
    const {mutate: mutateProduct} = useMutation(
        {
            mutationFn: ProductManage_API.getList,
            onSuccess: async (values: any) => {
                setproduct(values);
                console.log(JSON.stringify(product))
            },
            onError: (error: any) => {
                if (error.response.status === 401) {
                    router.push(PAGE_ROUTES.AUTH.LOGIN);
                }
            }
        },
    )
    const {isPending, mutate, isSuccess, isError} = useMutation(
        {
            mutationFn: ProductManage_API.getList,
            onSuccess: async (values: any) => {
                setUserListState(values.users);
                setTotalUsers(values.total);
                console.log(JSON.stringify(userListState))
            },

            onError: (error: any) => {
                if (error.response.status === 401) {
                    router.push(PAGE_ROUTES.AUTH.LOGIN);
                }
            },
        }
    )
    useEffect(() => {
        mutateProduct({page: currentPage, limit: perPage});
    }, []);
  
    useEffect(() => {
        setSelectedKey(1)
    }, []);
    const sliderToggleHandler = () => {
        setSliderVisible(!sliderVisible);
    }
    const selectionHoverHandler = (isHover: boolean) => {
        setIsSelectedHover(isHover);
    }
    const selectionClickedHandler = (isClicked: boolean) => {
        setIsSelectedClicked(isClicked);
    }

    const pagginationHandler = (selectedItem: { selected: number }) => {
        const page = selectedItem ? selectedItem.selected+1 : 0;
        mutate({page: page, limit: perPage})
    }

return (
<div className={sliderVisible ? "container" : "container_hide" } id="depth2_leftmenu" 
    style={{background: "#f0f0f0"}}>
    <div className={sliderVisible ? "container" : "container_hide" } id="depth2_leftmenu"
        style={{background: "#f0f0f0"}}>
        <Slider />
        <div className="content_section">
            <div className="content_section_fix" style={{background:'#fff'}}>

                <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"></span>
                    <span className="btn_open" id="open_close_btn_open" title="메뉴열기"></span></div>


                {/*
                <!-- 페이지타이틀 --> */}

                <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">일대일문의 게시판</span>
                    <span className="location">홈 &gt; 기본관리 &gt; 일대일문의 게시판</span>
                </div>
                {/*
                <!-- // 페이지타이틀 --> */}


                {/*<iframe src="inc.bonus_auto.php" width="0" height="0" frameBorder="0" style={{display:'none'}}></iframe>*/}

                {/*
                <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0&gt;</iframe>--> */}


                <div className="common_ajax_proc"></div>

                {/*
                <!-- 검색영역 --> */}

                <div className="form_box_area">
                    <form name="searchfrm" method="post" action="/myAdmin/_bbs.post_qna.list.php">
                        <input type="hidden" name="mode" value="search" />
                        <input type="hidden" name="pass_menu" value="" />
                        <table className="form_TB" summary="검색항목">
                            <colgroup>
                                <col width="120" />
                                <col width="200" />
                                <col width="120" />
                                <col width="200" />
                                <col width="120" />
                                {/*
                                <!-- 마지막값은수정안함 --&gt;<col width="*"> */}
</colgroup>
<tbody> 
<tr>
<td className="article">공지사항</td>
<td className="conts"><select name="pass_notice"><option value="">-선택-</option><option value="Y">적용</option><option value="N">미적용</option></select></td>
<td className="article">등록자ID </td>
<td className="conts"><input type="text" name="pass_inid" className="input_text" style={{width:100}} value=""/></td>

</tr>
<tr>
<td className="article">등록자명</td>
<td className="conts"><input type="text" name="pass_writer" className="input_text" style={{width:100}} value=""/></td>
<td className="article">제목</td>
<td className="conts"><input type="text" name="pass_title" className="input_text" style={{width:100}} value=""/></td>
</tr>
</tbody> 
</table>

{/* <!-- 버튼영역 --&gt;--> */}
                                <div className="top_btn_area">
                                    <div className="btn_line_up_center">
                                        <span className="shop_btn_pack btn_input_blue"><input type="submit"
                                                className="input_medium" title="검색" value="검색" /></span>
                                        {/*
                                        <!--
<span className="shop_btn_pack"><span className="blank_3"></span></span>
<span className="shop_btn_pack"><a href="_bbs.post_qna.form.php?_mode=add" className="medium red" title="게시물등록" >게시물등록</a></span>
--&gt; */}

</div>
</div>
</form>
</div>
{/* <!-- // 검색영역 --&gt; */}

{/* <!-- 리스트영역 --&gt; */}
<div className="content_section_inner">


<div className="ctl_btn_area">
<span className="shop_btn_pack"><a href="#none" className="small white" title="전체선택" onClick={() =>{'selectAll'}}>전체선택</a></span>
<span className="shop_btn_pack"><span className="blank_3"></span></span>
<span className="shop_btn_pack"><a href="#none" className="small white" title="선택해제" onClick={() => {'unselectAll'}}>선택해제</a></span>
<span className="shop_btn_pack"><span className="blank_3"></span></span>
<span className="shop_btn_pack"><a href="#none" className="small gray" title="선택삭제" onClick={() => {'selectDelete'}}>선택삭제</a></span>
</div>

<form name="listFrm" id="listFrm" method="post" action="_bbs.post_qna.pro.php">
<input type="hidden" name="_mode" value=""/>
<input type="hidden" name="_PVSC" value=""/>

<table className="list_TB" summary="리스트기본">
{/* <!-- <colgroup>
<col width="120px"/><col width="200px"/><col width="120px"/><col width="*"/>
</colgroup> --&gt; */}
<thead>
<tr>
<th scope="col" className="colorset">선택</th>
<th scope="col" className="colorset">번호</th>
<th scope="col" className="colorset">게시판이름</th>
<th scope="col" className="colorset">제목</th>
<th scope="col" className="colorset">작성자</th>
<th scope="col" className="colorset">등록일</th>
<th scope="col" className="colorset">관리</th>
</tr>
</thead> 
<tbody> 
<tr>
<td colSpan={10} height="40">내용이 없습니다.</td>
</tr>
</tbody> 
</table>
</form>

{/* <!-- 페이지네이트 --&gt; */}
<div className="list_paginate">			
<span className="lineup"><span className="nextprev">
<span className="btn">
  <span className="no">
      <span className="icon ic_first"></span></span>
      <a href=" ?pass_menu=&amp;&amp;listpg=1" className="ok" title="처음">
          <span className="icon ic_first"></span></a></span><span className="btn">
              <span className="no"><span className="icon ic_prev"></span></span>
              <a href=" ?pass_menu=&amp;&amp;listpg=0" className="ok" title="이전">
                  <span className="icon ic_prev"></span></a></span></span><span className="number">
                      <a href="#none" onClick={() => {return false}} className="hit">1</a></span>
                      <span className="nextprev">
                          <span className="btn"><span className="no"><span className="icon ic_next"></span></span>
                          <a href=" ?pass_menu=&amp;&amp;listpg=2" className="ok" title="다음"><span className="icon ic_next"></span></a></span>
                          <span className="btn"><span className="no"><span className="icon ic_last"></span></span><a href=" ?pass_menu=&amp;&amp;listpg=0" className="ok" title="끝"><span className="icon ic_last"></span></a></span></span></span>	</div>
{/* <!-- // 페이지네이트 --&gt; */}
<div style={{display:'flex', alignItems:'center', justifyContent:'center' ,margin:'0 auto'}}>
                        <ReactPaginate
                            previousLabel={<FontAwesomeIcon icon={faArrowAltCircleLeft}/>}
                            nextLabel={<FontAwesomeIcon icon={faArrowAltCircleRight}/>}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            activeClassName={'active'}
                            containerClassName={'pagination'}
                            // subContainerClassName={'pages pagination'}

                            initialPage={currentPage-1}
                            pageCount={Math.ceil(totalUsers/ perPage)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={pagginationHandler}
                        />
                        </div>


<div style={{height:30}}></div>

</div>
</div>
                    {/*<!-- //내용 -->*/}

                                    </div>
                                </div>
                                {/*//*/}
                </div>
                )
                }

                export default Dashboard