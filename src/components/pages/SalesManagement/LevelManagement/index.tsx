'use client'
import Slider  from '@/components/layouts/Slider/Sales';
import { useEffect, useState } from 'react';
import { Center } from '../SalesRegistrationManager/types/type';
const LevelManagement = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
    useEffect(() => {
    console.log('sliderVisible: ', sliderVisible)
    }, [sliderVisible]);
    const sliderToggle = () => {
    setSliderVisible(!sliderVisible);
    }
   

    return(
        <div className={sliderVisible ? "container" : "container_hide" } id="depth2_leftmenu" 
        style={{background: "#eaf8f5"}}>
	   <Slider />

          <div className="content_section">
                <div className="content_section_fix" style={{background:'#eaf8f5'}}>
                  <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
                   style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                   <span className="btn_open" id="open_close_btn_open" title="메뉴열기"
                   style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>

{/* <!-- 페이지타이틀 --> */}
                  <div className="title_area"style={{background:'#eaf8f5'}}>
                    <span className="icon"></span>
                    <span className="title">회원 레벨관리</span>
                    <span className="location">홈 &gt; 매출관리 &gt; 매출 레벨관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}

                  <iframe src="inc.bonus_auto.php" width='0' height='0' frameBorder='0' style={{display:'none'}}></iframe>
{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

<div className="common_ajax_proc"></div>
<form name='fsearch' method="post">

{/* <!-- 리스트영역 --> */}
<div className="content_section_inner" style={{textAlign:"center"}}>


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
    <col width="70px"/>
    <col width="120px"/>
    <col width="120px"/>
    <col width="120px"/>
    <col width="120px"/>
    <col width="100px"/>
    <col width="120px"/>
    <col width="120px"/>
    <col width="100px"/>
    <col width="*"/>
    <col width="2%"/>
    <col width="2%"/>
    <col width="2%"/>
    <col width="4%"/>
    <col width="4%"/>
    <col width="3%"/>
    </colgroup>
    <thead>
    <th>레벨</th>
    <th>직급명</th>
    <th>구분</th>
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
    <th>(다)</th>
    <th>(가)</th>
    <th>(아)</th>
    <th>배경 	<div id="col_info" style={{}}> <input id="picker" type="text" name="_bgcolor" /> </div></th>
    <th>텍스트</th>
    <th>통계</th>
    </thead>

<tbody>
  <input type='hidden'  value='01'/>
  <input type='hidden' value='01' checked/>
  <tr className='list0'  style={{height:'35px', textAlign: 'center'}}>
 <td className='f_listb'>{"Lv.01"} </td>
  <td><input type='text' className='input_text' style={{width: '80px',textAlign:'center'}} value='준회원'/></td>
  <td className='f_list'>준회원</td>
  <td>
   <input type='text' className='input_text' style={{width: '80px'}}  value='0'/>
  </td>
  <td>
    <input type='text' className='input_text' style={{width: '80px'}}value='0'/>
  </td>
  <td>
    <input type='text' className='input_text' style={{width: '80px'}} value='0'/>
  </td>
  <td>
    <input type='text' className='input_text' style={{width: '80px'}} value='0'/>
  </td>
  <td>
    <input type='text' className='input_text' style={{width: '20px'}} value='0' size={3}/>
    <select >
    <option value='0'  selected= {true}>%</option>
    </select>
  </td>
  <td>
    <input type='text' className='input_text' style={{width: '80px'}} value='0'/>
  </td>
  <td>
    <input type='text' className='input_text' style={{width: '80px'}}  value='0'/>
  </td>
  <td>
    <input type='text' className='input_text' style={{width: '30px'}} value='0'/>
    <select >
    <option value='0'  selected= {true}>%</option>
    <option value='1' >원</option>
    </select>
  </td>
  <td>
    <input type='text' className='input_text' style={{width: '90px'}} value=''/>
  </td>
  <td>
   <label><input type="checkbox" name="rev_account[20]" value="Y" /></label>
  </td>
  <td>
   <label><input type="checkbox" name="grade_store[20]" value="Y" /></label>
  </td>
  <td>
   <label><input type="checkbox" name="free_avatar[20]" value={"Y"} /></label>      
  </td>
  <td>
   <label>
    <input type="text" id="tree_color_20" name="tree_color[20]"  value="white" style={{ width:'60px',backgroundColor:'white',borderBottom:'1px', marginBottom:'2px'}}/>
    </label>
 </td>

  <td>
   <label>
 <input type="text" id="tree_color_font_20" name="tree_color_font[20]"  value={"black"} style={{ width:'60px',backgroundColor:'white',borderBottom:'1px', marginBottom:'2px'}}/>
 </label>

   </td>
  
  <td><b>  </b> 명</td>
</tr>
      
  </tbody>

  <tbody>
 <input type='hidden'  value='02'/>
  <input type='hidden' value='02' checked/>

  <tr className='list0'  style={{height:'35px', textAlign: 'center'}}>

  <td className='f_listb'>"Lv.02" </td>

  <td><input type='text' className='input_text' style={{width: '80px',textAlign:'center'}} value='정회원'/></td>

  <td className='f_list'>정회원</td>

  <td>
    <input type='text' className='input_text' style={{width: '80px'}}  value='0'/>
  </td>
  <td>
    <input type='text' className='input_text' style={{width: '80px'}}value='0'/>
  </td>
  <td>
    <input type='text' className='input_text' style={{width: '80px'}} value='0'/>
  </td>
  <td>
    <input type='text' className='input_text' style={{width: '80px'}} value='0'/>
  </td>
  <td>
    <input type='text' className='input_text' style={{width: '20px'}} value='0' size={3}/>
    <select >
    <option value='0'  selected= {true}>%</option>
    </select>
  </td>
  <td>
    <input type='text' className='input_text' style={{width: '80px'}} value='0'/>
  </td>
  <td>
    <input type='text' className='input_text' style={{width: '80px'}}  value='0'/>
  </td>
  <td>
    <input type='text' className='input_text' style={{width: '30px'}} value='0'/>
    <select >
    <option value='0'  selected= {true}>%</option>
    <option value='1' >원</option>
    </select>
  </td>
  <td>
    <input type='text' className='input_text' style={{width: '90px'}} value=''/>
  </td>
  <td>
   <label><input type="checkbox" name="rev_account[20]" value="Y" /></label>
  </td>
  <td>
   <label><input type="checkbox" name="grade_store[20]" value="Y" /></label>
  </td>
  <td>
   <label><input type="checkbox" name="free_avatar[20]" value={"Y"} /></label>      
  </td>
  <td>
   <label>
    <input type="text" id="tree_color_20" name="tree_color[20]"  value="white" style={{ width:'60px',backgroundColor:'white',borderBottom:'1px', marginBottom:'2px'}}/>
    </label>
 </td>

  <td>
   <label>
 <input type="text" id="tree_color_font_20" name="tree_color_font[20]"  value={"black"} style={{ width:'60px',backgroundColor:'white',borderBottom:'1px', marginBottom:'2px'}}/>
 </label>

   </td>
  
  <td><b>  </b> 명</td>
</tr>
 </tbody>
</table>
  </div>
  <div className='bottom_btn_area'>
    <div className='btn_line_up_center'>
      <span className='shop_btn_pack btn_input_red'><a onClick={()=>{}} className='input_large_a'>저장</a></span>
      
    </div>
  </div>
    </div>
    
</form>
</div>
</div>
</div>

)}
// function mutate(params: { name: string; level: string; position_name: string; purchase_amount: number; amount_limit: string; purchase_pv: string; discount_rate: number; guanli_fee: number; minimum_purchase: number; upgrade: number; payment_limit: number; memo: string; }) {
//   throw new Error('Function not implemented.');
// }

export default LevelManagement