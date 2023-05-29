import { Controller } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Patch,
} from '@nestjs/common/decorators';
import { CreateTodoDto } from './DTO/create-todo.dto';
import { Todos } from './schema/todos.schema';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  async getAllTodos(): Promise<Todos[]> {
    return this.todosService.findQuery();
  }

  @Get('/:id')
  async getTodoById(@Param('id') id: string): Promise<Todos> {
    return this.todosService.findById(id);
  }

  @Post()
  async createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todos> {
    return this.todosService.createTodo(createTodoDto);
  }

  @Patch('/:id')
  async updateTodo(
    @Param('id') id: string,
    @Body() createTodoDto: CreateTodoDto,
  ): Promise<Todos> {
    return this.todosService.updateTodo(id, createTodoDto);
  }

  @Delete('/:id')
  async deleteTodo(@Param('id') id: string): Promise<Todos> {
    return this.todosService.deleteTodo(id);
  }
  // @Get()
  // findTodo(@Query() createTodoDto: CreateTodoDto): Todos[] {
  //   if (Object.keys(createTodoDto).length) {
  //     return this.todosService.findTodo(createTodoDto);
  //   }
  //   return this.todosService.findAll();
  // }

  // @Get('/:id')
  // findById(@Param('id') id: string): Todos {
  //   return this.todosService.findById(id);
  // }

  // @Post()
  // createTodo(@Body() createTodoDto: CreateTodoDto): Todos {
  //   return this.todosService.createTodo(createTodoDto);
  // }

  // @Delete('/:id')
  // deletTodo(@Param('id') id: string): void {
  //   this.todosService.deleteTodo(id);
  // }
}
