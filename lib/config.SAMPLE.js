module.exports = {
    jwt: {
        secret: 'TU_SECRETO_AQUI',
        expiresInMinutes: 3000,
      },
    es: {
        INVALID_TOKEN: 'Su token de acceso no es correcto',
        INVALID_LOGIN: 'Credenciales de acceso inválidas',
        INVALID_CRITERIA: 'Ningún producto encontrado con tus filtros',
        NOT_FOUND: 'Página no encontrada',
      },
    en: {
        INVALID_TOKEN: 'Wrong access token provided',
        INVALID_LOGIN: 'Wrong login credentials',
        INVALID_CRITERIA: 'Products not found with your criteria',
        NOT_FOUND: 'Page not found',
      },
  }