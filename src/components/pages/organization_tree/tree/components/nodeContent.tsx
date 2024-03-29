import React from "react";

type ContentProps = {
    onClickHandle?: (memberId: string) => void;
}
export const NodeContent = ({onClickHandle}: ContentProps) => {
    return (
        <div className="styleNode">
            <div className="title">
                <i className="fa fa-users symbol"></i>
                <p>운영자</p>
            </div>
            <div className="content">
                <div style={{background: '#ffe599', color: 'black', margin: '-3px', width: '200%', height: '200%'}}>
                    <div style={{width: '52%', paddingTop: '3px'}}>
                        정회원
                        <span style={{fontWeight: 'normal'}}>(23/06/20)</span>
                        <br/>
                        0
                        <p className="user_number" style={{background: '#ffe599', color: 'black'}}>2000001</p>
                    </div>
                    <p className="user_info" style={{cursor: 'pointer'}} onClick={(e) => {
                        alert('Hello' + e.target)
                        if (onClickHandle) {
                            // onClickHandle('200001')
                            console.log('Hello')
                        }}} data-uid="2000001">
                        <img src="/images/ic_my.gif" width="12" height="12"/>
                    </p>
                </div>
            </div>
            <i className="edge verticalEdge topEdge fa"></i><i className="edge verticalEdge bottomEdge fa"></i>
        </div>
    )
}