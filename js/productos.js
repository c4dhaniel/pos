// Tags comunes
const baseTags = ["Mayonesa", "Ají", "Mostaza", "Aceituna", "Ketchu", "Sin ensalada", "Solo tomate", "Sin cremas", "Cremas aparte"];
const drinkTags = ["Helado", "Sin helar"];

// Función para clonar tags
const clone = arr => [...arr];

// Datos de productos
const products = [
    {id: 0, estado: 1, name: "Hamburguesa simple", price: 6.00, category: "hamburguesa", image: "images/productos/h-simple.webp", tags: clone(baseTags)},
    {id: 2, estado: 1, name: "Hamburguesa royal", price: 7.50, category: "hamburguesa", image: "images/productos/h-royal.webp", tags: clone(baseTags)},
    {id: 3, estado: 1, name: "Hamburguesa hawaiana", price: 9.00, category: "hamburguesa", image: "images/productos/h-hawaiana.webp", tags: clone(baseTags)},
    {id: 4, estado: 1, name: "Hamburguesa chorizo", price: 8.00, category: "hamburguesa", image: "images/productos/h-chorizo.webp", tags: clone(baseTags)},
    {id: 5, estado: 1, name: "Hamburguesa cubana", price: 8.50, category: "hamburguesa", image: "images/productos/h-cubana.webp", tags: clone(baseTags)},
    {id: 6, estado: 1, name: "Pollo broaster + papas + ensalada + arroz", price: 10.00, category: "broaster", image: "images/productos/pollo-broaster.webp", tags: clone(baseTags)},
    {id: 7, estado: 1, name: "Alitas broaster + papas + ensalada + arroz", price: 10.00, category: "broaster", image: "images/productos/alitas-broaster.webp", tags: clone(baseTags)},
    {id: 8, estado: 1, name: "Salchipapa", price: 7.00, category: "otros", image: "images/productos/salchipapa.webp", tags: clone(baseTags)},
    {id: 9, estado: 1, name: "Salchipollo", price: 9.00, category: "otros", image: "images/productos/salchipollo.webp", tags: clone(baseTags)},
    {id: 10, estado: 1, name: "Patitas", price: 5.00, category: "otros", image: "images/productos/patitas.webp", tags: clone(baseTags)},
    {id: 11, estado: 1, name: "Jugo de Mango", price: 4.00, category: "jugos", image: "images/productos/jugo-mango.webp", tags: clone(drinkTags)},
    {id: 12, estado: 1, name: "Jugo de Naranja", price: 4.00, category: "jugos", image: "images/productos/jugo-naranja.webp", tags: clone(drinkTags)},
    {id: 13, estado: 1, name: "Jugo de Piña", price: 6.00, category: "jugos", image: "images/productos/jugo-pina.webp", tags: clone(drinkTags)},
    {id: 14, estado: 1, name: "Jugo de Fresa", price: 6.00, category: "jugos", image: "images/productos/jugo-fresa.webp", tags: clone(drinkTags)},
    {id: 15, estado: 1, name: "Jugo de Fresa con leche", price: 7.00, category: "jugos", image: "images/productos/jugo-fresaleche.webp", tags: clone(drinkTags)},
    {id: 16, estado: 1, name: "Huevo", price: 1.50, category: "adicionales", image: "images/productos/huevofrito.webp", tags: []},
    {id: 17, estado: 1, name: "Plátano", price: 1.00, category: "adicionales", image: "images/productos/platanosfritos.webp", tags: []},
    {id: 18, estado: 1, name: "Queso", price: 2.00, category: "adicionales", image: "images/productos/queso.webp", tags: []},
    {id: 19, estado: 1, name: "Piña", price: 2.00, category: "adicionales", image: "images/productos/pinaextra.webp", tags: []},
    {id: 20, estado: 1, name: "Arroz", price: 2.00, category: "adicionales", image: "images/productos/arroz.webp", tags: []},
    {id: 21, estado: 1, name: "Gaseosa (preguntar)", price: 0, category: "adicionales", image: "images/productos/gaseosas.webp", tags: clone(drinkTags)},
    {id: 22, estado: 1, name: "Refresco del día (preguntar)", price: 0, category: "adicionales", image: "images/productos/refresco.webp", tags: clone(drinkTags)},
];
