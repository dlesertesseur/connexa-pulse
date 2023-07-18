const dynamicImport = async (path) => {
  const {comp} = await import(path);
  return(comp)
};


export {dynamicImport}