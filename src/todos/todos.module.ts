import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from './schema/todos.schema';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todos', schema: TodoSchema }])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
