import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Todos } from './schema/todos.schema';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todos.name)
    private TodoItem: mongoose.Model<Todos>,
  ) {}
  async findQuery(): Promise<Todos[]> {
    const res = await this.TodoItem.find();
    return res;
  }
  async createTodo(todo: Todos): Promise<Todos> {
    const res = await this.TodoItem.create(todo);
    return res;
  }

  async findById(id: string): Promise<Todos> {
    const res = await this.TodoItem.findById(id);
    return res;
  }

  async updateTodo(id: string, todo: Todos): Promise<Todos> {
    const res = await this.TodoItem.findByIdAndUpdate(id, todo, {
      new: true,
      runValidators: true,
    });
    return res;
  }
  async deleteTodo(id: string): Promise<Todos> {
    const res = await this.TodoItem.findByIdAndDelete(id);
    return res;
  }
}
