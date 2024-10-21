'use client'
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import AUTH_API from "@/services/api/auth";
import PAGE_ROUTES from "@/utils/constants/routes";
import CategoryAPI from "@/services/api/addcategory";
import { useRouter } from "next/navigation";
import path from "path";
import { writeFile } from "fs-extra";
import { NextResponse } from "next/server";
import { uploadImageFile } from "@/utils/helper";
import { API_ENDPOINTS } from "@/services/api/endPoint";
import { de } from "date-fns/locale";
interface Props {
    depth: string;
    parent: string;
    id: string;
    name: string;
    active: string
}
const UpdateCategory = ({depth, parent, id, name, active}: Props) => {
    const router = useRouter();
    const [imageId, setImageId] = useState(0)

    const {isPending, mutate:mutateUpdate, isSuccess, isError} = useMutation(
        {
            mutationFn: CategoryAPI.update,
            onSuccess: async (values: any) => {
                console.log('success')
                // router.replace(PAGE_ROUTES.USERS.USER_MANAGEMENT)
                window.opener.focus();
                window.close();
            },

            onError: (error: any) => {
                if (error.response.status === 401) {
                    router.push(PAGE_ROUTES.AUTH.LOGIN);
                }
            },
        }
    )
    const handleImage = async (e:any) => {
        const file = e.target.files[0]
        if(!file) return

        const id = await uploadImageFile(file, API_ENDPOINTS.UPLOAD.UPLOAD_CATEGORY_FILE)

        setImageId(id);


        // const reader = new FileReader()
        // reader.readAsDataURL(file)
        // reader.onload = (e: any) => {
        //     if (reader.readyState === 2) {
        //         setImage(e.target.result)
        //     }
        // }
    }

    const handleSubmit = (formData: FormData) => {
        const catName = formData.get('catename');
        const isActive = formData.get('cHidden');
        mutateUpdate({
            id: Number(id || '0'),
            name: catName?.toString() || '',
            isActive: Number(isActive?.toString()) == 1,
            imgId: imageId,
            depth: Number(depth) || 1,
            parentId: Number(parent || '0'),
        })

    }
    return (
        <html>
        <body>
        <div className="content_section">
            <form name='PUBLIC_FORM' method='post' action={handleSubmit} encType='multipart/form-data'>
                <input type='hidden' name='s' value='menu_add_tran'/>
                <input type='hidden' name='cate_name' value='1'/>
                <input type='hidden' name='show_or' value='12'/>
                <input type='hidden' name='icon_img' value='5'/>

                {/* // <!-- 검색영역 --> */}
                <div className='form_box_area'>
                    <table className='form_TB' summary='검색항목'>
                        <colgroup>
                            <col width='100px'/>
                            <col width='*'/>
                        </colgroup>
                        <tbody>
                        <input type='hidden' name='parent_catecode' value='0'/>
                        <tr>
                            <td className='article'>카테고리명</td>
                            <td className='conts'>
                                <input type='text' name='catename' className='input_text' style={{width: '150px'}} defaultValue={name}/>
                            </td>
                        </tr>

                        <tr>
                            <td className='article'>노출여부</td>
                            <td className='conts'>
                                <select name='cHidden'>
                                    <option value=''>-선택-</option>
                                    <option value={1} selected={active == 'true'}>노출</option>
                                    <option value={0} selected={active == 'false'}>숨김</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td className='article'>아이콘 이미지</td>
                            <td className='conts'>
                                <div style={{}}>
                                    <img src='' id='img_cateimg'
                                         style={{maxWidth: '300px', marginBottom: '10px', display: 'none'}}/>
                                </div>
                                <input type='file' name='cateimg' size={20} className='input_text'
                                       onChange={handleImage}
                                />
                            </td>
                        </tr>

                        </tbody>
                    </table>

                </div>

                {/* // <!-- 버튼영역 --> */}

                <div className='bottom_btn_area'>
                    <div className='btn_line_up_center'>
                        <span className='shop_btn_pack'>
                            <input type='submit' name='' className='input_large blue' value='저장'/>&nbsp;
                            {/*<input type='button' name='' className='input_large red' value='삭제'*/}
                            {/*       onClick={() => {}}/>&nbsp;*/}
                            <input type='button' name='' className='input_large gray' value='닫기'
                                   onClick={() => {
                                       window.opener.focus();
                                       window.close();
                                   }}/>&nbsp;
                        </span>
                    </div>
                </div>
            </form>


        </div>
        </body>
        </html>


    )
}


export default UpdateCategory