import {
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity as Base,
} from 'typeorm';

export abstract class BaseEntity<T> extends Base {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  constructor(params?: Partial<T>) {
    super();
    if (params) {
      // noinspection TypeScriptValidateTypes
      Object.assign(this, params);
    }
  }
}
