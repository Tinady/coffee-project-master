exports.templateToHtml = (template) => {
  const wrapper = document.createElement("div");
  wrapper.insertAdjacentHTML("beforeend", template.trim());
  return wrapper.firstChild;
};
