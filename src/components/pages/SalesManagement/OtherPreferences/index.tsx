'use client'
import Slider  from '@/components/layouts/Slider/users';
import SETUP_FEE_API from '@/services/api/setup_fee';
import PAGE_ROUTES from '@/utils/constants/routes';
import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';
import { useEffect, useState } from 'react';
const OtherPreferences = () => {
    const [sliderVisible, setSliderVisible] = useState(true)
    const [messageApi, contextHolder] = message.useMessage()
    useEffect(() => {
    console.log('sliderVisible: ', sliderVisible)
    }, [sliderVisible]);
    const sliderToggle = () => {
    setSliderVisible(!sliderVisible);
    }
    const {isPending, mutate, isSuccess, isError} = useMutation(
      {
          mutationFn: SETUP_FEE_API.updateSetup_fee,
          onSuccess: async (values: any) => {
              console.log('success')
          },

          onError: (error: any) => {
              const errorType = error.response.data.errors[0]
              messageApi.open({
                  type: 'error',
                  content: 't(`errorMessages.${errorType}`)',
              })
          },
      }
  )

const onSubmit = async (formData: FormData) => {

      const id = formData.get('id');
      const income_option_select_fee = formData.get('select_fee');
       const tax = formData.get('tax ')
      const withdrawal_fee = formData.get('withdrawal_fee');
       const transfer_fee = formData.get('transfer_fee');
      const other_savefee = formData.get('other_savefee')
     
  
      const params = {
          name: id? id.toString() : '',
          income_option_select_fee:income_option_select_fee === 'Y'? 1 : 0,
          tax: tax? tax.toString(): '',
          withdrawal_fee: Number(withdrawal_fee) || 0,
          transfer_fee: Number(transfer_fee) || 0,
          other_savefee: Number(other_savefee) || 0,
       }
      console.log(params)
      mutate(params);

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
                  <div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"style={{display: sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span>
                  <span className="btn_open" id="open_close_btn_open" title="메뉴열기"style={{display: !sliderVisible ? "block" : "none"}} onClick={sliderToggle}></span></div>
            
                {/* <!-- 페이지타이틀 --> */}
                  <div className="title_area">
                    <span className="icon"></span>
                    <span className="title">
						기타 환경설정					
					</span>
                    <span className="location">홈 &gt; 가맹점관리 &gt; 기타 환경설정</span>
                  </div>
                  {/* <!-- // 페이지타이틀 --> */}
   
<iframe src="inc.bonus_auto.php" width={0} height={0} frameBorder={0} style={{display:'none'}}></iframe>

{/* <!--<iframe src="inc.bonus_auto_test.php" width=100% height=100px frameborder=0></iframe>--> */}
<div className="common_ajax_proc"></div>

{/* <style>
.colorset {font-weight:bold}
</style> */}

<form name='fregiform' method='post' action={onSubmit} >
<input type='hidden' name='mode' value='w'/>
{/* <!--<input type='hidden' name='pass_master' value=''>--> */}

<input type='hidden' name='pass_master' value='superadmin'/>
<input type="hidden" name="app_mode" value=""/>
<input type='hidden' name='_mode' value='add'/>
<input type="hidden" name="item_state1" value="y"/>
<input type="hidden" name="item_state2" value="y"/>
<input type="hidden" name="item_state3" value="y"/>
<input type="hidden" name="item_state4" value="y" />
<input type="hidden" name="item_state5" value="y"/>
<input type="hidden" name="a2" value="" size={15} className='input_text' readOnly/>
<input type="hidden" name="a3" value="" size={15} className='input_text' readOnly/>
<input type="hidden" name="a4" value="" size={15} className='input_text' readOnly/>
<input type="hidden" name="a5" value="" size={15} className='input_text' readOnly/>

  <div className="form_box_area" style={{margin:'0px',border:'0px'}}>

        <table cellPadding={0} cellSpacing={1} width="100%" align="center" style={{marginTop:'10px'}}>
        <tr> 
            <td height="18" align="center"> 
            <table width="100%" cellPadding={0} cellSpacing={0} border={0} style={{}}>
            <tr> 
                <td align="left">

                            {/* <!-- 내부 그룹타이틀 --> */}
                            <div className="group_title">
                                <span className="icon"></span><span className="title">기타 환경설정</span>
                                {/* <!--<span className="btn_area"><span className="shop_btn_pack"><a href="_order.list.php?menu_idx=21" className="small gray" title="더보기" >보기</a></span></span>--> */}
                            </div>
                            {/* <!-- 내부 그룹타이틀 --> */}
                </td>
            </tr>
            </table>
	   <tr><td height='10'color='blue'></td> </tr>
       </td>
	</tr>
</table>

	<table className="form_TB" summary="검색항목" style={{borderTop:'2px'}}>
	<col width="20%" />
	<col width="80%" />


	<tr style={{height:'60px'}}>
		<td className="article" >수수료 지급유무</td>
		<td className='otto' style={{padding:'5px 10px'}}>
			<label htmlFor="ids_p_shop1"><input id="ids_p_shop1" style={{marginBottom:'-1px'}} type='radio' name='p_shop' value="y" checked/><b> 사용함</b></label>&nbsp;
			
			<label htmlFor="ids_p_shop2"><input id="ids_p_shop2" style={{marginBottom:'-1px'}} type='radio' name='p_shop' value="n"/> <b> 사용안함</b></label>
			<span className='f_help'><div className='guide_text'><span className='ic_blue'></span><span className='blue'>수수료 지급 유무를 선택합니다.</span></div></span>
			
		</td>
	</tr>

	{/* <!-- 상품판매수수료 고정으로 처리... 수정시 문제가 있어서--> */}
	{/* <!--<input type="hidden" name="p_shop" value="y">--> */}

	<tr style={{height:'40px'}}>
		<td className="article" >수수료정산시 세금공제</td>
		<td className='otto' style={{padding:'5px 10px'}}>
			<input type='text' name='accent_tax' value="3" size={15} className='input_text' style={{textAlign:'right'}}/> %
			<span className='f_help'><div className='guide_text'><span className='ic_blue'></span><span className='blue'>수수료정산시 세금공제 후 나머지 실금액만 정산처리됩니다.</span></div></span>
		</td>
	</tr>

	<tr style={{height:'40px'}}>
		<td className="article" >출금수수료</td>
		<td className='otto' style={{padding:'5px 10px'}}>
			<input type='text' name='withdraw_fee' value="3.5" 	size={15} className='input_text' style={{textAlign:'right'}}/> %
			<span className='f_help'></span>
		</td>
	</tr>


	<tr style={{height:'40px'}}>
		<td className="article" >전환수수료</td>
		<td className='otto' style={{padding:'5px 10px'}}>
			<input type='text' name='transform_fee' value="0" size={15} className='input_text' style={{textAlign:'right'}}/> %
			<span className='f_help'></span>
		</td>
	</tr>

	<tr style={{height:'40px'}}>
		<td className="article" >기타 적립공제시</td>
		<td className='otto' style={{padding:'5px 10px'}}>
			<input type='text' name='accent2_tax' value="10" size={15} className='input_text' style={{textAlign:'right'}}/> %
			<span className='f_help'><div className='guide_text'><span className='ic_blue'></span><span className='blue'>기타 적립공제시 사용</span></div></span>

		</td>
	</tr>
    </table>

	        <div style={{height:'20px',clear:'both'}}>
            </div>
            <div className='bottom_btn_area'>
                <div className='btn_line_up_center'>
                    <span className='shop_btn_pack btn_input_red'><input type='submit' name='' className='input_large' value='저장'/></span>
                    <span className='shop_btn_pack'><span className='blank_3'></span></span>
                </div>
            </div>		
            <div style={{height:'30px'}}></div>      

            </div>
   </form>
           </div>
       </div>
     </div>

    )}
    export default OtherPreferences;