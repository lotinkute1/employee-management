
import './App.css';
import AddUser from './components/AddUser';
import DataTable from './components/DataTable';
import Header from './components/Header';
import Line from './components/Line';
import Search from './components/Search';
import React, { useEffect, useState } from 'react';
import DataUser from './components/Data.json';
function App() {
  const [formState,setFormState] = useState(false);
  // const [data,setData] = useState(DataUser);
  const [data,setData] = useState(()=>{
    console.log("da chay ham mount");
    if(localStorage.getItem("dataUser")===null) return DataUser;
    else return JSON.parse( localStorage.getItem("dataUser"));
  });
  const[searchText,setSearchText] = useState("");
  const[editFormState,setEditFormState] = useState(false);
  const[editItem,setEditItem] = useState();
  // const[editedItem,setEditedItem] = useState();
  useEffect(()=>{//hàm này chạy sau render (nó giống với componentdidmount với componentdidupdate)
      console.log("da luu vao localStorage");
      localStorage.setItem("dataUser",JSON.stringify(data));
  },[data]);//cái ngoặc vuông này  (tham số thứ 2) là một cái list, để đảm bảo web không lag thì chỉ khi những phần tử trong list này thay đổi thì hàm mới chạy, trường hợp ở đây là data nó là state nên có hay không trong list này thì nó vẫn cứ chạy

  let changFormState=()=>{
    if(formState)
    setFormState(false);
    else  setFormState(true);
  };

  let findButtonConn=(compData)=>{
    setSearchText(compData);
  }

  let getItems = (item)=>{
    
    let newData=data;
    newData.push(item);
    setData([...newData]);//... để setstate nhận biết là sate mới này khác state cũ do đó giao diện mới được render lại
    console.log(data);
  }
  
  let getFindResult=()=>{
    console.log("haha");
    const results=[];
    data.forEach((user)=>{
      if(user.name.indexOf(searchText)!==-1) results.push(user);
    })
    return results;
  }

  let editData =(editItem)=>{
    setEditFormState(true);
    // console.log("da lay duoc item can edit la:");
    setEditItem(editItem);
  }

  let editedData = (editedItem)=>{
    console.log("da lay duoc du item da duoc edit");
    console.log(editedItem);
    // setEditedItem(editedItem);
    setEditFormState(false);
    let tempData=data;
    tempData.forEach((item,index)=>{
      if(item.id===editItem.id){ tempData[index]=editedItem; 
      console.log("da chinh sua item");}
    })
    console.log(tempData);
    setData([...tempData]);

  }
  let deleteData = (deleteID)=>{
    console.log("da lay duoc id item can delete:");
    console.log(deleteID);
    let answer = window.confirm("Do you sure to delete this item ?")
    if (answer) {
      let tempData = data;
      tempData.forEach((item,index)=>{
        if(item.id===deleteID){
          tempData.splice(index,1);
        }
      })
      setData([...tempData]);
      console.log('item da bi xoa');
      localStorage.setItem("dataUser",JSON.stringify( tempData));
      
    } else {
      console.log('item khong bi xoa');
    }
  }
  
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="row">
          <Search editData={editItem} editedData={(editedItem)=>editedData(editedItem)} editFormState={editFormState} findButtonConn={(compData)=>findButtonConn(compData)} ketnoi={()=>changFormState()} formState={formState}/>
          <Line/>
          <DataTable deleteData={(deleteID)=>deleteData(deleteID)} editData0={(editItem)=>editData(editItem)} data={getFindResult()}/>
          <AddUser formState={formState} getItems={(item)=>getItems(item)}/>
        </div>
      </div>
            
    </div>
  );
  
}

export default App;
