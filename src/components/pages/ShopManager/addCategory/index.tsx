'use client'

const addCategory =()=>{
return(
    <html>
		<body>
    <div className="content_section">
			
            <form name='PUBLIC_FORM' method='post' action={()=>{}}  encType='multipart/form-data'>
            <input type='hidden' name='s' value='menu_add_tran' />
            <input type='hidden' name='cate_name' value='1' />
            <input type='hidden' name='show_or' value='12' />
            <input type='hidden' name='icon_img' value='5' />
          
    {/* // <!-- 검색영역 --> */}
	<div className='form_box_area'>
		<table className='form_TB' summary='검색항목'>
			<colgroup><col width='100px'/><col width='*'/></colgroup>
			<tbody> 
              <input type='hidden' name='parent_catecode' value='0' />
		<tr>
			<td className='article'>카테고리명</td>
			<td className='conts'><input type='text' name='catename' className='input_text' style={{width:'150px'}} value="" /></td>
		</tr>
		
		<tr>
			<td className='article'>노출여부</td>
			<td className='conts'>
                <select name='cHidden' >
                    <option value=''>-선택-</option>
                    <option value='no'/>노출
                    <option value='yes'/>숨김
                </select>
            </td>
		</tr>
    
		<tr>
			<td className='article'>아이콘 이미지</td>
			<td className='conts'><div style={{}}><img src='' id='img_cateimg' style={{ maxWidth:'300px', marginBottom:'5px', display:'none'}}/></div>
            <input type='file' name='cateimg' size={20} className='input_text'/></td>
		</tr>
	
	</tbody> 
    </table>

</div>

    {/* // <!-- 버튼영역 --> */}

	<div className='bottom_btn_area'>
		<div className='btn_line_up_center'>
			<span className='shop_btn_pack'>
				<input type='button' name='' className='input_large blue' value='저장' onClick={()=>{}}/>&nbsp;
				<input type='button' name='' className='input_large red' value='삭제' onClick={()=>{}}/>&nbsp;
				<input type='button' name='' className='input_large gray' value='닫기' onClick={()=>{}}/>&nbsp;
			</span>
		</div>
	</div>
   </form>
       
   
 </div>
 </body>
 </html>


)}


export default addCategory;