'use client'
import Slider  from '@/components/layouts/Slider/Shop';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductManage_API from '@/services/api/productmd';
import { message } from 'antd';
import { useMutation } from '@tanstack/react-query';
import { OrderType } from '../../../../utils/types/type';

export const Paginate = ()=> {

  const [messageApi, contextHolder] = message.useMessage()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalUsers, setTotalUsers] = useState<number>(0)
  const [perPage, setPerPage] = useState<number>(2)
  const [orderList, setOrderList] = useState<OrderType>()
  
  const {isPending, mutate, isSuccess, isError} = useMutation(
    {
        mutationFn: ProductManage_API.getList,
        onSuccess: async (values: any) => {
            setOrderList(values.Order);
            setTotalUsers(values.total);
            //console.log(JSON.stringify())
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

  const paginationHandler = (selectedItem: { selected: number }) => {
    const page = selectedItem ? selectedItem.selected+1 : 0;
    mutate({page: page, limit: perPage})
}

    return(
<div>
    	{/* <!-- 페이지네이트 --> */}
		<div style={{display:'flex', alignItems:'center', justifyContent:'center' ,margin:'0 auto'}}>
                        <ReactPaginate
                            previousLabel={<FontAwesomeIcon icon={faArrowAltCircleLeft}/>}
                            nextLabel={<FontAwesomeIcon icon={faArrowAltCircleRight}/>}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            activeClassName={'active'}
                            containerClassName={'pagination'}
                            // subContainerClassName={'pages pagination'}

                            initialPage={currentPage-1}
                            pageCount={Math.ceil(totalUsers/ perPage)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={paginationHandler}
                        />
                        </div>
		{/* <!-- // 페이지네이트 --> */}
</div>
 )
}