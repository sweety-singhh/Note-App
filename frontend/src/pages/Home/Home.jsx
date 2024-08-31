import React, { useState } from 'react'
import NoteCard from '../../components/Cards/NoteCard'
import {MdAdd} from "react-icons/md"
import Modal from "react-modal"
import AddEditNotes from './AddEditNotes'

const Home= () => {
  const [openAddEditModal, setOpenEditModal] =useState({
    isShown:false,
    type:"add",
    data:null,
  }

  )

  return (
    <>
    <div className='container mx-auto'>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 max-md:m-5'>
        <NoteCard title={"wake up"}
        date={"9th June,3098"}
        content={"I hate my college"}
        tags={"#Jhonsnow"}
        isPinned={true}
        onEdit={()=>{}}
        onDelete={()=>{}}
        onPinNote={()=>{}}
       />
        <NoteCard title={"wake up"}
        date={"9th June,3098"}
        content={"I hate my college"}
        tags={"#Jhonsnow"}
        isPinned={true}
        onEdit={()=>{}}
        onDelete={()=>{}}
        onPinNote={()=>{}}
       />
        <NoteCard title={"wake up"}
        date={"9th June,3098"}
        content={"I hate my college"}
        tags={"#Jhonsnow"}
        isPinned={true}
        onEdit={()=>{}}
        onDelete={()=>{}}
        onPinNote={()=>{}}
       />
        <NoteCard title={"wake up"}
        date={"9th June,3098"}
        content={"I hate my college"}
        tags={"#Jhonsnow"}
        isPinned={true}
        onEdit={()=>{}}
        onDelete={()=>{}}
        onPinNote={()=>{}}
       />
        <NoteCard title={"wake up"}
        date={"9th June,3098"}
        content={"I hate my college"}
        tags={"#Jhonsnow"}
        isPinned={true}
        onEdit={()=>{}}
        onDelete={()=>{}}
        onPinNote={()=>{}}
       />
        <NoteCard title={"wake up"}
        date={"9th June,3098"}
        content={"I hate my college"}
        tags={"#Jhonsnow"}
        isPinned={true}
        onEdit={()=>{}}
        onDelete={()=>{}}
        onPinNote={()=>{}}
       />
        
      </div>
     
    </div>

    <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-[#2B85FF]
    hover:bg-blue-600 absolute right-10 bottom-10'
     onClick={()=>{
      setOpenEditModal({ isShown:true, type:"add",data:null})
    } }>
    <MdAdd className='text-[32px] text-white'/>
    </button>

    <Modal
      isOpen={openAddEditModal.isShown}
      oneRequestClose={() =>{}}
      style={{
        overlay: {
          backgroundColor: "rbga(0,0,0,0.2)",
        },
      } }
      contentLabel=""
      className="w-[40%] max-wd:w-[60%] max-sm:w-[70%] max-h-3/4 bg-white
      rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes onClose={()=> 
          setOpenEditModal({isShown:false, type:"add",data:null})
          }
          noteData={openAddEditModal.data}
          type={openAddEditModal.type}
          />
    </Modal>
    </>
  )
}

export default Home
