'use client'
import Slider  from '@/components/layouts/Slider';
import { useEffect, useState } from 'react';
const PositionIncenList = () => {
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

        <div className="content_section">
                <div className="content_section_fix" style={{background:'#fff'}}>
                  <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"
                 style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                 <span className="btn_open" id="open_close_btn_open" title="메뉴열기"
                     style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>
                    
                  {/* <!-- 페이지타이틀 --> */}
                  <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
					직급보너스					
					</span>
                    <span className="location">홈 &gt; 전산관리 &gt; 수당3</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
   
<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder='0' style={{display:'none'}}></iframe>

{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

<div className="common_ajax_proc"></div>

{/* <!-- 검색영역 --> */}
<form name="fsearch" method="post" action="/myAdmin/_entershop.bonus_no_b3.php">
	<input type='hidden' name='code' value=""/>
	<input type="hidden" name="app_mode" value=""/>

	<div className="form_box_area">
		<table className="form_TB" summary="검색항목">
			<colgroup>
				<col width="100px"/>
				<col width="350px"/>
				<col width="100px"/>
				<col width="300px"/>
			</colgroup>

			<tbody>
				<tr>
					<td className="article">기간</td>
					<td className="conts" colSpan={10}>
						<input type='hidden' id="sh_year" name='sh_year' value="2024"/>
						<input type='hidden' id="sh_month" name='sh_month' value="03"/>
							<select name="sh_week" id="sh_week" >
						<option value=''>주별검색</option>
						</select>
					</td>

					<td className="article search_id" style={{display:'none'}}>아이디</td>
					<td className="conts search_id" style={{display:'none'}}>
					<input type='text' name='member_id' value=""  className='input_text'/>
					</td>
				</tr>
				</tbody> 
		</table>
		
		{/* <!-- 버튼영역 --> */}
		<div className="top_btn_area">
			<div className="btn_line_up_center">

				<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색" value="검색"/></span>

{/* <!--
				<span className="shop_btn_pack"><span className="blank_3"></span></span>
				<span className="shop_btn_pack"><a href='_entershop.bonus_stats_term.php?p_type=ju&sh_year=2024&sh_month=03&pass_orderid=&app_mode=popup' onclick="openwindow(this,'stats','1200','600','yes');return false" className="medium gray">회원보기</a></span>
--> */}
			</div>
		</div>
	</div>
</form>
{/* <!-- // 검색영역 --> */}

<div className="content_section_inner">

	<table className="list_TB" summary="리스트기본">
		<thead>
			<tr>
				<td colSpan={10} className="new_order_data_sum">
					
					<div className="inner_sum_box">
						<ul>
							<li className="txt">2024-03-11~2024-03-17 전체매출( BV)<span className="value">0</span></li>
						</ul>
					</div>

{/* <!--상품테이블 에서 매출 가져옴
					<div style="clear:both"></div>
					<div className="inner_sum_box">
						<ul>
							<li className="txt">2024-03-11~2024-03-17 전체매출 PV<span className="value">0 PV</span></li>
							<li className="txt">2024-03-11~2024-03-17 전체매출(원)<span className="value">0 원</span></li>
						</ul>
					</div>
--> */}
				</td>
			</tr>
		</thead> 
	</table>
</div>
			
	<div className="content_section_inner" style={{border:'0px',background:'#fff',margin:'0px',padding:'0px'}}>

		<table className="list_TB" summary="리스트기본" style={{border:'0px',background:'#fff'}}>
			<tr>
	{/* <!--
				<td className="new_order_data_foot" style="border:0px;background:#fff">
					<div className="inner_sum_box">
						<ul>
							<li className="txt">전체 100% <span className="value">0 </span></li>
						</ul>
					</div>				
				</td>
	--> */}
				<td className="new_order_data_foot" style={{border:'0px',background:'#fff'}}>
					<div className="inner_sum_box">
						<ul>
							<li className="txt">공유 10% <span className="value">0 </span></li>
						</ul>
					</div>				
				</td>
			</tr>
		</table>
	</div>

	<form name='share_form' method='post' onSubmit={()=>{}}>
	<input type='hidden' name='q1'	value="code="/>
	<input type='hidden' name='year_month' value="2024-03"/>
	<input type='hidden' name='year_weekday' value="2024-03-11~2024-03-17"/>
	<input type='hidden' name='year_day' value="2024-03-12/"/>
	<input type='hidden' name='break_txt' value="2024-03-11~2024-03-17"/>

<div className="content_section_inner">
<input type='hidden' name='bonus_total_pv'	value='0'/><input type='hidden' name='bonus_total_price'value='0'/><input type='hidden' name='draft_total_pv'value='0'/>
<input type='hidden' name='draft_total_price'	value='0'/><input type='hidden' name='t_set_pv'	value=''/>
<input type='hidden' name='t_set_price'	value=''/><input type='hidden' name='t_gen_pv'	value=''/><input type='hidden' name='t_gen_price'	value=''/>

	<table className="list_TB" summary="리스트기본">
			<tr style={{textAlign:'center'}}>
				<td colSpan={3} className="table_cell1" style={{fontWeight:'bold'}}>팀장</td>
				<td colSpan={3} className="table_cell1" style={{fontWeight:'bold'}}>1스타</td>
				<td colSpan={3} className="table_cell1" style={{fontWeight:'bold'}}>2스타</td>
				<td colSpan={3} className="table_cell1" style={{fontWeight:'bold'}}>3스타</td>
				<td colSpan={3} className="table_cell1" style={{fontWeight:'bold'}}>4스타</td>
				<td colSpan={3} className="table_cell1" style={{fontWeight:'bold'}}>5스타</td>
			</tr>
			<tr style={{textAlign:'center'}}>
				<td className="table_cell1">
									16.5%
								</td>	
				<td className="table_cell1">(명)</td>
				<td className="table_cell1">(원)</td>
				<td className="table_cell1">
									16.5%
								</td>	
				<td className="table_cell1">(명)</td>
				<td className="table_cell1">(원)</td>
				<td className="table_cell1">
									16.5%
								</td>	
				<td className="table_cell1">(명)</td>
				<td className="table_cell1">(원)</td>
				<td className="table_cell1">
									16.5%
								</td>	
				<td className="table_cell1">(명)</td>
				<td className="table_cell1">(원)</td>
				<td className="table_cell1">
									16.5%
								</td>	
				<td className="table_cell1">(명)</td>
				<td className="table_cell1">(원)</td>
				<td className="table_cell1">
									16.5%
								</td>	
				<td className="table_cell1">(명)</td>
				<td className="table_cell1">(원)</td>
			</tr>
			<tr className='list' style={{height:'20px', textAlign:'center', backgroundColor:'fefaef'}} onMouseOver={()=>{}} onMouseOut={()=>{}}>

				<input type='hidden' name=''	value='0'/><input type='hidden' name="draft_share_per[0]"	value='16.5'/><input type='hidden' name="draft_share_grade[0]"	value='11'/><input type='hidden' name='draft_share_grade_name[0]'	value='팀장'/><input type='hidden' name='draft_share_cnt[0]'	value='0'/><input type='hidden' name='draft_share_cal[0]'	value='0'/><input type='hidden' name="draft_dup_cnt[0]"	value='0'/><input type='hidden' name='draft_bonus_total[0]'	value='0'/><input type='hidden' name='p_sort_volume[0]'	value=''/>

				<td className='f_listr'>
				0
				</td>
				<td className='f_listb'>0</td>	
				<td className='f_listb'>0<br/><input type="text" name="draft_mod_cal[0]" value="0" style={{width:'60px',textAlign:'center'}}/></td>
				<input type='hidden' name='draft_share_total[1]'	value='0'/><input type='hidden' name='draft_share_per[1]'	value='16.5'/><input type='hidden' name='draft_share_grade[1]'	value='10'/><input type='hidden' name='draft_share_grade_name[1]'	value='1스타'/><input type='hidden' name='draft_share_cnt[1]'	value='0'/><input type='hidden' name='draft_share_cal[1]'	value='0'/><input type='hidden' name='draft_dup_cnt[1]'	value='0'/><input type='hidden' name='draft_bonus_total[1]'	value='0'/><input type='hidden' name='p_sort_volume[1]'	value=''/>
				<td className='f_listr'>
				
				0
				
				</td>
				<td className='f_listb'>0</td>	
				<td className='f_listb'>0<br/><input type="text" name="draft_mod_cal[1]" value="0" style={{width:'60px',textAlign:'center'}}/></td>

				<input type='hidden' name='draft_share_total[2]'	value='0'/><input type='hidden' name='draft_share_per[2]'	value='16.5'/><input type='hidden' name='draft_share_grade[2]'	value='9'/><input type='hidden' name='draft_share_grade_name[2]'	value='2스타'/><input type='hidden' name='draft_share_cnt[2]'	value='0'/><input type='hidden' name='draft_share_cal[2]'	value='0'/><input type='hidden' name='draft_dup_cnt[2]'	value='0'/><input type='hidden' name='draft_bonus_total[2]'	value='0'/><input type='hidden' name='p_sort_volume[2]'	value=''/>

				<td className='f_listr'>
				
				0
				
				</td>
				<td className='f_listb'>0</td>	
				<td className='f_listb'>0<br/><input type="text" name="draft_mod_cal[2]" value="0" style={{width:'60px',textAlign:'center'}}/></td>

				<input type='hidden' name='d=draft_share_total[3]'	value='0'/><input type='hidden' name='draft_share_per[3]'	value='16.5'/><input type='hidden' name='draft_share_grade[3]'	value='8'/><input type='hidden' name='draft_share_grade_name[3]'	value='3스타'/><input type='hidden' name='draft_share_cnt[3]'	value='0'/><input type='hidden' name='draft_share_cal[3]'	value='0'/><input type='hidden' name='draft_dup_cnt[3]'	value='0'/><input type='hidden' name='draft_bonus_total[3]'	value='0'/><input type='hidden' name='p_sort_volume[3]'	value=''/>
				<td className='f_listr'>
				0
				</td>
				<td className='f_listb'>0</td>	
				<td className='f_listb'>0<br/><input type="text" name="draft_mod_cal[3]" value="0" style={{width:'60px',textAlign:'center'}}/></td>

				<input type='hidden' name='draft_share_total[4]'	value='0'/>
                    <input type='hidden' name='draft_share_per[4]' value='16.5'/><input type='hidden' name='draft_share_grade[4]'	value='7'/>
                        <input type='hidden' name='draft_share_grade_name[4]'	value='4스타'/><input type='hidden' name='draft_share_cnt[4]'	value='0'/>
                            <input type='hidden' name='draft_share_cal[4]'	value='0'/><input type='hidden' name='draft_dup_cnt[4]'	value='0'/>
                                <input type='hidden' name='draft_bonus_total[4]'	value='0'/><input type='hidden' name='p_sort_volume[4]'	value=''/>

				<td className='f_listr'>
					0
				</td>
				<td className='f_listb'>0</td>	
				<td className='f_listb'>0<br/><input type="text" name="draft_mod_cal[4]" value="0" style={{width:'60px',textAlign:'center'}}/></td>
				<input type='hidden' name='draft_share_total[5]'	value='0'/><input type='hidden' name='draft_share_per[5]'	value='16.5'/>
                    <input type='hidden' name='draft_share_grade[5]'	value='6'/><input type='hidden' name='draft_share_grade_name[5]'	value='5스타'/>
                        <input type='hidden' name='draft_share_cnt[5]'	value='0'/><input type='hidden' name='draft_share_cal[5]'	value='0'/>
                            <input type='hidden' name='draft_dup_cnt[5]'	value='0'/><input type='hidden' name='draft_bonus_total[5]'	value='0'/>
                                <input type='hidden' name='p_sort_volume[5]'	value=''/>

				<td className='f_listr'>
				0
				</td>
				<td className='f_listb'>0</td>	
				<td className='f_listb'>0<br/><input type="text" name="draft_mod_cal[5]" value="0" style={{width:'60px',textAlign:'center'}}/></td>
				<input type='hidden' name='data_stat1'	value='팀장^1스타^2스타^3스타^4스타^5스타'/><input type='hidden' name='data_stat2'	value='16.5^16.5^16.5^16.5^16.5^16.5'/><input type='hidden' name='data_stat3'	value='0^0^0^0^0^0'/><input type='hidden' name='data_stat4'	value='0^0^0^0^0^0'/><input type='hidden' name='data_stat5'	value='0^0^0^0^0^0'/><input type='hidden' name='data_stat6'	value=''/><input type='hidden' name='data_stat10'	value='^^^^0'/>
			</tr>
	</table>
    </div>
	<div className="content_section_inner" style={{border:'0px',background:'fff',margin:'0px',padding:'0px'}}>
		<table className="list_TB" summary="리스트기본" style={{border:'0px',background:'#fff'}}>
			<tr>
				<td className="new_order_data_foot" style={{background:'#fff'}}>
					<div className="inner_sum_box">
						<ul>
							<li className="txt">대상인원 <span className="value">0</span> 명 </li>
						</ul>
					</div>				
				</td>
				<td className="new_order_data_foot" style={{background:'#fff'}}>
					<div className="inner_sum_box">
						<ul>
							<li className="txt">적용금액 <span className="value">0 </span></li>
						</ul>
					</div>				
				</td>
			</tr>
		</table>
	</div>

	<table width='100%' cellPadding={0} cellSpacing={0} className='MG-T10'>
	<tr>
		<td width="100%" height="50" align="center">
			<input className="pay_drapt"  type='image' src='./images/sub/btn_pay_drapt.gif' style={{textAlign:'center'}} />
			<div style={{display:'none'}}><span><label><input type="checkbox" name="agree" className="bonus_hidden_chkbox hidde_pay_drapt" /></label></span></div>
		</td>
	</tr>
    </table>
	</form>
   

	<form name='fboardlist' method='post'>
	<input type='hidden' name='q1'	value="code="/>
	<input type='hidden' name='page'	value="1"/>

	{/* <!--엑셀다운 추가 --> */}
	<input type='hidden' name='mode'	value=""/>
	<input type='hidden' name='year_month' value="2024-03"/>
	<input type='hidden' name='year_weekday' value="2024-03-11~2024-03-17"/>
	<input type='hidden' name='year_day' value="2024-03-12"/>
	{/* <!--엑셀다운 추가 --> */}

				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">
                	<table className="list_TB" summary="리스트기본">
						<thead>
							<tr style={{height:'40 align=left'}}>
								<th scope="col" className="colorset"><input type='checkbox' name='chkall' value="1" onClick={()=>{}}/></th>
								<th scope="col" className="colorset" style={{fontSize:'11px',color:'red'}}>(지급X체크)<br/><input type='checkbox' name='pointlockall' value="Y" onClick={()=>{}}/></th>
								<th scope="col" className="colorset">No</th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3.php?code=&page=&filed=b.name&orderby=asc'><u>회원명</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3.php?code=&page=&filed=member_id&orderby=asc'><u>아이디</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3.php?code=&page=&filed=b.memgrade&orderby=asc'><u>레벨</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3.php?code=&page=&filed=total&orderby=asc'><u>발생금액</u></a></th>		
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3.php?code=&page=&filed=total&orderby=asc'><u>세금공제</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3.php?code=&page=&filed=total&orderby=asc'><u>적립공제</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3.php?code=&page=&filed=total&orderby=asc'><u>실수령액</u></a></th>	
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3.php?code=&page=&filed=total&orderby=asc'><u>메모</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3.php?code=&page=&filed=total&orderby=asc'><u>계좌번호</u></a></th>	
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3.php?code=&page=&filed=reg_date&orderby=asc'><u>기간</u></a></th>	
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3.php?code=&page=&filed=ragi&orderby=asc'><u>상태</u></a></th>
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3.php?code=&page=&filed=total&orderby=asc'><u style={{color:'red'}}>발생금액-수정</u></a></th>		
								<th scope="col" className="colorset"><a href='/myAdmin/_entershop.bonus_no_b3.php?code=&page=&filed=ragi&orderby=asc'><u>조직도</u></a></th>
							</tr>
						</thead> 

		<tr><td height='50'colSpan={20} align='center' style={{backgroundColor:'#ffffff'}}>내역이 없습니다.</td></tr>
        <div className="top_btn_area">
			{/* <!--<span className="shop_btn_pack"><a href="./calcu/calcu_bonus2_xls.php?code=" className="small white" />엑셀다운로드</a></span>--> */}
			<span className="shop_btn_pack pay_drapt" ><a onClick={()=>{}} className="large red" >정산완료</a></span>
			<span className="shop_btn_pack pay_drapt" ><span className="blank_3"></span></span>
			<span className="shop_btn_pack pay_drapt" ><span className="blank_3"></span></span>
			<span className="shop_btn_pack"><a href="javascript:select_send('excel_center');" className="large white" title="선택엑셀저장" >선택엑셀저장</a></span>
		</div>
						<tfoot>
							<tr>
								<td colSpan={20} style={{height:'20px'}}>
								</td>
							</tr>
							<tr>
								<td colSpan={20} className="new_order_data_sum">
				 			    	<div className="inner_sum_box">
										<ul>
											<li className="txt">정산 총 합계</li>
											<li><span className="sum">합계</span><span className="value">0 </span></li>
											<li><span className="sum">세금공제</span><span className="value">0 </span></li>
											<li><span className="sum">실수령액</span><span className="value">0 </span></li>

										</ul>
									</div>
								</td>
							</tr>
						</tfoot>
                        </table>
                        </div>
                        
                        
<table width='100%' cellPadding={0} cellSpacing={0} style={{marginTop:'10px'}}>
	<tr>
		<td width='50%' align='left'>

		{/* <!--<img src='./image/btn_mmpoint_02.gif' onclick="btn_check('defer')" style='cursor:hand' alt='정산유보'>
		<img src='./image/btn_mmpoint_03.gif' onclick="btn_check('refusal')" style='cursor:hand' alt='정산거절'>--> */}
        </td>

		<td width='50%' align="right"></td>
	</tr>
	</table>

	</form>

</div>
</div>
</div>

)}


export default PositionIncenList;