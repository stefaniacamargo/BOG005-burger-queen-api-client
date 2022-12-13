import { useEffect, useState } from 'react';
import { getProductList } from '../../../Utils/petitions';
import Spinner from '../../components/Spinner';

function AdminProductsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const { data } = await getProductList();
      setProductsList(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="productList py-4">
      <div className="container mb-4">
        <button type="button" className="btn btn-success">
          Add Product
        </button>
      </div>
      <div className="container text-light">
        <div className="row">
          <div className="col">
            <table className="table table-dark table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Preview</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {productsList.map(({ id, name, price, image }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>
                      <img
                        className="product-list-img img-fluid"
                        src={image}
                        alt={name}
                      />
                    </td>
                    <td className="d-flex">
                      <button type="button" className="btn btn-warning">
                        Edit
                      </button>
                      <button type="button" className="btn btn-danger ms-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminProductsPage;
