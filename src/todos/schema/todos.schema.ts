import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Todos {
  @Prop()
  text: string;

  @Prop()
  onCompleted: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todos);
