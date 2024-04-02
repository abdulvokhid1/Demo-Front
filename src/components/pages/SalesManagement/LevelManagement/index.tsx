'use client'
import Slider  from '@/components/layouts/Slider/Sales';
import { useEffect, useState } from 'react';
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
      const sale_date = formData.get('sale_date');
  const income_option = formData.get('new ')
      const sale_type = formData.get('sale_type');
  const income_option_amount = formData.get('mb_entry_option');
      const meno = formData.get('meno')
      const income_option_select_amount = formData.get('select_amount');
      const sale_amount = formData.get('sale_amount');
      const sale_pv = formData.get('sale_pv');
      const income_option_appstatus = formData.get('appstatus');
      const income_option_daily_pay = formData.get('daily_pay');
      const sale_id = formData.get('sale_id');
      const select_ex_date = formData.get('select_ex_date');

  
      const params = {
          name: id? id.toString() : '',
          sale_date: sale_date ? sale_date.toString() : '',
    income_option:income_option === 'Y'? 1 : 0,
    sale_type: sale_type? sale_type.toString(): '',
    income_option_amount: Number(income_option_amount) || 0,
          meno: meno? meno.toString() : '',
          income_option_select_amount: income_option_select_amount?.toString() || '',
    sale_amount: sale_amount?.toString() || '',
    sale_pv: sale_pv?.toString() || '',
    income_option_appstatus: income_option_appstatus?.toString || '',
    income_option_daily_pay: income_option_daily_pay?.toString || '',
    sale_id: sale_id?.toString || '',
    select_ex_date:select_ex_date?.toString || '',
      }
      console.log(params)
      // mutate(params);

      // Handle response if necessary
      // const data = await response.json()
      // ...
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
											가맹점 레벨관리
					</span>
                    <span className="location">홈 &gt; 가맹점관리 &gt; 가맹점 레벨관리</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}

                  <iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>
{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}

<div className="common_ajax_proc"></div>
	
</div>
</div>
</div>

   )}
   export default LevelManagement;
