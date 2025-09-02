import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  Default,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Category from "../category/categoryModel";

@Table({
  tableName: "blogs",
  modelName: "Blog",
  timestamps: true,
})
class Blog extends Model {
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
  declare title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare description: string;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    unique: true,
  })
  declare categoryId: string;

  @BelongsTo(() => Category, {
    foreignKey: "categoryId",
    as: "category",
  })
  declare category?: Category;
}

export default Blog;
