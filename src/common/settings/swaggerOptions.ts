const fastifySwaggerOptions = {
  routePrefix: '/docs',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'ClubPetro - Connectec Integration API',
      description: 'Connectec Integration API',
      version: '1.0.0'
    },
    basePath: '/api/'
  }
};

const fastifySwaggerUiOptions = async () => {
  const response = await fetch(
    'https://assets-global.website-files.com/6018ac33a8a9e0ceca4f9690/62142b52550e143ab4bc5736_logo-clubpetro-color.svg'
  );
  const content = await response.text();
  return {
    routePrefix: '/docs',
    exposeRoute: true,
    uiConfig: {
      docExpansion: 'full' as const,
      deepLinking: false
    },
    logo: {
      content,
      type: 'image/svg+xml'
    },
    staticCSP: true,
    transformSpecificationClone: true
  };
};

export { fastifySwaggerOptions, fastifySwaggerUiOptions };
