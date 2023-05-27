import { Injectable } from '@nestjs/common';
import { Todos } from './todos.interface';
import { CreateTodoDto } from './DTO/create-todo.dto';
import { v4 as uuidv4 } from 'uuid';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class TodosService {
  private TodoItem: Todos[] = [];

  findAll(): Todos[] {
    return this.TodoItem;
  }

  findTodo(createTodoDto: CreateTodoDto): Todos[] {
    let todos = this.findAll();
    const { text } = createTodoDto;

    if (text) {
      todos = todos.filter((i) => i.text.toLowerCase().includes(text));
    }

    return todos;
  }
  findById(id: string): Todos {
    return this.TodoItem.find((i) => i.id === id);
  }
  createTodo(createTodoDto: CreateTodoDto) {
    const { onCompleted, text } = createTodoDto;

    const todo = {
      id: uuidv4(),
      text,
      onCompleted: false,
    };

    this.TodoItem.push(todo);
    return todo;
  }
  deleteTodo(id: string): void {
    this.TodoItem = this.TodoItem.filter((i) => i.id !== id);
    throw new HttpException('Deleted Todos', HttpStatus.OK);
  }
}
