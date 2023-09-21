import { useEffect, useState } from "react";
import {getListOrderByUser, getListOrderDetail} from "../service/orderService";
import numeral from "numeral";
import ReactPaginate from "react-paginate";

function HistoryOrder (){
    const [orders, setOrders] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [page,setPage] = useState(0);
    const [flag,setFlag] = useState(false);
    const [ordersDetail, setOrdersDetail] = useState([])

    const headers = {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
      };

    const getListOrder = async(page) => {
        const data = await getListOrderByUser(page,headers);
        setTotalPage(data.totalPages);
        setOrders(data.content);
    }

    useEffect(()=>{
        getListOrder(0);
    },[])

    const formatDate = (inputString )=>{
var inputDate = new Date(inputString);
var day = inputDate.getDate().toString().padStart(2, '0');
var month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
var year = inputDate.getFullYear().toString();
var hours = inputDate.getHours().toString().padStart(2, '0');
var minutes = inputDate.getMinutes().toString().padStart(2, '0');
var seconds = inputDate.getSeconds().toString().padStart(2, '0');
var formattedString = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
return formattedString;
    }

    const handlePageClick = (event)=>{
        setPage(event.selected)
getListOrder(event.selected);
    }


    const hadleButtonDetail = async(id)=>{
        setFlag (true);
        const data = await getListOrderDetail(id,headers);
        setOrdersDetail(data);
    }

    console.log(ordersDetail);

    return(
        <>
        
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style dangerouslySetInnerHTML={{__html: "\nbody {\n    color: #566787;\n    background: #f5f5f5;\n    font-family: 'Varela Round', sans-serif;\n    font-size: 13px;\n}\n.table-responsive {\n    margin: 30px 0;\n}\n.table-wrapper {\n    min-width: 1000px;\n    background: #fff;\n    padding: 20px 25px;\n    border-radius: 3px;\n    box-shadow: 0 1px 1px rgba(0,0,0,.05);\n}\n.table-title {\n    padding-bottom: 15px;\n    background: #299be4;\n    color: #fff;\n    padding: 16px 30px;\n    margin: -20px -25px 10px;\n    border-radius: 3px 3px 0 0;\n}\n.table-title h2 {\n    margin: 5px 0 0;\n    font-size: 24px;\n}\n.table-title .btn {\n    color: #566787;\n    float: right;\n    font-size: 13px;\n    background: #fff;\n    border: none;\n    min-width: 50px;\n    border-radius: 2px;\n    border: none;\n    outline: none !important;\n    margin-left: 10px;\n}\n.table-title .btn:hover, .table-title .btn:focus {\n    color: #566787;\n    background: #f2f2f2;\n}\n.table-title .btn i {\n    float: left;\n    font-size: 21px;\n    margin-right: 5px;\n}\n.table-title .btn span {\n    float: left;\n    margin-top: 2px;\n}\ntable.table tr th, table.table tr td {\n    border-color: #e9e9e9;\n    padding: 12px 15px;\n    vertical-align: middle;\n}\ntable.table tr th:first-child {\n    width: 60px;\n}\ntable.table tr th:last-child {\n    width: 100px;\n}\ntable.table-striped tbody tr:nth-of-type(odd) {\n    background-color: #fcfcfc;\n}\ntable.table-striped.table-hover tbody tr:hover {\n    background: #f5f5f5;\n}\ntable.table th i {\n    font-size: 13px;\n    margin: 0 5px;\n    cursor: pointer;\n}\t\ntable.table td:last-child i {\n    opacity: 0.9;\n    font-size: 22px;\n    margin: 0 5px;\n}\ntable.table td a {\n    font-weight: bold;\n    color: #566787;\n    display: inline-block;\n    text-decoration: none;\n}\ntable.table td a:hover {\n    color: #2196F3;\n}\ntable.table td a.settings {\n    color: #2196F3;\n}\ntable.table td a.delete {\n    color: #F44336;\n}\ntable.table td i {\n    font-size: 19px;\n}\ntable.table .avatar {\n    border-radius: 50%;\n    vertical-align: middle;\n    margin-right: 10px;\n}\n.status {\n    font-size: 30px;\n    margin: 2px 2px 0 0;\n    display: inline-block;\n    vertical-align: middle;\n    line-height: 10px;\n}\n.text-success {\n    color: #10c469;\n}\n.text-info {\n    color: #62c9e8;\n}\n.text-warning {\n    color: #FFC107;\n}\n.text-danger {\n    color: #ff5b5b;\n}\n.pagination {\n    float: right;\n    margin: 0 0 5px;\n}\n.pagination li a {\n    border: none;\n    font-size: 13px;\n    min-width: 30px;\n    min-height: 30px;\n    color: #999;\n    margin: 0 2px;\n    line-height: 30px;\n    border-radius: 2px !important;\n    text-align: center;\n    padding: 0 6px;\n}\n.pagination li a:hover {\n    color: #666;\n}\t\n.pagination li.active a, .pagination li.active a.page-link {\n    background: #03A9F4;\n}\n.pagination li.active a:hover {        \n    background: #0397d6;\n}\n.pagination li.disabled i {\n    color: #ccc;\n}\n.pagination li i {\n    font-size: 16px;\n    padding-top: 6px\n}\n.hint-text {\n    float: left;\n    margin-top: 10px;\n    font-size: 13px;\n}\n" }} />
        <div className="container-xl">

        <div className="section-title" style={{paddingTop:"120px"}}>
                  <h2>Lịch sử mua hàng</h2>
                </div>
          {/* <div className="table-responsive"> */}
            <div className="table-wrapper" style={{paddingTop:"0px", paddingBottom:"90px"}}>
      
              <table className="table table-striped table-hover"  onClick={(e) => { e.stopPropagation(); console.log("Con clicked") }}>
                <thead>
                  <tr>
                    <th style={{width:"100px", textAlign:"center"}}>STT</th>
                    <th style={{textAlign:"center"}}>Ngày đặt hàng</th>						
                    <th style={{width:"250px"}}>Trạng thái</th>
                    <th style={{width:"250px", textAlign:"center"}}>Tổng tiền</th>
                    <th style={{width:"200px", textAlign:"center"}}>Chức năng</th>
                  </tr>
                </thead>
                <tbody>
                    {orders.map((c,index)=>{
                        return(
                            <tr key={index}>
                    <td style={{width:"100px", textAlign:"center"}}>{(index+1+page*5)}</td>
                    <td style={{textAlign:"center"}}>{formatDate(c.day_oder)}</td>
                   
                        {c.name_status=="Chờ xử lý"?
                        <td> <span className="status text-danger">•</span> {c.name_status}</td> 
                        :
                        c.name_status=="Đang giao"?
                        <td> <span className="status text-warning">•</span> {c.name_status}</td>
                        :
                        <td> <span className="status text-success">•</span> {c.name_status}</td>  
                    }
                                         
                    <td style={{textAlign:"center"}}>{numeral(c.total).format("00,0 đ")} vnđ</td>
                    <td  style={{textAlign:"center"}}><button className="button-his" onClick={()=>{hadleButtonDetail(c.id_oder)}}>Xem chi tiết</button></td>
                  </tr>
                        )
                    })}
                </tbody>
              </table>
              
              <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPage}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
            </div>
          {/* </div> */}

        
        </div>     
      </div>
      {flag==true?
            <div className="modall" onClick={()=>{setFlag(false)}}>
            <div className="modal-inner" onClick={()=>{}}>
            <h4>Chi tiết đơn hàng</h4>
            <table width={"100%"}>
            <tr>
                    <th>Sản phẩm</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                </tr>
                {ordersDetail.map((c,index)=>{
                    return(
                        <tr key={index}>
                        <td>{c.product.nameProduct}</td>
                        <td>{numeral(c.product.price).format("00,0 đ")} vnđ</td>
                        <td>{c.quantityProduct}</td>
                    </tr>

                    )
                })}
               
            </table>
            <div style={{textAlign:"left", padding:"30px"}}>
            <p>phí giao hàng : 20,000 vnđ</p>
            </div>
            </div>
            
                    </div>
                    :
                    <></>
      }

        </>
    )
}
export default HistoryOrder;