export const PRODUCT_QUERY = `
query{
    products{
     data{
       attributes{
         Title
         Description
         Price
         slug
         Image{
           data{
             attributes{
               formats
             }
           }
         }
       }
     }
    }
   }
`;

export const GET_PRODUCT_QUERY = `
query getProducts($slug:String!){
  products(filters: {slug :{eq: $slug}}){
    data{
      attributes{
        Title
        Description
        slug
        Price
        Image{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}`;
