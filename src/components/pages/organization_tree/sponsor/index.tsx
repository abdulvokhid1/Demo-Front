'use client';
// import './styles.css'
import '@/app/globals.css'
import Link from 'next/link'
import HeadElement from '@/components/layouts/Header'
import FooterElement from "@/components/layouts/Footer";
import Slider from '@/components/layouts/Slider/organization_tree'
import Head from 'next/head'
import { Layout } from 'antd'
import Navbar from "@/components/layouts/Navbar";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Tree, TreeNode } from "@/components/pages/organization_tree/tree";
import { getNodes, StyledNode } from "@/components/pages/organization_tree/tree/stories/Tree.stories";
import { NodeContent } from "@/components/pages/organization_tree/tree/components/nodeContent";

const Sponsor = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
    const [isSelectedHover, setIsSelectedHover] = useState(false)
    const [isSelectedClicked, setIsSelectedClicked] = useState(false)
    useEffect(() => {
        console.log('sliderVisible: ', sliderVisible)
    }, [sliderVisible]);
    const sliderToggleHandler = () => {
        setSliderVisible(!sliderVisible);
    }
    const selectionHoverHandler = (isHover: boolean) => {
        setIsSelectedHover(isHover);
    }
    const selectionClickedHandler = (isClicked: boolean) => {
        setIsSelectedClicked(isClicked);
    }
    return (

        <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
             style={{background: "#f0f0f0"}}>
            <Slider/>
            <div className="content_section">
                <div className="content_section_fix" style={{background: '#fff'}}>

                    <div className="open_close">
                    <span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
                          style={{display: sliderVisible ? "block" : "none"}}
                          onClick={sliderToggleHandler}
                    ></span>
                        <span className="btn_open" id="open_close_btn_open" title="메뉴열기"
                              style={{display: !sliderVisible ? "block" : "none"}}
                              onClick={sliderToggleHandler}
                        ></span>
                    </div>

                    <div className="title_area">
                        <span className="icon"></span>
                        <span className="title">
						후원조직도
					</span>
                        <span className="location">홈 &gt; 조직도관리 &gt; 후원조직도</span>
                    </div>

                    <div className="common_ajax_proc"></div>

                   <div
                        style={{
                        display: 'flex',
                        overflow: 'hidden',
                        height: '100vh',
                        marginTop: '-100px',
                        paddingTop: '100px',
                        position: 'relative',
                        width: '100%',
                        backfaceVisibility: 'hidden',
                        willChange: 'overflow',
                    }}
                    >
                     <div className="content_section_inner" style={{position:'fixed', right:'0px', zIndex:10000}}>
                        <div className="main_box_area_wide">

                            <form name="searchfrm_member" method="post" action="/myAdmin/_cardsys.sub_tree_sponid.php">
                                <input type="hidden" name="mode" value="search"/>

                                <input type="hidden" name="app_mode" value=""/>

                                <div className="form_box_area"
                                     style={{background:'#f2f2f2', border:'1px solid #ddd', margin:'5px', padding:'4px'}}>
                                    <table className="form_TB" summary="검색항목" style={{border:'0px'}}>
                                        <colgroup>
                                            <col width="230px"/>
                                            <col width="*"/>
                                        </colgroup>
                                        <tbody>
                                        <tr>
                                            <td className="conts" style={{border:'0px'}}>

                                                <select name="tree_memid" style={{width:'50px', display:'none'}}
                                                        id="tree_memid" onFocus={()=> {}} onBlur={()=>{}}
                                                        onChange={()=>{}}>
                                                    <option value="">-회원 선택-</option>
                                                    <option value="2000001">운영자 - 2000001</option>
                                                    <option value="2000002">회사원1 - 2000002</option>
                                                    <option value="2000003">회사원2 - 2000003</option>
                                                    <option value="2000004">회사원3 - 2000004</option>
                                                    <option value="2000005">회사원4 - 2000005</option>
                                                    <option value="2000006">회사원5 - 2000006</option>
                                                    <option value="2000007">회사원6 - 2000007</option>
                                                    <option value="2000008">조경순 - 2000008</option>
                                                    <option value="2000009">심광중 - 2000009</option>
                                                    <option value="2000010">김상일 - 2000010</option>
                                                    <option value="2000011">장기순 - 2000011</option>
                                                    <option value="2000012">안병해 - 2000012</option>
                                                    <option value="2000013">유정희 - 2000013</option>
                                                    <option value="2000014">김희숙 - 2000014</option>
                                                    <option value="2000015">김정옥 - 2000015</option>
                                                    <option value="2000016">김광분 - 2000016</option>
                                                    <option value="2000017">최복순 - 2000017</option>
                                                    <option value="2000018">박양길 - 2000018</option>
                                                    <option value="2000019">박양길2 - 2000019</option>
                                                    <option value="2000020">김승완 - 2000020</option>
                                                    <option value="2000021">김은빈 - 2000021</option>
                                                    <option value="2000022">김병은 - 2000022</option>
                                                    <option value="2000023">김희숙2 - 2000023</option>
                                                    <option value="2000024">최난희 - 2000024</option>
                                                    <option value="2000025">김진수 - 2000025</option>
                                                    <option value="2000026">이재형 - 2000026</option>
                                                    <option value="2000027">이대순 - 2000027</option>
                                                    <option value="2000028">전경희 - 2000028</option>
                                                    <option value="2000029">김제남 - 2000029</option>
                                                    <option value="2000030">김제남2 - 2000030</option>
                                                    <option value="2000031">김정혜 - 2000031</option>
                                                    <option value="2000032">박지민 - 2000032</option>
                                                    <option value="2000033">서문숙 - 2000033</option>
                                                    <option value="2000034">김정자 - 2000034</option>
                                                    <option value="2000035">김은빈2 - 2000035</option>
                                                    <option value="2000036">김희숙3 - 2000036</option>
                                                    <option value="2000037">서문숙2 - 2000037</option>
                                                    <option value="2000038">조윤순 - 2000038</option>
                                                    <option value="2000039">김옥진 - 2000039</option>
                                                    <option value="2000040">윤귀분 - 2000040</option>
                                                    <option value="2000041">윤여자 - 2000041</option>
                                                    <option value="2000042">전수경 - 2000042</option>
                                                    <option value="2000043">김옥진2 - 2000043</option>
                                                    <option value="2000044">라삼순 - 2000044</option>
                                                    <option value="2000045"> - 2000045</option>
                                                </select>
                                                <span className="custom-combobox">
                                                    <input title="" className="custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left ui-autocomplete-input" style={{width:'80%'}} autoComplete="off"/>
                                                    <a tabIndex={-1} title="모두보기" className="ui-button ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right" role="button">
                                                        <span className="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"></span>
                                                        <span className="ui-button-text"></span>
                                                    </a>
                                                </span>

                                            </td>

                                            <td className="conts" style={{border:'0px'}}>
                                                <select name="tlv" id="tlv"
                                                        className="select_design add_option add_option_chk"
                                                        style={{height:'29px', background:'#efefef', border:'1px solid #ccc', marginLeft:'-20px'}}>
                                                    <option value="">대수</option>
                                                    <option value="1">1대</option>
                                                    <option value="2">2대</option>
                                                    <option value="3">3대</option>
                                                    <option value="4">4대</option>
                                                    <option value="5">5대</option>
                                                    <option value="6">6대</option>
                                                    <option value="7">7대</option>
                                                    <option value="8">8대</option>
                                                    <option value="9">9대</option>
                                                    <option value="10">10대</option>

                                                </select>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="conts" style={{border:'0px'}} colSpan={10}>
                                                <div style={{float:'right'}}>
                                                    <span className="shop_btn_pack">
                                                        <a id="search_btn_submit" className="medium red" title="검색">
                                                            검색
                                                        </a>
                                                    </span>
                                                    <span className="shop_btn_pack">&nbsp;&nbsp;
                                                        <a href="/myAdmin/_cardsys.sub_tree_sponid.php" className="medium gray" title="취소">
                                                            취소
                                                        </a>
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div style={{position:'fixed',margin:'10px'}}>
                        <span style={{color:'#fff',background:'white',padding:'5px',fontSize:'12px', borderRadius:'6px', marginRight:'5px'}}>일반회원</span>
                        <span style={{color:'#fff',background:'#ffe599',padding:'5px',fontSize:'12px', borderRadius:'6px', marginRight:'5px'}}>정회원</span>
                        <span
                            style={{color:'#fff',background:'#9900ff',padding:'5px',fontSize:'12px', borderRadius:'6px', marginRight:'5px'}}>팀장</span>
                        <span
                            style={{color:'#fff',background:'blue',padding:'5px',fontSize:'12px', borderRadius:'6px', marginRight:'5px'}}>1스타</span>
                        <span
                            style={{color:'#fff',background:'cyan',padding:'5px',fontSize:'12px', borderRadius:'6px', marginRight:'5px'}}>2스타</span>
                        <span
                            style={{color:'#fff',background:'lime',padding:'5px',fontSize:'12px', borderRadius:'6px', marginRight:'5px'}}>3스타</span>
                        <span
                            style={{color:'#fff',background:'#cccccc',padding:'5px',fontSize:'12px', borderRadius:'6px', marginRight:'5px'}}>4스타</span>
                        <span
                            style={{color:'#fff',background:'#acccdc',padding:'5px',fontSize:'12px', borderRadius:'6px', marginRight:'5px'}}>5스타</span>

                    </div>


                    <div id="wrap_ctree" style={{overflow: 'auto',height: 'auto',padding: '.5rem', flex: 1}}>
                        <article className="container_ctree">
                            <div className="inner">
                                <div className="orgchart ui-draggable ui-draggable-handle">
                                    <Tree
                                        {...{
                                            // eslint-disable-next-line react/no-children-prop
                                            label: <StyledNode children={<TreeNode label={<NodeContent/>}/>}/>,
                                            lineWidth: '10px',
                                            lineColor: 'green',
                                            lineBorderRadius: '10px',
                                            lineHeight: '30px',
                                            lineStyle: 'dotted',
                                        }}
                                        /* eslint-disable-next-line react/no-children-prop */
                                        children={getNodes(StyledNode)}
                                    />
                                </div>
                            </div>
                        </article>
                        <footer className="footer_ctree">
                            <ul>
                                <li><a
                                    href="./_cardsys.sub_tree_chart.php?_mode=&amp;app_mode=&amp;tree_id=superadmin">초기화</a>
                                </li>
                                <li><a href="#" onClick={()=>{}}>대수(+)</a></li>
                                <li><a href="#" onClick={()=>{}}>대수(-)</a></li>
                                <li><a href="#" onClick={()=>{}}>확대</a></li>
                                <li><a href="#" onClick={()=>{}}>축소</a></li>
                                <li><a href="#" onClick={()=>{}}>다운</a></li>


                            </ul>
                        </footer>
                    </div>
                    <a href="#"></a>

                    <ul className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-1" tabIndex={0} style={{display: 'none'}}>

                    </ul>
                    <span role="status" aria-live="assertive" aria-relevant="additions" className="ui-helper-hidden-accessible">

                    </span>
                    <div role="log" aria-live="assertive" aria-relevant="additions" className="ui-helper-hidden-accessible"></div>
                    <div role="log" aria-live="assertive" aria-relevant="additions" className="ui-helper-hidden-accessible"></div>
                    </div>


                </div>
            </div>
        </div>
)
}

export default Sponsor