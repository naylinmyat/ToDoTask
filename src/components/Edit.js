import React, {useState} from 'react'

const Edit = ({editTask,task}) => {
    const [value,setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        editTask(value,task.id);
        setValue('');
    }

  return (
    <form className='mb-1 font-primary w-full' onSubmit={handleSubmit}>
        <input type="text" className='outline-none bg-transparent border border-gray-500
        p-4 w-[300px] text-white rounded placeholder:text-gray-300'
        placeholder='Update Task' onChange={(e) => setValue(e.target.value)} value={value} />
        <button className='bg-gray-700 border-none p-4 text-white
        cursor-pointer rounded ml-2'>
            Update Task
        </button>
    </form>
  )
}

export default Edit