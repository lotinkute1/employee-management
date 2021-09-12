import React, { Component } from 'react';

class DataTableRow extends Component {
    checkPermission=(p)=> {
        if(p===1) return "Admin"
        else if(p===2) return "Moderator"
            else return "Normal"
    }
    connectApToEdit=()=>{
        const editItem={}
        editItem.id=this.props.id;
        editItem.name=this.props.name;
        editItem.telephone=this.props.tele;
        editItem.permission=this.props.permission;
        this.props.editData1(editItem);
    }
    connectApToDelete=()=>{
        this.props.deleteData(this.props.id);
    }
    render() {
        return (
            <tr>
                <td >{this.props.stt}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tele}</td>
                <td>{this.checkPermission(this.props.permission)}</td>
                <td>
                    <div className="btn-group">
                        <button onClick={()=>this.connectApToEdit()} className="btn btn-primary"><i className="fa fa-edit" /> Sửa</button>
                        <button onClick={()=>this.connectApToDelete()} className="btn btn-danger"><i className="fa fa-trash" /> Xóa</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default DataTableRow;