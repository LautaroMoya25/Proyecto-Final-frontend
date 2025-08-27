import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductGrid from "../components/ProductGrid";
import { useAuth } from "../hooks/useUser";
import { API_ENDPOINTS } from "../constants";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showPopup, setShowPopup] = useState(null);
  const [productToEdit, setProductToEdit] = useState(null);
  const [titleEdit, setTitleEdit] = useState("");
  const [priceEdit, setPriceEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");
  const [categoryEdit, setCategoryEdit] = useState("");
  const [imageEdit, setImageEdit] = useState("");
  
  const { user } = useAuth();

  const fetchProducts = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.PRODUCTS);
      if (!response.ok) {
        throw new Error('No se pudieron cargar los productos');
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`${API_ENDPOINTS.PRODUCTS}/${id}`, { method: "DELETE" });

    if (response.ok) {
      setProducts(prevProducts => prevProducts.filter((product) => product.id !== id));
    }
  };

  const handleOpenEdit = (product) => {
    setProductToEdit(product);
    setTitleEdit(product.title);
    setPriceEdit(product.price);
    setDescriptionEdit(product.description);
    setCategoryEdit(product.category);
    setImageEdit(product.image);
    setShowPopup(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...productToEdit,
      title: titleEdit,
      price: priceEdit,
      description: descriptionEdit,
      category: categoryEdit,
      image: imageEdit
    };

    const response = await fetch(`${API_ENDPOINTS.PRODUCTS}/${productToEdit.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedProduct)
    });

    if (response.ok) {
      const data = await response.json();
      setProducts(prevProducts => prevProducts.map(product => product.id === data.id ? data : product));
      setShowPopup(false);
      setProductToEdit(null);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-xl font-medium text-gray-400">Cargando productos...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-xl font-medium text-red-500">Error: {error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="p-4">
        <ProductGrid
          products={products}
          user={user}
          handleOpenEdit={handleOpenEdit}
          handleDelete={handleDelete}
        />
      </section>

      {showPopup && (
        <section className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <form onSubmit={handleUpdate} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Editar Producto</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Título</label>
              <input type="text" value={titleEdit} onChange={(e) => setTitleEdit(e.target.value)} className="w-full p-2 border rounded text-gray-700" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Precio</label>
              <input type="number" value={priceEdit} onChange={(e) => setPriceEdit(e.target.value)} className="w-full p-2 border rounded text-gray-700" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Descripción</label>
              <textarea value={descriptionEdit} onChange={(e) => setDescriptionEdit(e.target.value)} className="w-full p-2 border rounded text-gray-700" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Categoría</label>
              <input type="text" value={categoryEdit} onChange={(e) => setCategoryEdit(e.target.value)} className="w-full p-2 border rounded text-gray-700" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">URL de Imagen</label>
              <input type="text" value={imageEdit} onChange={(e) => setImageEdit(e.target.value)} className="w-full p-2 border rounded text-gray-700" />
            </div>
            <div className="flex justify-end gap-2">
              <button type="button" onClick={() => setShowPopup(false)} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Cancelar</button>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Actualizar</button>
            </div>
          </form>
        </section>
      )}
    </Layout>
  );
};

export default Home;