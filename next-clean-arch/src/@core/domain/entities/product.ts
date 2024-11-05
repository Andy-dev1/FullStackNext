export type ProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

export class Product {
  constructor(public props: ProductProps) {}

  public get id(): string {
    return this.props.id;
  }
  public get name(): string {
    return this.props.name;
  }
  public get description(): string {
    return this.props.description;
  }
  public get price(): number {
    return this.props.price;
  }
  public get quantity(): number {
    return this.props.quantity;
  }
}
