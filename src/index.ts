export const pp = (obj: any, { flat = false }: { flat?: boolean; } = {}) => {
  if (flat) return JSON.stringify(obj);
  return JSON.stringify(obj, null, 2);
};

export const sleep = (ms: number = 20000) => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => resolve(null), ms);
  });
};