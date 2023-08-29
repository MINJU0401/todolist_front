import { Task } from "types";

export default interface GetSearchDateResponseDto {
  code: string;
  message: string;
  taskList: Task[];
}