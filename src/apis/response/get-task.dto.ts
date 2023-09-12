import { Task } from "types";
import ResponseDto from "./response.dto";

export default interface GetTaskResponseDto extends ResponseDto, Task {

}