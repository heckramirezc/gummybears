const facets = {
  getColorsFilter(color) {
    let colorFilter;
    switch (color) {
      case 'Negro':
        colorFilter = 'negro';
        break;
      case 'Azul':
        colorFilter = 'azul';
        break;
      case 'Blanco':
        colorFilter = 'blanco';
        break;
      case 'Rojo':
        colorFilter = 'rojo';
        break;
      case 'Dorado':
        colorFilter = 'dorado';
        break;
      case 'Cafe':
        colorFilter = 'cafe';
        break;
      case 'Morado':
        colorFilter = 'morado';
        break;
      case 'Rosa':
        colorFilter = 'rosa';
        break;
      case 'Turquesa':
        colorFilter = 'turquesa';
        break;
      case 'Verde':
        colorFilter = 'verde';
        break;
      case 'Amarillo':
        colorFilter = 'amarillo';
        break;
      case 'Naranja':
        colorFilter = 'naranja';
        break;
      case 'Menta':
        colorFilter = 'menta';
        break;
      case 'Gris':
        colorFilter = 'gris';
        break;
      case 'Titanio':
        colorFilter = 'titanio';
        break;
      case 'Plata':
        colorFilter = 'plata';
        break;
      case 'Plateado':
        colorFilter = 'plateado';
        break;
      case 'Gris espacial':
        colorFilter = 'gris-espacial';
        break;
      default:
    }

    return colorFilter;
  },
};

export default facets;
