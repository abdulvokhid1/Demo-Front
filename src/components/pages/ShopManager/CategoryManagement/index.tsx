'use client'
import Slider  from '@/components/layouts/Slider/Shop';
import PAGE_ROUTES from '@/utils/constants/routes';
import { useEffect, useState } from 'react';
const CategoryManagement = () => {
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
    <Slider/>

<div className="content_section">
                <div className="content_section_fix" style={{background:'#fff'}}>

                  <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                  <span className="btn_open" id="open_close_btn_open" title="메뉴열기"style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>
         
                  {/* <!-- 페이지타이틀 --> */}
                  <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
						카테고리 관리					
					</span>
                    <span className="location">홈 &gt; 상품관리 &gt; 카테고리 관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
    
<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>

{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

<div className="common_ajax_proc"></div>

{/* <script type='text/javascript' src='_category_shop.js'></script> */}

<form name='PUBLIC_FORM' method='post'>
<input type='hidden' name='chk_list2' value=''/>
<input type='hidden' name='chk_list3' value=''/>
<input type='hidden' name='chk_list4' value=''/>
					{/* <!-- 검색영역 --> */}
					<div className="form_box_area">

						<table className="form_TB" summary="검색항목">
							<colgroup>
								<col width="33%"/><col width="33%"/><col width="33%"/>
							</colgroup>
							<thead>
								<tr>
									<th scope="col" className="colorset">
										<div className='btn_line_up_center'>
											<span className='shop_btn_pack'>1차 카테고리</span>
											<span className='shop_btn_pack'><span className='blank_3'></span></span>
											<span className='shop_btn_pack'><input type='button' name='' className='input_small blue' value='추가' onClick={()=>{
												window.open(PAGE_ROUTES.SHOP.CATEGORY_REGISTRATION, '카테고리 추가', 'height: 80px, width: 100px')
											}}/></span>
										</div>
									</th>
									<th scope="col" className="colorset">
										<div className='btn_line_up_center'>
											<span className='shop_btn_pack'>2차 카테고리</span>
											<span className='shop_btn_pack'><span className='blank_3'></span></span>
											<span className='shop_btn_pack'><input type='button' name='' className='input_small blue' value='추가' onClick={()=>{
												window.open(PAGE_ROUTES.SHOP.CATEGORY_REGISTRATION)
											}}/></span>
										</div>
									</th>
									<th scope="col" className="colorset">
										<div className='btn_line_up_center'>
											<span className='shop_btn_pack'>3차 카테고리</span>
											<span className='shop_btn_pack'><span className='blank_3'></span></span>
											<span className='shop_btn_pack'><input type='button' name='' className='input_small blue' value='추가' onClick={()=>{
												window.open(PAGE_ROUTES.SHOP.CATEGORY_REGISTRATION)
											}}/></span>
										</div>
									</th>
								</tr>
							</thead> 
							<tbody> 
								<tr>
									<td className="conts"><iframe name='list1'  src='_category_shop.pro.php?depth=1' width='100%' height='400' style={{textAlign:'center',border:'2px solid #c1c1c1'}}></iframe></td>
									<td className="conts"><iframe name='list2'  src='' width='100%' height='400' style={{textAlign:'center',border:'2px solid #c1c1c1'}} ></iframe></td>
									<td className="conts"><iframe name='list3'  src='' width='100%' height='400' style={{textAlign:'center',border:'2px solid #c1c1c1'}} ></iframe></td>
								</tr>
							</tbody> 
						</table>

					</div>
					<iframe name='list4'  src='' width='0' height='0' style={{textAlign:'center'}} marginWidth={0} marginHeight={0} scrolling='no'  frameBorder='0'></iframe>
					<iframe name='set'  src='' width='0' height='0' style={{textAlign:'center'}} marginWidth={0} marginHeight={0} scrolling='no'  frameBorder='0'></iframe>

				<div style={{height:'30px'}}></div>
                </form>
			</div>
		</div>
	
</div>

   )}
    export default CategoryManagement;