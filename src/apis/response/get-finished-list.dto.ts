import { Task } from "types";

export default interface GetFinishedTaskListResponseDto {
  code: string;
  message: string;
  taskList: Task[];
}