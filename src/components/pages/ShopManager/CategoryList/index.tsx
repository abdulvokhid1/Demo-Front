'use client';

import { useEffect, useState } from "react";
import { CategoryType } from "@/utils/types/type";
import { useMutation } from "@tanstack/react-query";
import CategoryAPI from "@/services/api/addcategory";
import PAGE_ROUTES from "@/utils/constants/routes";
import {useRouter} from "next/navigation";
import { tr } from "date-fns/locale";
interface Props {
	depth: string;
}
const CategoryList = ({depth}: Props) => {
	const router = useRouter();
	const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
	const [selectedCatId, setSelectedCatId] = useState<number>();
	const {isPending, mutate:mutateCategoryList, isSuccess, isError} = useMutation(
		{
			mutationFn: CategoryAPI.list,
			onSuccess: async (values: any) => {
				console.log('success')
				setCategoryList(values);
			},

			onError: (error: any) => {
				if (error.response.status === 401) {
					router.push(PAGE_ROUTES.AUTH.LOGIN);
				}
			},
		}
	)
	const onFocus = () => {
		console.log("Tab is in focus");
		const params = {
			depth: Number(depth || '1'),
			asc: true,
		}
		mutateCategoryList(params);
	};
	useEffect(() => {

		window.addEventListener("focus", onFocus);
		// Calls onFocus when the window first loads
		onFocus();
		// Specify how to clean up after this effect:
		return () => {
			window.removeEventListener("focus", onFocus);
		};
	}, []);
	useEffect(() => {
		const params = {
			depth: Number(depth || '1'),
			asc: true,
		}
		mutateCategoryList(params);
	}, []);


	return (
		<html>
			<body>
				<div id="wrap" style={{ background: '#fff' }}>
					<div className="content_section">
						<div className="content_section_fix">

							<div className="content_section_inner">
								<input type="hidden" id={'selectedCatId'+depth} value={selectedCatId}/>
								<table className="list_TB" summary="리스트기본">
									<colgroup>
									<col width={'*'}/>
									<col width={'120px'}/>


									</colgroup>
									<tbody>
									{categoryList?.length > 0 && (
										categoryList?.map((item: any, index) => (
											<tr key={index}>
												<td onClick={() => {
													setSelectedCatId(item.id);
												}} className="app_tr"
													style={{cursor: 'pointer', textAlign: "left"}}>{item.name}
												</td>
												<td>
													<div className="btn_line_up_center">
													<span className="shop_btn_pack">
														<input type="button" name=""
															   className="input_small gray f_vup"
															   value="△"
															   data-serialnum="1536"
															   data-framename="list1"
															   onClick={() => {
															   }}
															   alt="상위로 이동"
														/>
													</span>
														<span className="shop_btn_pack">
															<span className="blank_1"></span>
														</span>
														<span className="shop_btn_pack">
															<input type="button" name=""
																   className="input_small gray f_vdown"
																   value="▽"
																   data-serialnum="1536"
																   data-framename="list1"
																   onClick={() => {
																   }}
																   alt="하위로 이동"
															/>
														</span>
														<span className="shop_btn_pack">
															<span className="blank_1"></span>
														</span>
														<span className="shop_btn_pack">
															<input type="button" name=""
																   className="input_small blue"
																   value="수정"
																   onClick={() => {
																   }}
															/>
														</span>
													</div>
												</td>
											</tr>
										))
									)}

									</tbody>

								</table>
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>


	)
}
export default CategoryList;