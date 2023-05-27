import { Controller } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common/decorators';
import { CreateTodoDto } from './DTO/create-todo.dto';
import { Todos } from './todos.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}
  @Get()
  findTodo(@Query() createTodoDto: CreateTodoDto): Todos[] {
    if (Object.keys(createTodoDto).length) {
      return this.todosService.findTodo(createTodoDto);
    }
    return this.todosService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string): Todos {
    return this.todosService.findById(id);
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto): Todos {
    return this.todosService.createTodo(createTodoDto);
  }

  @Delete('/:id')
  deletTodo(@Param('id') id: string): void {
    this.todosService.deleteTodo(id);
  }
}
