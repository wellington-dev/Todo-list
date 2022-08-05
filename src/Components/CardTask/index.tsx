import { CardProps } from '../Interface'

const CardTask = ({ task, deleteTask, checkTodoList }: CardProps) => {
  return (
    <div
      className={`flex items-center w-full border-b-4 border-slate-600 justify-between  hover:bg-card cursor-pointer transition-all mb-4 rounded-md p-1
                  ${task.done ? 'bg-gray-900' : 'bg-slate-700'}`}>

      <div onClick={() => checkTodoList(task.id)} className="w-full">
        <p className={`p-1 ${task.done ? 'text-white ' : 'text-gray-500 line-through'}`}>
          {task.nameTask}
        </p>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="bg-rose-600 hover:bg-rose-400  ml-2 p-1 sm:p-2 rounded">
        ✖️
      </button>
    </div>
  )
}

export default CardTask
