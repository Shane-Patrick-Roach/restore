import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/products"


interface Props {
  products: Product[];
  addProduct: () => void;
}


export default function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <List>
        {products.map((product: any) => (
          <ListItem key={product.id}>
            <ListItemAvatar>
              <Avatar src={product.pictureUrl} />
            </ListItemAvatar>
            <ListItemText>
              Item: {product.name} with a price of {product.price}.

            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Button variant='contained' onClick={addProduct}>Add Product</Button>
    </>
  )
}