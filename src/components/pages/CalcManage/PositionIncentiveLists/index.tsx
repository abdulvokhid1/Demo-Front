'use client'
import Slider  from '@/components/layouts/Slider/Calc';
import { useEffect, useState } from 'react';
const PositionIncentiveLists = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
    useEffect(() => {
    console.log('sliderVisible: ', sliderVisible)
    }, [sliderVisible]);
    const sliderToggle = () => {
    setSliderVisible(!sliderVisible);
    }
  
    return(
        <div className={sliderVisible ? "container" : "container_hide" } id="depth2_leftmenu" 
        style={{background: "#f0f0f0"}}>
			   <Slider />
            
               <div className ="content_section">
                <div className ="content_section_fix" style={{background:'#fff'}}>
                  <div className ="open_close"><span className ="btn_close" id="open_close_btn_close" title="메뉴닫기"style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                  <span className="btn_open" id="open_close_btn_open" title="메뉴열기"style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>
          
                  {/* <!-- 페이지타이틀 --> */}
                  <div className ="title_area">
                    <span className ="icon"></span>
                    <span className ="title">
						직급보너스내역				
					</span>
                    <span className ="location">홈 &gt; 전산관리 &gt; 수당2</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
                  
    
{/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>*/}

{/* <!--<iframe src="inc.bonus_auto_test.php" width='100%' height=100px frameborder=0></iframe>--?> */}

 <div className ="common_ajax_proc"></div>

{/* <!-- 검색영역 --> */}

<form name="fsearch" method="post" action="/myAdmin/_entershop.bonus_no_b2.php">
	<input type='hidden' name='code' value=""/>
	<input type="hidden" name="app_mode" value=""/>

	<div className ="form_box_area">
		<table className ="form_TB" summary="검색항목">
			<colgroup>
				<col width="100px"/>
				<col width="350px"/>
				<col width="100px"/>
				<col width="300px"/>
			</colgroup>

			<tbody>
				<tr>
  	        		<td className ="article">기간</td>
					<td className ="conts" colSpan={10}></td>
					<td className="conts" colSpan={10}>
						<input type='hidden' id="sh_year" name='sh_year' value="2024"/>
						<input type='hidden' id="sh_month" name='sh_month' value="03"/>
							<select name="sh_week" id="sh_week" >
						<option value=''>주별검색</option>
						</select>

                        <span id="sh_all" style={{display:'none'}}>
							
                        <div className ='btn_line_up_left'>
				<input type='text' name='time_start' style={{width:'75px',textAlign:'center'}} value="" className ='input_text' id="time_start"/>
				~
				<input type='text' name='time_end' style={{width:'75px',textAlign:'center'}} value="" className ='input_text' id="time_end"/>&nbsp;&nbsp;&nbsp;
			</div>
			<div className ='btn_line_up_left'>
			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>어제</button>&nbsp;&nbsp;</span>
			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>이번주</button>&nbsp;&nbsp;</span>
			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>7일간</button>&nbsp;&nbsp;</span>
			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>지난달</button>&nbsp;&nbsp;</span>
			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>이번달</button>&nbsp;&nbsp;</span>
			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>30일간</button>&nbsp;&nbsp;</span>
			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>60일간</button>&nbsp;&nbsp;</span>
			<span className='shop_btn_pack'><button type='button' className='input_small gray' onClick={()=>{}} style={{cursor:'pointer'}}>90일간</button></span>
			</div>

			</span>
					</td>
					<td className ="article" style={{width:'100px'}}>검색구분</td>
					<td className ="conts">
					  <input type="radio" name='restoretype' id="restoretype1" value="" onClick={()=>{}}  checked={true}/>
					  <label htmlFor='restoretype1' style={{height:'18px'}}>정산관리</label>
					  &nbsp;
					  <input type="radio" name='restoretype' id="restoretype2" value="result" onClick={()=>{}} />
					  <label htmlFor='restoretype2' style={{height:'18px'}}>정산내역</label>
					  &nbsp;
					</td>
					<td className ="article search_id" style={{display:'none'}}>아이디</td>
					<td className ="conts search_id" style={{display:'none'}}>
						<input type='text' name='member_id' value=""  className ='input_text'/>
					</td>
				</tr>

				</tbody> 
		</table>
		
		{/* <!-- 버튼영역 --> */}
		<div className="top_btn_area">
			<div className="btn_line_up_center">

            <span className ="shop_btn_pack btn_input_blue"><input type="submit" className ="input_medium" title="검색" value="검색"/></span>

			</div>
		</div>
	</div>
</form>

{/* <!-- // 검색영역 --> */}
<div className="form_box_area">

<table border={0} cellPadding={0} cellSpacing={0} width='100%'style={{borderCollapse:'collapse'}}>
<tr style={{height:'40', textAlign:'left'}}> 
	<td style={{padding:'5px', color:'4C64AB'}}>
		전체 : <b>0</b> 건  조회
		| 발생금액 : <b>0</b>
		| 세금공제 : <b>0</b>
		| 실수령액 : <b>0</b>
	</td>
</tr>
</table>

</div>


<form name='fboardlist' method='post'>
	<input type='hidden' name='q1'	value="code="/>
	<input type='hidden' name='page' value="1"/>
	<input type='hidden' name='mode'	value="restore"/>
	<input type='hidden' name='_search_que' value="IHdoZXJlIGEubWVtYmVyX2lkIT0nYWRtaW4nIGFuZCBhLnJhZ2kgPSAxIGFuZCAoanVfZGF0ZSA9ICcyMDI0LTAzLTExfjIwMjQtMDMtMTcnKSAgYW5kICgoanVfZGF0ZSA9ICcyMDI0LTAzLTExfjIwMjQtMDMtMTcnKSBvciAoZGF5X2RhdGUgPj0gJzIwMjQtMDMtMTEnIGFuZCBkYXlfZGF0ZSA8PSAnMjAyNC0wMy0xNycpKQ=="/>
	<input type='hidden' name='year_month' value="2024-03"/>
	<input type='hidden' name='year_weekday' value="2024-03-11~2024-03-17"/>
	<input type='hidden' name='year_day' value="2024-03-15"/>


				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">
                    
		<div className="top_btn_area">
			{/* <!--<span className="shop_btn_pack"><a href="./calcu/calcu_bonus1_xls.php?code=&sh_year=2024&sh_month=03&sh_day=15" className="small white" />엑셀다운로드</a></span>--> */}

			<span className="shop_btn_pack"><a href="javascript:select_send('excel_restore');" className="small white" title="선택엑셀저장" >선택엑셀저장</a></span>
			<span className="shop_btn_pack"><span className="blank_3"></span></span>
			<span className="shop_btn_pack"><a href="javascript:search_send('excel_restore');" className="small white" title="검색엑셀저장" >검색엑셀저장 (0)</a></span>
			<span className="shop_btn_pack"><span className="blank_3"></span></span>
			<span className="shop_btn_pack"> <a onClick={()=>{}} className="small white">정산유보</a></span>
			{/* <!--<a href="./calcu/calcu_bonus2_restore_xls.php?code=&sh_year=2024&sh_month=03&sh_day=15" /><img src="./img/_bt_Excel.gif" alt='엑셀다운로드'></a>--> */}
			{/* <!--<img src='./image/btn_mmpoint_01.gif' onclick="btn_check('update')" style='cursor:hand' alt='정산완료'>--> */}
			{/* <!--<img src='./image/btn_mmpoint_02.gif' onclick="btn_check('restore')" style='cursor:hand' alt='정산유보'>--> */}
			{/* <!--<img src='./image/btn_mmpoint_03.gif' onclick="btn_check('refusal')" style='cursor:hand' alt='정산거절'>--> */}

		</div>
					<table className="list_TB" summary="리스트기본">
						<thead>

							<tr style={{height:'50', textAlign:'center'}}>
								<th scope="col" className="colorset"><input type='checkbox' name='chkall' value="1" onClick={()=>{}}/></th>
								<th scope="col" className="colorset">No</th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3_restore.php?code=&sh_year=2024&sh_month=03&sh_day=15&page=&filed=b.name&orderby=asc'><u>회원명</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3_restore.php?code=&sh_year=2024&sh_month=03&sh_day=15&page=&filed=a.member_id&orderby=asc'><u>아이디</u></a></th>		
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3_restore.php?code=&sh_year=2024&sh_month=03&sh_day=15&page=&filed=b.memgrade&orderby=asc'><u>레벨</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3_restore.php?code=&sh_year=2024&sh_month=03&sh_day=15&page=&filed=a.total&orderby=asc'><u>발생금액</u></a></th>		
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3_restore.php?code=&sh_year=2024&sh_month=03&sh_day=15&page=&filed=a.total&orderby=asc'><u>세금공제</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3_restore.php?code=&sh_year=2024&sh_month=03&sh_day=15&page=&filed=total&orderby=asc'><u>적립공제</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3_restore.php?code=&sh_year=2024&sh_month=03&sh_day=15&page=&filed=a.total&orderby=asc'><u>기타공제</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3_restore.php?code=&sh_year=2024&sh_month=03&sh_day=15&page=&filed=a.total&orderby=asc'><u>실수령액</u></a></th>	
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3_restore.php?code=&sh_year=2024&sh_month=03&sh_day=15&page=&filed=a.reg_date&orderby=asc'><u>기간</u></a></th>	
								{/* <!--<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3_restore.php?code=&sh_year=2024&sh_month=03&sh_day=15&page=&filed=a.ragi&orderby=asc'><u>정산</u></a></th>--> */}
							</tr>
						</thead> 

<tr><td height={50} colSpan={21} align='center' color='#ffffff'>마감할 자료가 없습니다.</td></tr>
	 
</table>
</div>
		
     <table width='100%' cellPadding={0} cellSpacing={0} style={{marginTop:'10px'}}>
        <tr><td width='50%' align="right"></td>	</tr>
     </table>
	</form>
    </div>
    </div>
</div>
 
    )}
    export default PositionIncentiveLists;