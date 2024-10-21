'use client'
import Slider from '@/components/layouts/Slider/Log';
import { useEffect, useState } from "react";

const TiemConnection = () => {
	const [sliderVisible, setSliderVisible] = useState(true)
	useEffect(() => {
		console.log('sliderVisible: ', sliderVisible)
	}, [sliderVisible]);
	const sliderToggle = () => {
		setSliderVisible(!sliderVisible);
	}

	return (
		<div className={sliderVisible ? "container" : "container_hide" } id="depth2_leftmenu" style={{background: "#f0f0f0"}}>
		<Slider />
		<div className="content_section">
			<div className="content_section_fix" style={{ background: '#fff' }}>
				<div className="open_close">
					<span className="btn_close" id="open_close_btn_close" title="메뉴닫기"style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
					<span className="btn_open" id="open_close_btn_open" title="메뉴열기"style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                </div>

				{/* <!-- 페이지타이틀 --> */}

				<div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
					일별접속통계					
					</span>
                    <span className="location">홈 &gt; 로그분석 &gt; 일별접속통계</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
				  {/*<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>*/}
           <div className="common_ajax_proc"></div>

				{/* <!-- 검색영역 --> */}
				<div className="form_box_area">
					<form method='get' name='frm' action="/myAdmin/_counter.day.php">
					<input type='hidden' name='mode' value='search'/>
					<table className="form_TB" summary="검색항목">
						<colgroup>
							<col width="120px"/><col width="200px"/><col width="120px"/>
							{/* <!-- 마지막값은수정안함 --> */}
							<col width="*"/>
						</colgroup>
						<tbody> 
							<tr>
								<td className="article">총방문자 수</td>
								<td className="conts" style={{font:'tahoma', fontSize:'21',color:'#FF6600'}}>
									<b>0</b>명</td>
								<td className="article">월 선택</td>
								<td className="conts">
									<select name='Select_Year'  >
										<option value=''>-선택-</option>
									<option value='2022' >2022</option>
									<option value='2023' >2023</option>
									<option value='2024' selected>2024</option></select>년&nbsp;&nbsp;
									<select name='Select_Month'>
									<option value=''>-선택-</option>
									<option value='1' >1</option>
									<option value='2' >2</option>
									<option value='3' selected></option>3
									<option value='4' >4</option>
									<option value='5' >5</option>
									<option value='6' >6</option>
									<option value='7' >7</option>
									<option value='8' >8</option>
									<option value='9' >9</option>
									<option value='10' >10</option>
									<option value='11' >11</option>
									<option value='12' >12</option></select>월&nbsp;&nbsp;
									<select name='Select_Day' >
										<option value=''>-선택-</option>
										<option value='1' >1</option><option value='2' >2</option><option value='3' >3</option>
										<option value='4' >4</option><option value='5' >5</option><option value='6' >6</option>
										<option value='7' >7</option><option value='8' >8</option><option value='9' >9</option>
										<option value='10' >10</option><option value='11' >11</option>
										<option value='12' >12</option><option value='13' >13</option>
										<option value='14' >14</option><option value='15' >15</option>
										<option value='16' selected>16</option><option value='17' >17</option><option value='18' >18</option>
										<option value='19' >19</option><option value='20' >20</option>
										<option value='21' >21</option><option value='22' >22</option>
										<option value='23' >23</option><option value='24' >24</option>
										<option value='25' >25</option><option value='26' >26</option>
										<option value='27' >27</option><option value='28' >28</option>
										<option value='29' >29</option><option value='30' >30</option>
										<option value='31' >31</option></select>일</td>
										</tr>
									</tbody> 
					</table>
					
					{/* <!-- 버튼영역 --> */}
					<div className="top_btn_area">
						<div className="btn_line_up_center">
							<span className="shop_btn_pack btn_input_blue"><input type="submit" className="input_medium" title="검색" value="검색"/></span>
													</div>
					</div>
					</form>
				</div>
				{/* <!-- // 검색영역 --> */}

				{/* <!-- 리스트영역 --> */}
				<div className="content_section_inner">

					{/* <!-- 리스트 제어버튼영역 */}
					<div className="top_btn_area">
						<span className="shop_btn_pack"><a href="#none" className="small white" title="전체선택" >전체선택</a></span>
						<span className="shop_btn_pack"><span className="blank_3"></span></span>
						<span className="shop_btn_pack"><a href="#none" className="small white" title="전체선택" >전체선택해제</a></span>
					</div>
					{/* <!-- // 리스트 제어버튼영역 --> */}


					<table className="list_TB" summary="리스트기본">
						<colgroup>
							<col width="80px"/><col width="100px"/><col width="*"/><col width="100px"/>
						</colgroup>
						<thead>
							<tr>
								<th scope="col" className="colorset">구분</th>
								<th scope="col" className="colorset">접속자수</th>
								<th scope="col" className="colorset">그래프</th>
								<th scope="col" className="colorset">비율</th>
							</tr>
						</thead> 
						<tbody> 
						    <tr>
								<td><b>0</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>1</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>2</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>3</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>4</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>5</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>6</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>7</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>8</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
							<tr>
								<td><b>9</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>10</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>11</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>12</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>13</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>14</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>15</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
							<tr>
								<td><b>16</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
							<tr>
								<td><b>17</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>18</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>19</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
							<tr>
								<td><b>20</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>21</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
		
							<tr>
								<td><b>22</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
							<tr>
								<td><b>23</b>시</td>
								<td><b>0</b>명</td>
								<td style={{textAlign:'left'}}>
									<table width='1%' border={0} cellSpacing={0} cellPadding={0} style={{height:'8'}}>
										<tr><td  style={{backgroundColor:'#CCCCCC'}}></td></tr>   
									</table>
								</td>
								<td><b>0.00</b>%</td>
							</tr>	
						</tbody> 
					</table>
			</div>

				<div style={{height:'30px'}}></div>
			</div>
        </div>
      </div>
   
    )}
    export default TiemConnection;