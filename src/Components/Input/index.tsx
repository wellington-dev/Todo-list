import { FormProps } from '../Interface'

const Input = ({ handleChange, handleSubmite, task }: FormProps) => {
  return (
    <form
      onSubmit={handleSubmite}
      className="flex w-full items-center mb-20 bg-slate-800 rounded-md sm:p-3 p-1"
    >
      <input
        className="flex w-full p-2 overflow-hidden border-none outline-none rounded-md bg-slate-800 text-white"
        type="text"
        placeholder="Escreva a task..."
        value={task}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="p-1 sm:p-2 bg-emerald-700 hover:bg-green-500 rounded"
      >
        ➕
      </button>
    </form>
  )
}

export default Input
