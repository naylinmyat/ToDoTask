import React, {useState} from 'react'

const Form = ({createTodo,count}) => {
    const [value,setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        createTodo(value);
        setValue('');
    }

  return (
    <div>
      <p className='font-primary text-white text-2xl font-bold mb-2'>Task Count : {count}</p>
      <form className='mb-4 font-primary w-full' onSubmit={handleSubmit}>
        <input type="text" className='outline-none bg-transparent border border-gray-500
        p-4 w-[300px] text-white rounded placeholder:text-gray-300'
        placeholder='What task do you have today?' onChange={(e) => setValue(e.target.value)} value={value} />
        <button className='bg-gray-700 border-none p-4 text-white
        cursor-pointer rounded ml-2'>
            Add Task
        </button>
      </form>
    </div>
  )
}

export default Form