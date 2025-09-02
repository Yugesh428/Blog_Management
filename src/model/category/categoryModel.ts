import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  Default,
  ForeignKey,
  HasOne,
} from "sequelize-typescript";

import Blog from "../blog/blogModel";

@Table({
  tableName: "categories",
  modelName: "Category",
  timestamps: true,
})
class Category extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare description: string;
  @HasOne(() => Blog, {
    foreignKey: "categoryId",
    as: "blog",
  })
  declare blog?: Blog;
}

export default Category;
