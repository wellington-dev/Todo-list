import { FormEvent, ChangeEvent } from "react"

export interface ITask {
  nameTask: string
  id: number
  done: boolean
}

export interface CardProps {
  task: ITask
  deleteTask(DeleteTaskBytID: number): void
  checkTodoList(ChekList: number): void
}
export interface FormProps {
  handleChange(e: ChangeEvent): void
  handleSubmite(e: FormEvent): void
  task: string
}
