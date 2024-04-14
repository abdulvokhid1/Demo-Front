'use client'
import '@/css/spectrum.css'
// import "react-color-palette/css";
import Slider  from '@/components/layouts/Slider/Sales';
import { useEffect, useRef, useState } from 'react';
import { Center } from '../SalesRegistrationManager/types/type';
import { useMutation } from "@tanstack/react-query";
// import {ColorPicker, useColor} from "react-color-palette";
import { ColorPicker, ColorPickerVariant } from '@/components/colorpicker'
import LEVEL_API from "@/services/api/levels";
import PAGE_ROUTES from "@/utils/constants/routes";
import { useRouter } from "next/navigation";
import {Level} from "@/utils/types/type";
import { Simulate } from "react-dom/test-utils";
import change = Simulate.change;
import noop from "noop-ts";

const LevelManagement = () => {
    const router = useRouter()
    const [sliderVisible, setSliderVisible] = useState(true)
    const [levels, setLevels] = useState<Level[]>([]);
    const [levelTemps, setLevelTemps] = useState<Level[]>([]);
    const [bgColor, setBgColor] = useState<string[]>([])
    const [txtColor, setTxtColor] = useState<string[]>([])
    const [hidden, setHidden] = useState<boolean>(true)
    const [xColor, setXColor] = useState<number>(0)
    const [yColor, setYColor] = useState<number>(0)
    const [idState, setIdState] = useState<number>(1)
    const [channelState, setChannelState] = useState<number>(1)
    const [colorState, setColorState] = useState<string>('#ffffff')
    useEffect(() => {
    console.log('sliderVisible: ', sliderVisible)
    }, [sliderVisible]);
    const sliderToggle = () => {
    setSliderVisible(!sliderVisible);
    }

    const onChangeColorHandler = (color: string, id: number, channel: number) => {
        // const prvList = bgColor;
        // prvList[index] = color;
        // setBgColor(prvList);
        // let level = levels.filter((item) => item.id === id)
        let levelTemp = levels;
        levels.map((item, index) => {
            item.id == id ?
                channel == 1 ? item.bgColor = color :item.txtColor = color
                : noop
        })
        setColorState(color)
        // channel === 1?  level[id].bgColor = color : level[id].txtColor = color;
        // levelTemps.filter((item) => {item.id == id})[0].txtColor = color
    }

    const {mutate: mutateLevel} = useMutation(
        {mutationFn: LEVEL_API.getList,
            onSuccess:  (values:any) =>{
                values.sort((a: any,b: any) => ((a.rank||0) - (b.rank||0)))
                setLevels(values);
                // setLevelTemps(values);

                // const bgColorList: string[] = [];
                // const txtColorList: string[] = [];
                // levels.map((item:Level, index) => {
                //     bgColorList.push(item.bgColor || '#FFF');
                //     txtColorList.push(item.txtColor || '#000')
                // })
                // setBgColor(bgColorList);
                // setTxtColor(txtColorList);
                // setBgColor([]);
                // setTxtColor([]);
                // setHidden([]);

                // values.map((item:Level, index: number) => {
                //     // bgColor.push(item.bgColor || '#FFF' );
                //     // txtColor.push(item.txtColor || '#FFF' );
                //     xColor.push(0)
                //     yColor.push(0);
                //     hidden.push(true)
                //
                // })
                // setXColor(Array.from({length:values.length}).map(x=>0))
                // setYColor(Array.from({length:values.length}).map(x=>0))
                // setHidden(Array.from({length:values.length}).map(x=>true))
                console.log(JSON.stringify(bgColor))
            },
            onError: (error: any) => {
                if (error.response.status === 401) {
                    router.push(PAGE_ROUTES.AUTH.LOGIN);
                }
            }
        },
    )

    useEffect(() => {
        mutateLevel();
    }, []);

   

    return(
        <div className={sliderVisible ? "container" : "container_hide"} id="depth2_leftmenu"
             style={{background: "#eaf8f5"}}>
            <Slider/>

            <div className="content_section">
                <div className="content_section_fix" style={{background: '#eaf8f5'}}>
                    <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
                                                      style={{display: sliderVisible ? "block" : "none"}}
                                                      onClick={sliderToggle}></span>
                        <span className="btn_open" id="open_close_btn_open" title="메뉴열기"
                              style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>

                    {/* <!-- 페이지타이틀 --> */}
                    <div className="title_area" style={{background: '#eaf8f5'}}>
                        <span className="icon"></span>
                        <span className="title">회원 레벨관리</span>
                        <span className="location">홈 &gt; 매출관리 &gt; 매출 레벨관리</span>
                    </div>
                    {/* <!-- // 페이지타이틀 --> */}

                    <iframe src="inc.bonus_auto.php" width='0' height='0' frameBorder='0'
                            style={{display: 'none'}}></iframe>
                    {/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

                    <div className="common_ajax_proc"></div>
                    <form name='fsearch' method="post">

                        {/* <!-- 리스트영역 --> */}
                        <div className="content_section_inner" style={{textAlign: "center"}}>


                            {/* <!-- 메인추출 --> */}
                            <div className="sub_sys_area">

                                {/* <!-- 내부 그룹타이틀 --> */}
                                <div className="group_title">
                                    <span className="icon"></span><span className="title">직급 구분</span>
                                    {/* <!--<span className="btn_area"><span className="shop_btn_pack"><a href="_order.list.php?menu_idx=21" className="small gray" title="더보기" >주문관리 보기</a></span></span>--> */}
                                </div>
                                {/* <!-- 내부 그룹타이틀 --> */}

                                {/* <!--<span style="float:right;font-weight:bold"><div className='guide_text'><span className='ic_red'></span><span className='red'>색상변경은 색상표[열기] => 더보기 클릭 => 옆에 창이 나오면 색상선택하면 나오는 예) #ff0000 코드를 레벨에 맞게 넣어주시면됩니다</span></div></span>--> */}

                                <table className="last_TB" summary="회원현황">
                                    <colgroup>
                                        <col width="60px"/>
                                        <col width="120px"/>
                                        {/*<col width="70px"/>*/}
                                        <col width="120px"/>
                                        <col width="120px"/>
                                        <col width="120px"/>
                                        <col width="120px"/>
                                        <col width="100px"/>
                                        <col width="120px"/>
                                        <col width="120px"/>
                                        <col width="120px"/>
                                        <col width="*"/>
                                        {/*<col width="2%"/>*/}
                                        {/*<col width="2%"/>*/}
                                        {/*<col width="2%"/>*/}
                                        <col width="4%"/>
                                        <col width="4%"/>
                                        <col width="3%"/>
                                    </colgroup>
                                    <thead>
                                    <th>레벨</th>
                                    <th>직급명</th>
                                    {/*<th>구분</th>*/}
                                    <th>매출 CASH</th>
                                    <th>매출단위</th>
                                    <th>매출표시</th>
                                    <th>관리비</th>
                                    <th>할인율</th>
                                    {/* <!--	<th>등급조건 라인수</th>	<th>등급조건 라인실적</th>--> */}
                                    <th>최소구매</th>
                                    <th>매출-등업</th>
                                    <th>지급한도</th>
                                    <th>메모</th>
                                    {/*<th>(다)</th>*/}
                                    {/*<th>(가)</th>*/}
                                    {/*<th>(아)</th>*/}
                                    <th>
                                        배경
                                        {/*<div id="col_info" style={{}}> */}
                                        {/*    <input id="picker" type="text" name="_bgcolor" /> */}
                                        {/*</div>*/}
                                    </th>
                                    <th>텍스트</th>
                                    <th>통계</th>
                                    </thead>
                                    <tbody>
                                    <input type='hidden' value='01'/>
                                    <input type='hidden' value='01' checked/>
                                    {levels?.length && (
                                        levels.map((item, i) => (
                                            <tr key={item.id} className='list0'
                                                style={{height: '35px', textAlign: 'center'}}>
                                                <td className='f_listb'>Level&nbsp;&nbsp;{item.rank}</td>
                                                <td>
                                                    <input type='text' className='input_text'
                                                           style={{width: '80px', textAlign: 'center'}}
                                                           value={item.title}/>
                                                </td>
                                                {/*<td className='f_list'>준회원</td>*/}
                                                <td>
                                                    <input type='text' className='input_text' style={{width: '80px'}}
                                                           value='0'/>
                                                </td>
                                                <td>
                                                    <input type='text' className='input_text' style={{width: '80px'}}
                                                           value='0'/>
                                                </td>
                                                <td>
                                                    <input type='text' className='input_text' style={{width: '80px'}}
                                                           value='0'/>
                                                </td>
                                                <td>
                                                    <input type='text' className='input_text' style={{width: '80px'}}
                                                           value='0'/>
                                                </td>
                                                <td>
                                                    <input type='text' className='input_text' style={{width: '30px', display: 'inline-block'}}
                                                           value={item.discountRate} size={3}/>
                                                    &nbsp;&nbsp;
                                                    <select>
                                                        <option value='0' selected={true}>%</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input type='text' className='input_text' style={{width: '80px'}}
                                                           value='0'/>
                                                </td>
                                                <td>
                                                    <input type='text' className='input_text' style={{width: '80px'}}
                                                           value={0}/>
                                                </td>
                                                <td>
                                                    <input type='text' className='input_text' style={{width: '30px', display:'inline-block'}}
                                                           value={item.rewardRate}/>
                                                    &nbsp;&nbsp;
                                                    <select>
                                                        <option value='0' selected={true}>%</option>
                                                        {/*<option value='1'>원</option>*/}
                                                    </select>
                                                </td>
                                                <td>
                                                    <input type='text' className='input_text' style={{width: '100%'}}
                                                           value={item.description}/>
                                                </td>
                                                {/*<td>*/}
                                                {/*    <label><input type="checkbox" name="rev_account[20]" value="Y"/></label>*/}
                                                {/*</td>*/}
                                                {/*<td>*/}
                                                {/*    <label><input type="checkbox" name="grade_store[20]" value="Y"/></label>*/}
                                                {/*</td>*/}
                                                {/*<td>*/}
                                                {/*    <label><input type="checkbox" name="free_avatar[20]" value={"Y"}/></label>*/}
                                                {/*</td>*/}
                                                <td>
                                                    {/*<label>*/}

                                                    {/*</label>*/}
                                                    <label>
                                                        {/*<input type="text" id="tree_color_20" name="tree_color[20]" value="white"*/}
                                                        {/*       style={{*/}
                                                        {/*           width: '60px',*/}
                                                        {/*           backgroundColor: 'white',*/}
                                                        {/*           borderBottom: '1px',*/}
                                                        {/*           marginBottom: '2px'*/}
                                                        {/*       }}/>*/}
                                                        {/*<input type="text" id="tree_color_20" name="tree_color[20]" value="white"*/}
                                                        {/*       style={{*/}
                                                        {/*           width: '60px',*/}
                                                        {/*           background: 'white',*/}
                                                        {/*           border: '1px solid rgb(170, 170, 170)',*/}
                                                        {/*           marginBottom: '2px',*/}
                                                        {/*           display: 'none'*/}
                                                        {/*       }}/>*/}
                                                        <button type="button" className="sp-replacer sp-light"
                                                                aria-expanded="false"
                                                                onMouseDown={(event) => {
                                                                    // let temp = Array.from({length: levels.length}).map(x=>0)
                                                                    // temp[i] = event.clientX - 250;
                                                                    // setXColor(temp)
                                                                    // temp = Array.from({length: levels.length}).map(x=>0)
                                                                    // temp[i] = event.clientY + 10;
                                                                    // setYColor(temp)
                                                                    // let tempHidden = Array.from({length: levels.length}).map(x=>true)
                                                                    // tempHidden[i] = !hidden[i]
                                                                    // setHidden(tempHidden);
                                                                    // hidden[i] = !hidden[i];
                                                                    setChannelState(1);
                                                                    setIdState(item.id? item.id : 1)
                                                                    setColorState(item.bgColor? item.bgColor : '#ffffff');
                                                                    setXColor(event.clientX - 250);
                                                                    setYColor(event.clientY + 10);
                                                                    setHidden(!hidden)
                                                                }}
                                                        >
                                                            <span className="sp-preview">
                                                                <span className="sp-preview-inner"
                                                                      style={{backgroundColor: item.bgColor}}></span>
                                                            </span>
                                                            <span className="sp-dd">▼</span>
                                                        </button>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label>
                                                        {/*<input type="text" id="tree_color_font_20" name="tree_color_font[20]" value={"black"}*/}
                                                        {/*       style={{*/}
                                                        {/*           width: '60px',*/}
                                                        {/*           backgroundColor: 'white',*/}
                                                        {/*           borderBottom: '1px',*/}
                                                        {/*           marginBottom: '2px'*/}
                                                        {/*       }}/>*/}
                                                        <button type="button" className="sp-replacer sp-light sp-active"
                                                                aria-expanded="true"
                                                                onMouseDown={(event) => {
                                                                    // let temp = Array.from({length: levels.length}).map(x=>0)
                                                                    // temp[i] = event.clientX - 250;
                                                                    // setXColor(temp)
                                                                    // temp = Array.from({length: levels.length}).map(x=>0)
                                                                    // temp[i] = event.clientY + 10;
                                                                    // setYColor(temp)
                                                                    // let tempHidden = Array.from({length: levels.length}).map(x=>true)
                                                                    // tempHidden[i] = !hidden[i]
                                                                    // setHidden(tempHidden);
                                                                    // hidden[i] = !hidden[i];
                                                                    setChannelState(2);
                                                                    setIdState(item.id? item.id : 1)
                                                                    setColorState(item.bgColor? item.bgColor : '#ffffff');
                                                                    setXColor(event.clientX - 250);
                                                                    setYColor(event.clientY + 10);
                                                                    setHidden(!hidden)
                                                                }}
                                                        >
                                                            <span className="sp-preview">
                                                                <span className="sp-preview-inner"
                                                                      style={{backgroundColor: item.txtColor}}>
                                                                </span>
                                                            </span>
                                                            <span className="sp-dd">▼</span>
                                                        </button>
                                                    </label>
                                                </td>
                                                <td>
                                                    <b> </b> 명
                                                </td>
                                            </tr>
                                        ))
                                    )}


                                    </tbody>
                                </table>
                            </div>
                            <div className='bottom_btn_area'>
                                <div className='btn_line_up_center'>
            <span className='shop_btn_pack btn_input_red'><a onClick={() => {
            }} className='input_large_a'>저장</a></span>

                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            {/*{levelTemps?.length && (*/}
            {/*    levelTemps?.map((item, i) => (*/}
            {/*        <div key={item.id} id="bgColorPicker" style={{*/}
            {/*            position: 'absolute',*/}
            {/*            left: xColor[i].toString() + 'px',*/}
            {/*            top: yColor[i].toString() + 'px',*/}
            {/*            display: hidden[i] ? 'none ' : 'block',*/}
            {/*            // zIndex: hidden[i]? -100 : 100,*/}
            {/*        }}>*/}

            {/*            <ColorPicker*/}
            {/*                color={item.bgColor?.toLowerCase()}*/}
            {/*                index={item.id? item.id : 0}*/}
            {/*                channel={}*/}
            {/*                onChange={onChangeColorHandler}*/}
            {/*                variant={ColorPickerVariant.Predefined}*/}
            {/*                height={0}*/}
            {/*                width={0}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    ))*/}
            {/*)}*/}

            <div id="bgColorPicker" style={{
                position: 'absolute',
                left: xColor.toString() + 'px',
                top: yColor.toString() + 'px',
                display: hidden ? 'none ' : 'block',
                // zIndex: hidden[i]? -100 : 100,
            }}>
                {/*<ColorPicker*/}
                {/*    height={100} // 높이 px단위로 설정 (디폴트: 200)*/}
                {/*    hideAlpha={true} // 투명도 조절바 숨김 (디폴트: 안숨김)*/}
                {/*    hideInput={["rgb", "hsv", "rgb"]} // 컬러 코드 숨김 (디폴트: 안숨김)*/}
                {/*    color={bgColor} // 현재 지정된 컬러*/}
                {/*    onChange={setBgColor} // 컬러 변경될 때마다 실행할 이벤트*/}
                {/*/>*/}

                <ColorPicker
                    color={colorState}
                    id={idState}
                    channel={channelState}
                    onChange={onChangeColorHandler}
                    variant={ColorPickerVariant.Predefined}
                />
            </div>

        </div>

    )
}
// function mutate(params: { name: string; level: string; position_name: string; purchase_amount: number; amount_limit: string; purchase_pv: string; discount_rate: number; guanli_fee: number; minimum_purchase: number; upgrade: number; payment_limit: number; memo: string; }) {
//   throw new Error('Function not implemented.');
// }

export default LevelManagement