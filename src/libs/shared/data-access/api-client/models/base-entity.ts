export class BaseEntity<TID = number> {
  public id!: TID;

  constructor(baseEntity: Partial<BaseEntity<TID>> = {}) {
    Object.assign(this, baseEntity);
  }
}
