// src/cn/index.ts
function cn(classes) {
  return Object.entries(classes).filter(([, value]) => value).map(([key]) => key).join(" ");
}
export {
  cn
};
//# sourceMappingURL=index.js.map
