import { Task } from "types";

export default interface GetPassTaskListResponseDto {
  code: string;
  message: string;
  taskList: Task[];
}