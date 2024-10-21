'use client'

const upload_popup = () => {

	return (
		<html>
			<body>

				<div id="wrap" style={{ background: "#fff" }}>

					{/* <!-- 내용 --> */}
					<div className="content_section">
						<div className="content_section_fix" style={{ background: "#fff" }}>

							<div className="open_close"><span className="btn_close" id="open_close_btn_close" title="메뉴닫기"></span><span className="btn_open" id="open_close_btn_open" title="메뉴열기"></span></div>
							<iframe src="inc.bonus_auto.php" width="0" height="0" frameBorder="0" style={{ display: "none" }}></iframe>
							<div className="common_ajax_proc"></div>
							<div className="new_option_box">
								{/* <!-- 엑셀업로드 # LDD011 { --> */}
								{/* <!-- 안내 및 기능 처음에 닫혀있고 if_open 추가하면 나타나고 새로고침해도 닫으면 닫은채로 열리면 열린채로 그 상태로 되어있도록 {--> */}
								<div className="option_data_top_type2">
									<div className="txt_box">상품옵션 일괄업로드
									</div>
									<form action="_product_option.upload_excel_pro.php" name="wFrm" method="post" encType="multipart/form-data">
				
													<div className="wrapping">

											{/* <!-- 엑셀파일 업로드폼 --> */}
											<div className="file_upload">
												<div className="input_file_box">
													<input type="text" id="fakeFileTxt" className="fakeFileTxt" readOnly disabled />
													<div className="fileDiv">
														<input type="button" className="buttonImg" value="파일찾기" />
														<input type="file" name="w_excel_file" className="realFile" onChange={() => { }} />
													</div>
												</div>
											</div>

											{/* <!-- 안내문구 {--> */}
											<div className="guide_text"><span className="ic_blue"></span><span className="blue">엑셀 일괄등록의 경우, 업로드를 함과 동시에 자동으로 정보저장이 됩니다.</span></div>
											<div className="guide_text"><span className="ic_blue"></span><span className="blue">차수에 맞게 옵션을 등록할 수 있습니다. (<a href="/upfiles/normal/option2depth_all_sample_type2.xls">샘플엑셀파일</a>을 다운받아서 업로드하세요.)</span></div>
											<div className="guide_text"><span className="ic_blue"></span><span className="blue">1차, 2차, 3차 옵션의 합산명칭이 같은 경우에는 수정, 다를 경우 추가하게 됩니다.</span></div>
											<div className="guide_text"><span className="ic_orange"></span><span className="orange">엑셀97~2003 버전 파일만 업로드가 가능합니다. 엑셀 2007이상 버전은(xlsx) 다른 이름저장을 통해 97~2003버전으로 저장하여 등록하세요.</span></div>
											{/* <!--} 안내문구 --> */}

											{/* <!-- 옵션기능 {--> */}
											<div className="btn_box">
												<span className="shop_btn_pack"><a href="javascript:_product_option_submit();" className="medium blue" title="">엑셀 일괄등록</a></span>
												<span className="shop_btn_pack"><a href="/upfiles/normal/option2depth_all_sample_type2.xls" className="medium gray" title="">샘플파일 다운</a></span>
											</div>
											{/* <!--} 옵션기능 --> */}
										</div>
									</form>
								</div>
								{/* <!--} 안내 및 기능 --> */}
								{/* <!-- } 엑셀업로드 # LDD011 --> */}
								{/* <!--} 상단--> */}
							</div>
							<div style={{ height: "30px" }}></div>
						</div>
					</div>
					{/* <!-- //내용 --> */}

					{/* <!-- // 가운데 --> */}

				</div>

			</body>
		</html>
	)
}

export default upload_popup;