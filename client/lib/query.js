export const PRODUCT_QUERY = `query{
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
   }`;
