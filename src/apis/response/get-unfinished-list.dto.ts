import { Task } from "types";

export default interface GetUnfinishedTaskListResponseDto {
  code: string;
  message: string;
  taskList: Task[];
}