export const textChars = (e) => {
  const regex = /[a-zA-ZáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙüÜñÑ\s-]/g;
  if (!regex.test(e.key)) { e.preventDefault(); }
};

export const numberChars = (e) => {
  const regex = /[0-9]/g;
  if (!regex.test(e.key)) { e.preventDefault(); }
};
export const duiChars = (e) => {
  const regex = /[0-9-]/g;
  if (!(regex.test(e.key) || e.key === '-')) { e.preventDefault(); }
};

export const alphanumericChars = (e) => {
  const regex = /[0-9a-zA-ZáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙüÜñÑ\s-.,]/g;
  if (!regex.test(e.key)) { e.preventDefault(); }
};

export const emailChars = (e) => {
  const regex = /[a-zA-Z0-9_+@.-]/g;
  if (!regex.test(e.key)) { e.preventDefault(); }
};

export const passwordChars = (e) => {
  const regex = /[a-zA-Z0-9!@#$%&*,.]/g;
  if (!regex.test(e.key)) { e.preventDefault(); }
};

export const nitChars = (e) => {
  const regex = /[a-zA-Z0-9-]/g;
  if (!regex.test(e.key)) { e.preventDefault(); }
};
