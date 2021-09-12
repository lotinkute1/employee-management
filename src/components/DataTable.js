import React, { Component } from 'react';
import DataTableRow from './DataTableRow';
class DataTable extends Component {
    render() {
        let renderDataRow=this.props.data.map((item,index)=>{
            return <DataTableRow deleteData={(deleteID)=>this.props.deleteData(deleteID)} editData1={(editItem)=>this.props.editData0(editItem)} key={index} stt={index+1} id={item.id} name={item.name} tele={item.telephone} permission={item.permission}/>
        })
      
    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>SĐT</th>
                        <th>Quyền</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {renderDataRow}
                </tbody>
            </table>
        </div>

    );
    }
}

export default DataTable;