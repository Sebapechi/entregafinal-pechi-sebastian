let productos = [];

const formulario = document.querySelector("#formulario");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const productList = document.querySelector("#productList");
const sellProduct = document.querySelector("#sellProduct");
const productSelect = document.querySelector("#productSelect");
const customerName = document.querySelector("#customerName");

const DateTime = luxon.DateTime;

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Quieres agregar un nuevo producto?",
    text: "No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Agregar",
  }).then((result) => {
    if (result.isConfirmed) {
      const producto = {
        id: Date.now(),
        nombre: name.value,
        precio: price.value,
        descripcion: description.value,
      };
      console.log(producto);
      crearProducto(producto);
      Swal.fire(
        "Producto agregado correctamente!",
        `${producto.nombre} agregado correctamente`,
        "success"
      );
    }
  });
});

function crearProducto(producto) {
  productos.push(producto);
  verProductos();
}

addEventListener("DOMContentLoaded", () => {
  verProductos();
});

function verProductos() {
  if (productos.length > 0) {
    renderizarProductos(productos);
    rederizarProductosSelect(productos);
  }
}

function renderizarProductos(productos) {
  productList.innerHTML = "";
  productos.forEach((producto) => {
    const { nombre, precio, descripcion } = producto;
    productList.innerHTML += `
        <div class="product-card">
        <h3 class="product-name">${nombre}</h3>
        <p class="product-price">${precio}</p>
        <p class="product-description">${descripcion}</p>
        <button class="btn-primary">Comprar</button>
      </div>
        `;
  });
}

function rederizarProductosSelect(productos) {
  productSelect.innerHTML = `<option value="" disabled selected>Seleccione un producto</option>`;
  productos.forEach((producto) => {
    const { nombre, id } = producto;
    productSelect.innerHTML += `
    <option value="${id}">${nombre}</option>
        `;
  });
}

sellProduct.addEventListener("submit", venderProducto);

function venderProducto(e) {
  e.preventDefault();
  const productoSeleccionado = productSelect.value;
  const nombreCliente = customerName.value;
  const producto = productos.find((producto) => {
    return producto.id == productoSeleccionado;
  });
  const objetoProducto = {
    ...producto,
    nombreCliente,
  };

  Toastify({
    text: `El producto ${objetoProducto.nombre} fue vendido a ${
      objetoProducto.nombreCliente
    } el dia ${DateTime.now().toLocaleString(DateTime.DATE_FULL)}`,
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },

    duration: 3000,
    close: true,
  }).showToast();
  console.log(objetoProducto);
}