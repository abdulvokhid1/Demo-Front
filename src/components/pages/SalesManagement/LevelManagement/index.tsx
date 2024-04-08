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
  
      const onSubmit = async (formData: FormData) => {
      const id = formData.get('id');
      const level = formData.get('level');
      const position_name = formData.get('position_name');
      const purchase_amount = formData.get('purchase_amount');
      const amount_limit = formData.get('amount_limit');
      const purchase_pv = formData.get('position_name');
      const discount_rate = formData.get('discount_rate');
      const guanli_fee = formData.get('guanli_fee');
      const minimum_purchase = formData.get('minimum_purchase');
      const upgrade = formData.get('upgrade');
      const payment_limit = formData.get('payment_limit');
      const  memo = formData.get(' memo');


      const params = {
      name: id? id.toString() : '',
      level: level ? level.toString() : '',
      position_name: position_name? toString(): '',
      purchase_amount: Number(purchase_amount) || 0,
      amount_limit: amount_limit? amount_limit.toString() : '',
      purchase_pv: purchase_pv? toString(): '',
      discount_rate: Number(discount_rate) || 0,
      guanli_fee: Number(guanli_fee) || 0,
      minimum_purchase: Number(minimum_purchase) || 0,
      upgrade: Number(upgrade) || 0,
      payment_limit: Number(payment_limit) || 0,
      memo: memo? memo.toString() : '',
     }
        console.log(params)
        mutate(params);

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
                  <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">회원 레벨관리</span>
                    <span className="location">홈 &gt; 매출관리 &gt; 매출 레벨관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}

                  <iframe src="inc.bonus_auto.php" width='0' height='0' frameBorder='0' style={{display:'none'}}></iframe>
{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

<div className="common_ajax_proc"></div>
<form name='fsearch' method="post" action={onSubmit}>

{/* <!-- 리스트영역 --> */}
<div className="content_section_inner" style={{textAlign:"center"}}>


  {/* <!-- 메인추출 --> */}
  <div className="sub_sys_area">

    {/* <!-- 내부 그룹타이틀 --> */}
    <div className="group_title">
      <span className="icon"></span><span className="title">직급별 구분</span>
      {/* <!--<span className="btn_area"><span className="shop_btn_pack"><a href="_order.list.php?menu_idx=21" className="small gray" title="더보기" >주문관리 보기</a></span></span>--> */}
    </div>
    {/* <!-- 내부 그룹타이틀 --> */}

		{/* <!--<span style="float:right;font-weight:bold"><div className='guide_text'><span className='ic_red'></span><span className='red'>색상변경은 색상표[열기] => 더보기 클릭 => 옆에 창이 나오면 색상선택하면 나오는 예) #ff0000 코드를 레벨에 맞게 넣어주시면됩니다</span></div></span>--> */}

    <table className="last_TB" summary="회원현황">
    <colgroup>
    <col width="50px"/>
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
    <col width="*"/>
    </colgroup>
    <thead>
    <th>레벨</th>
    <th>직급명</th>
    <th>구분</th>
    <th>매출  BV</th>
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
    <th>배경
	{/* <!--<a href="#none" onclick="col_view(1);" style="font-size:10px;color:blue" id="col_open">[열기]</a>
	<a href="#none" onclick="col_view(0);" style="font-size:10px;display:none;color:red" id="col_close">[닫기]</a>
	--> */}

		<div id="col_info" style={{}}>
				<input id="picker" type="text" name="_bgcolor" />
				{/* <script>
				$("#picker").spectrum({
					showPaletteOnly: true, togglePaletteOnly: true, preferredFormat: "hex",
					clickoutFiresChange: true, flat: true, showInput: true, allowEmpty:true,
					color: '#ff0000',
					palette: [
						["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
						["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
						["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
						["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
						["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
						["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
						["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
						["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
					]
				});
				</script> */}
		</div>
    </th>
    <th>텍스트
	</th>
    <th>통계</th>
    </thead>

    <tbody>

<form name='fboardlist' method='post'>

  <input type='hidden'  value='20'/>
  <input type='hidden' value='20' checked/>

  <tr className='list0'  style={{height:'35px', textAlign: 'center'}}

  <td className='f_listb'>"Lv.20" </td>

  <td><input type='text' className='input_text' style={{width: '80px'}} value='일반회원'/></td>

  <td className='f_list'>일반회원
  {/* <!--
  &nbsp;&nbsp;
  <input type=button value='업데이트' className='input_span_small'  onclick='rt_confirm("_cardsys.level_main_form_update.php?_mode=confirm&cItem2=&lev=20&_PVSC=${_PVSC}");'>--> */}
  </td>

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
   <label><input type="checkbox" name="free_avatar[20]" value={"Y"} /></label>      </td>
  <td>
   <label>
 <input type="text" id="tree_color_20" name="tree_color[20]"  value="white" style={{ width:'60px',backgroundColor:'white',borderBottom:'1px', marginBottom:'2px'}}/>
 </label>

 {/* <script>

$('#tree_color_20').spectrum({
  type: color,
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  palette: [
    ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
    ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
    ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
    ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
    ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
    ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
    ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
    ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
  ]
});

 </script> */}

  </td>

  <td>
   <label>
 <input type="text" id="tree_color_font_20" name="tree_color_font[20]"  value={"black"} style={{ width:'60px',backgroundColor:'white',borderBottom:'1px', marginBottom:'2px'}}/>
 </label>

 {/* <script>

$('#tree_color_font_20').spectrum({
  type: "color",
  showPaletteOnly: true,
  togglePaletteOnly: true,
  hideAfterPaletteSelect: true,
  showInput: true,
  showInitial: true,
  palette: [
    ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
    ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
    ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
    ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
    ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
    ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
    ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
    ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
  ]
});


 </script> */}

  </td>
  
  <td><b>44</b> 명</td>

              </form>
            </tbody>
          </table>
      </div>
    </div>
    
</form>
</div>
</div>
</div>

)}
function mutate(params: { name: string; level: string; position_name: string; purchase_amount: number; amount_limit: string; purchase_pv: string; discount_rate: number; guanli_fee: number; minimum_purchase: number; upgrade: number; payment_limit: number; memo: string; }) {
  throw new Error('Function not implemented.');
}

export default LevelManagement