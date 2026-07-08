const productos = [
    { id: 1, nombre: "Laptop gamer", categoria: "Laptops", precio: 32833.00, descripcion: "Laptop gamer con Intel Core i7, 8GB de RAM y 512GB SSD. Pantalla Full HD de 15.6 pulgadas.", imagen: "https://media.mipc.com.mx/catalog/product/8/c/8c74445c294e6637376d86d7793a409e.jpg?store=default&image-type=image", stock: 16 },
    { id: 2, nombre: "Miniproyector VISSPL", categoria: "Proyectores", precio: 2029.00, descripcion: "Proyector portátil, resolución 1080p y 2000 lúmenes, ideal para presentaciones.", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_632696-CBT75549032516_042024-F.webp", stock: 8 },
    { id: 3, nombre: "Impresora Multifuncional Canon imageCLASS MF272dw", categoria: "Impresoras", precio: 3298.99, descripcion: "Impresora multifuncional láser monocromática, impresión, escaneo y copiado, conectividad WiFi.", imagen: "https://cdn.lotuselectronics.com/webpimages/601281IM.webp", stock: 10 },
    { id: 4, nombre: "Multifuncional Hp Laserjet Enterprise Flow M880Z", categoria: "Impresoras", precio: 218859.00, descripcion: "Impresora multifuncional color, alta velocidad, ideal para grandes volúmenes de impresión.", imagen: "https://media.mipc.com.mx/catalog/product/3/c/3c4121d2d86f6e65ec4f2da71f2cb0cb.jpg?store=default&image-type=image", stock: 2 },
    { id: 5, nombre: "Rack Dell Netshelter Sx 42U", categoria: "Gabinete", precio: 41345.11, descripcion: "Rack de servidor de 42U, ideal para almacenamiento de equipos de telecomunicaciones.", imagen: "https://snpi.dell.com/snp/images/products/large/es-es~A7522216_v2/A7522216_v2.jpg", stock: 2 },
    { id: 6, nombre: "Switch JetStream SDN Administrable 24 puertos TP-LINK", categoria: "Switch", precio: 3967.99, descripcion: "Switch administrable con 24 puertos Gigabit Ethernet, ideal para redes de oficina y empresas.", imagen: "https://www.mirocom.com.mx/4006-large_default/switch-jetstream-sdn-administrable-24-puertos-101001000-mbps-4-puertos-sfp-administracion-centralizada-omada.jpg", stock: 2 },
    { id: 7, nombre: "Switch de escritorio 8 puertos UBIQUITI NETWORKS", categoria: "Switch", precio: 426.99, descripcion: "Switch de escritorio de 8 puertos, ideal para pequeñas oficinas y redes domésticas.", imagen: "https://images.pcel.com/600/Redes-Switches-y-Hubs-para-Empresas-Ubiquiti-Networks-US-8-150W-161552-MMaDS7WalpYtXJ1j.jpg", stock: 6 },
    { id: 8, nombre: "Servidor HPE ProLiant DL385 G10 - 1 x AMD EPYC 7302", categoria: "Servidor", precio: 70233.00, descripcion: "Servidor empresarial con procesador AMD EPYC 7302, 64GB de RAM, ideal para entornos de alto rendimiento.", imagen: "https://www.cyberpuerta.mx/img/product/XL/CP-HPENTERPRISE-P07596-B21-40bb84.jpg?store=default&image-type=image", stock: 2 },
    { id: 9, nombre: "SERVIDOR DELL POWEREDGE R440 INTEL XEON SILVER", categoria: "Servidor", precio: 66500.00, descripcion: "Servidor empresarial con procesador Intel Xeon Silver 4110, adecuado para aplicaciones de misión crítica.", imagen: "https://resources.claroshop.com/medios-plazavip/s2/11905/2007580/5fea962a83432-edae1fdb-041b-4e65-a2e1-bb3b8e668efd-1600x1600.jpg", stock: 1 },
    { id: 10, nombre: "HP 14-ce0001la Laptop 14\" HD, Intel Core i5-8250U", categoria: "Laptops", precio: 10569.72, descripcion: "Laptop compacta con Intel Core i5-8250U, 4GB de RAM, ideal para tareas básicas y portabilidad.", imagen: "https://m.media-amazon.com/images/I/81zEDzqqrFL._AC_SX450_.jpg", stock: 1 },
    { id: 11, nombre: "DELL Precision 3630 - Estación de Trabajo de sobremesa", categoria: "Estacion", precio: 54000.00, descripcion: "Estación de trabajo potente con procesador Intel Core i7, ideal para diseño gráfico y aplicaciones de alto rendimiento.", imagen: "https://www.cyberpuerta.mx/img/product/XL/CP-DELL-3630-2882-6bb8a9.jpg", stock: 1 },
    { id: 12, nombre: "PC Dell OptiPlex 7060 MINI", categoria: "PC", precio: 7899.00, descripcion: "Computadora compacta de oficina con Intel Core i5, 8GB de RAM y 256GB SSD, ideal para empresas y oficinas.", imagen: "https://i5.walmartimages.com/asr/5edd3f21-5c43-44a1-a729-a2131fa107e6.09bfbcf7699c2223753573b68c9eee40.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", stock: 3 },
    { id: 13, nombre: "Dell Optiplex 3060", categoria: "PC", precio: 7327.28, descripcion: "Computadora de sobremesa con Intel Core i5-8500, ideal para el uso diario y tareas empresariales.", imagen: "https://images-na.ssl-images-amazon.com/images/I/61fYPM3M9pL._SS400_.jpg", stock: 1 },
    { id: 14, nombre: "Monitor MSI PRO MP273AW", categoria: "Monitores", precio: 2169.00, descripcion: "Monitor de 27 pulgadas con resolución Full HD, ideal para oficina y entretenimiento.", imagen: "https://elektra.vtexassets.com/arquivos/ids/20495070-800-auto?v=638998719242800000&width=800&height=auto&aspect=true", stock: 1 },
    { id: 15, nombre: "Laptop touch 15-fd0281la 15.6 pulgadas Full HD", categoria: "Laptops", precio: 19367.00, descripcion: "Laptop con pantalla táctil Full HD de 15.6, Intel Core i7, 8GB de RAM, ideal para trabajo y entretenimiento.", imagen: "https://mx-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/B/M/BM7C5LA-1_T1754062192.png", stock: 7 },
    { id: 16, nombre: "Intel Xeon Silver 4110 (8 núcleos, 16 hilos, 2.1 GHz)", categoria: "Procesadores", precio: 16700.00, descripcion: "Procesador de servidor Intel Xeon Silver 4110, con 8 núcleos y 16 hilos, ideal para servidores y estaciones de trabajo.", imagen: "https://media.mipc.com.mx/catalog/product/f/8/f811f431055a44ed3467d8259a954306.jpg?store=default&image-type=image", stock: 4 },
    { id: 17, nombre: "Logitech Rally Plus equipo portátil de videoconferencia", categoria: "Videoconferencias", precio: 87972.00, descripcion: "Sistema de videoconferencia de alta calidad con cámara 4K y audio profesional, ideal para empresas y salas de conferencias.", imagen: "https://m.media-amazon.com/images/I/81SQi8ezjlL._AC_SX450_.jpg", stock: 1 },
    { id: 18, nombre: "Sistema de videoconferencia Grandstream GVC3200", categoria: "Videoconferencias", precio: 89999.00, descripcion: "Sistema completo de videoconferencia con micrófono tipo araña y pantalla en pedestal, ideal para conferencias de alta calidad.", imagen: "https://www.colombiasystems.com/wp-content/uploads/Grandstream-GAC2500.jpg.webp", stock: 4 },
    { id: 19, nombre: "Dell Optiplex Antena de red inalámbrica", categoria: "Accesorios", precio: 217.99, descripcion: "Antena de red inalámbrica de 2.4GHz, compatible con estándares 802.11n/g/b.", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_785140-MLM89202798601_082025-F.webp", stock: 12 },
    { id: 20, nombre: "Switch FDR 12 puertos Mellanox", categoria: "Switch", precio: 107816.00, descripcion: "Switch de alto rendimiento con 12 puertos FDR, ideal para redes de alta velocidad y entornos de datos intensivos.", imagen: "https://m.media-amazon.com/images/I/61RL0kNsusL.jpg", stock: 1 },
    { id: 21, nombre: "HPE ProLiant DL325 Gen11 con procesador AMD EPYC 9124", categoria: "Servidor", precio: 97459.00, descripcion: "Servidor empresarial con procesador AMD EPYC 9124 y 32GB de RAM, ideal para ambientes de alta carga de trabajo.", imagen: "https://www.cyberpuerta.mx/img/product/XL/CP-HPENTERPRISE-P66778-B21-cea778.jpg", stock: 1 },
    { id: 22, nombre: "BenQ MH560 DLP Full HD 1920×1080", categoria: "Proyectores", precio: 23787.00, descripcion: "Proyector Full HD con 3,800 lúmenes, ideal para presentaciones en oficinas y aulas.", imagen: "https://content.syndigo.com/asset/005942a9-2d51-4c11-8ff7-9aef9058303a/960.webp", stock: 15 },
    { id: 23, nombre: "BenQ TH685i Proyector Full HD 1080p", categoria: "Proyectores", precio: 21479.00, descripcion: "Proyector Full HD con 3,500 lúmenes, ideal para cine en casa y presentaciones de alto impacto.", imagen: "https://m.media-amazon.com/images/I/51jZs-tPxIL._AC_SL1200_.jpg", stock: 17 },
    { id: 24, nombre: "Servidor Rack 1U Intel Xeon E-2124", categoria: "Servidores", precio: 19990.00, descripcion: "Servidor rack 1U con procesador Intel Xeon, 16GB de RAM y almacenamiento SSD de 240GB, ideal para pequeñas empresas.", imagen: "https://c1.neweggimages.com/productimage/nb1280/A8Z0D240821129IJU91.jpg", stock: 2 }
];

let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
let currentProduct = null;

const cartModal = document.getElementById('cart-modal');
const closeBtn = cartModal ? cartModal.querySelector('.close-btn') : null;
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSummary = document.getElementById('cart-summary');
const cartTotalPrice = document.getElementById('cart-total-price');
const addToCartBtn = document.getElementById('add-to-cart-btn');
const checkoutBtn = document.getElementById('checkout-btn');
const productList = document.getElementById('product-list');

const searchBar = document.getElementById('search-bar');
const filterButtons = document.querySelectorAll('.filter-btn');
let currentFilter = 'all';

const phoneNumber = 'numerodetelefono';

function formatPrice(price) {
    return `$${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

function saveCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

function renderCart() {
    if (!cartItemsContainer || !cartTotalPrice || !checkoutBtn || !cartSummary) return;

    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: var(--muted);">El carrito está vacío.</p>';
        cartTotalPrice.textContent = formatPrice(0);
        checkoutBtn.disabled = true;

        const clearBtn = document.getElementById('clear-cart-btn');
        if (clearBtn) clearBtn.style.display = 'none';
        return;
    }

    cart.forEach(item => {
        const priceValue = item.precio;
        const itemTotal = priceValue * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <span class="cart-item-name">${item.nombre}</span>
                <span class="cart-item-quantity">(${item.quantity}x)</span>
                <span class="cart-item-price">${formatPrice(itemTotal)}</span>
            </div>
            <button class="cart-item-remove btn btn-ghost" data-id="${item.id}" aria-label="Eliminar un producto">
                &times;
            </button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    let clearCartButton = document.getElementById('clear-cart-btn');
    if (!clearCartButton) {
        clearCartButton = document.createElement('button');
        clearCartButton.id = 'clear-cart-btn';
        clearCartButton.classList.add('btn', 'btn-ghost');
        clearCartButton.textContent = 'Vaciar Carrito';

        clearCartButton.style.marginRight = '10px';
        clearCartButton.style.display = 'block';
        clearCartButton.style.marginTop = '15px';
        clearCartButton.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        clearCartButton.style.color = '#ef4444';
        clearCartButton.style.borderColor = '#ef4444';

        cartSummary.parentNode.insertBefore(clearCartButton, cartSummary);

        clearCartButton.addEventListener('click', clearCart);
    } else {
        clearCartButton.style.display = 'block';
    }

    cartTotalPrice.textContent = formatPrice(total);
    checkoutBtn.disabled = false;
    updateCartCount();
    saveCart();

    document.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', handleRemoveItem);
    });
}

function addToCart(product) {
    if (!product) return false;

    const productData = productos.find(p => p.id === product.id);

    if (!productData || typeof productData.stock === 'undefined') {
        return false;
    }

    const existingItem = cart.find(item => item.id === product.id);
    const currentQuantityInCart = existingItem ? existingItem.quantity : 0;

    if (currentQuantityInCart >= productData.stock) {
        return false;
    }

    if (productData.stock <= 0) {
        return false;
    }

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    return true;
}

function handleRemoveItem(event) {
    const productId = parseInt(event.currentTarget.dataset.id);

    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
        cart[itemIndex].quantity -= 1;

        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
    }

    saveCart();
    renderCart();

    if (document.getElementById('product-detail-view').style.display === 'block' && currentProduct && currentProduct.id === productId) {
        showProductDetail(currentProduct);
    }
}

function clearCart() {
    if (confirm('¿Estás seguro de que quieres vaciar completamente tu carrito?')) {
        cart = [];
        saveCart();
        renderCart();
        alert('Carrito vaciado.');

        if (cartModal) cartModal.classList.remove('open');
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('El carrito está vacío. Por favor, añade productos antes de finalizar la compra.');
        return;
    }

    let message = '¡Hola PRODYGY! Me gustaría hacer un pedido con los siguientes productos:\n\n';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.precio * item.quantity;
        total += itemTotal;
        message += `* ${item.nombre} (${item.quantity}x) - ${formatPrice(itemTotal)}\n`;
    });

    message += `\n*TOTAL ESTIMADO: ${formatPrice(total)}*`;
    message += '\n\nPor favor, confirmen la disponibilidad y el total, ¡gracias!';

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.dataset.id = product.id;

    const stock = product.stock;
    const isOutOfStock = stock <= 0;

    if (isOutOfStock) {
        card.classList.add('out-of-stock');
    }

    card.innerHTML = `
        <img src="${product.imagen || 'placeholder.png'}" alt="${product.nombre}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.nombre}</h3>
            ${isOutOfStock ?
                '<span class="product-price" style="color: #ef4444; font-weight: 700;">AGOTADO</span>' :
                `<span class="product-price">${formatPrice(product.precio)}</span>`
            }
        </div>
    `;

    if (!isOutOfStock) {
        card.addEventListener('click', () => showProductDetail(product));
    } else {
        card.addEventListener('click', () => alert(`Lo sentimos, ${product.nombre} está AGOTADO.`));
    }

    return card;
}

function renderProducts(productsToRender) {
    if (!productList) return;
    productList.innerHTML = '';
    productsToRender.forEach(product => {
        productList.appendChild(createProductCard(product));
    });
}

function showProductDetail(product) {
    currentProduct = product;

    const detailView = document.getElementById('product-detail-view');
    const catalogView = document.getElementById('catalog-view');
    if (detailView && catalogView) {
        catalogView.style.display = 'none';
        detailView.style.display = 'block';
    }

    const productData = productos.find(p => p.id === product.id);
    const stock = productData ? productData.stock : 0;

    const stockElement = document.getElementById('detail-stock');
    const addToCartButton = document.getElementById('add-to-cart-btn');

    document.getElementById('detail-name').textContent = product.nombre;
    document.getElementById('detail-description').textContent = product.descripcion;
    document.getElementById('detail-price').textContent = formatPrice(product.precio);
    document.getElementById('detail-image').src = product.imagen || 'placeholder.png';

    if (stockElement && addToCartButton) {
        if (stock > 0) {
            stockElement.textContent = `Stock disponible: ${stock} unidades.`;
            stockElement.style.color = stock <= 2 ? '#ef4444' : 'var(--brand)';
            addToCartButton.disabled = false;
            addToCartButton.textContent = 'Añadir al Carrito';
        } else {
            stockElement.textContent = 'AGOTADO';
            stockElement.style.color = 'red';
            addToCartButton.disabled = true;
            addToCartButton.textContent = 'Producto Agotado';
        }
    }
}

function filterProducts(searchTerm = '') {
    const term = searchTerm.toLowerCase().trim();

    const filtered = productos.filter(product => {
        const matchesSearch = product.nombre.toLowerCase().includes(term);
        const matchesCategory = currentFilter === 'all' || product.categoria === currentFilter;

        return matchesSearch && matchesCategory;
    });

    renderProducts(filtered);
}

function handleCategoryFilter(event) {
    const filterValue = event.currentTarget.dataset.filter;

    currentFilter = filterValue;

    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    const currentSearchTerm = searchBar ? searchBar.value : '';
    filterProducts(currentSearchTerm);
}

function setupCatalogControls() {
    const initialButton = document.querySelector('.filter-btn[data-filter="all"]');
    if (initialButton) {
        initialButton.classList.add('active');
    }

    if (searchBar) {
        searchBar.addEventListener('input', (event) => {
            filterProducts(event.target.value);
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', handleCategoryFilter);
    });
}

function setupEventListeners() {
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            if (cartModal) {
                cartModal.classList.add('open');
                renderCart();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (cartModal) cartModal.classList.remove('open');
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            if (cartModal) cartModal.classList.remove('open');
        }
    });

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            if (!currentProduct) {
                alert('Error: Producto no seleccionado.');
                return;
            }

            const productData = productos.find(p => p.id === currentProduct.id);
            const existingItem = cart.find(item => item.id === currentProduct.id);
            const currentQuantityInCart = existingItem ? existingItem.quantity : 0;

            if (currentQuantityInCart >= productData.stock) {
                alert(`¡Lo sentimos, ya no hay más stock de ${currentProduct.nombre}! Límite de ${productData.stock} alcanzado.`);
            } else {
                const addedSuccessfully = addToCart(currentProduct);

                if (addedSuccessfully) {
                    alert(`${currentProduct.nombre} añadido al carrito. Quedan ${productData.stock - (currentQuantityInCart + 1)} unidades.`);
                    showProductDetail(currentProduct);
                } else {
                    alert(`¡Lo sentimos, ya no hay más stock de ${currentProduct.nombre} para añadir!`);
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(productos);

    updateCartCount();
    setupEventListeners();

    setupCatalogControls();

    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            const detailView = document.getElementById('product-detail-view');
            const catalogView = document.getElementById('catalog-view');
            if (detailView && catalogView) {
                detailView.style.display = 'none';
                catalogView.style.display = 'block';
            }
        });
    }

    function realizarCompra(productId, cantidad) {
        const formData = new FormData();
        formData.append('product_id', productId);
        formData.append('quantity', cantidad);

        fetch('comprar.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    document.getElementById('checkout-btn').addEventListener('click', () => {
        const productId = document.getElementById('checkout-btn').getAttribute('data-product-id');
        const cantidad = document.getElementById('checkout-btn').getAttribute('data-cantidad');

        realizarCompra(productId, cantidad);
    });
});