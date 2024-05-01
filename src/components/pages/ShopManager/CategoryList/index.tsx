'use client';

const CategoryList = () => {

	return (
		<html>
			<body>
				<div id="wrap" style={{ background: '#fff' }}>
					<div className="content_section">
						<div className="content_section_fix">

							<div className="content_section_inner">
								<table className="list_TB" summary="리스트기본">
									<colgroup>
									<col width={'*'}/>
									<col width={'120px'}/>


									</colgroup>
									<tbody>

										<tr>
											<td onClick={() => { }} className="app_tr" style={{ cursor: 'pointer', textAlign: "left" }}>Skin Care &amp; Body </td>
											<td>
												<div className="btn_line_up_center">
													<span className="shop_btn_pack"><input type="button" name="" className="input_small gray f_vup" value="△" data-serialnum="1536" data-framename="list1" onClick={() => { }} alt="상위로 이동" /></span>
													<span className="shop_btn_pack"><span className="blank_1"></span></span>
													<span className="shop_btn_pack"><input type="button" name="" className="input_small gray f_vdown" value="▽" data-serialnum="1536" data-framename="list1" onClick={() => { }} alt="하위로 이동" /></span>
													<span className="shop_btn_pack"><span className="blank_1"></span></span>
													<span className="shop_btn_pack"><input type="button" name="" className="input_small blue" value="수정" onClick={() => { }} /></span>
												</div>
											</td>
										</tr>

										<tr>
											<td onClick={() => { }} className="app_tr" style={{ cursor: 'pointer', textAlign: "left" }}>Hair Care</td>
											<td>
												<div className="btn_line_up_center">
													<span className="shop_btn_pack"><input type="button" name="" className="input_small gray f_vup" value="△" data-serialnum="1538" data-framename="list1" onClick={() => { }} alt="상위로 이동" /></span>
													<span className="shop_btn_pack"><span className="blank_1"></span></span>
													<span className="shop_btn_pack"><input type="button" name="" className="input_small gray f_vdown" value="▽" data-serialnum="1538" data-framename="list1" onClick={() => { }} alt="하위로 이동" /></span>
													<span className="shop_btn_pack"><span className="blank_1"></span></span>
													<span className="shop_btn_pack"><input type="button" name="" className="input_small blue" value="수정" onClick={() => { }} /></span>
												</div>
											</td>
										</tr>

										<tr>
											<td onClick={() => { }} className="app_tr" style={{ cursor: 'pointer', textAlign: "left" }}>Food</td>
											<td>
												<div className="btn_line_up_center">
													<span className="shop_btn_pack"><input type="button" name="" className="input_small gray f_vup" value="△" data-serialnum="1540" data-framename="list1" onClick={() => { }} alt="상위로 이동" /></span>
													<span className="shop_btn_pack"><span className="blank_1"></span></span>
													<span className="shop_btn_pack"><input type="button" name="" className="input_small gray f_vdown" value="▽" data-serialnum="1540" data-framename="list1" onClick={() => { }} alt="하위로 이동" /></span>
													<span className="shop_btn_pack"><span className="blank_1"></span></span>
													<span className="shop_btn_pack"><input type="button" name="" className="input_small blue" value="수정" onClick={() => { }} /></span>
												</div>
											</td>
										</tr>

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