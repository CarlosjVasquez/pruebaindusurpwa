export const sizes = {
  phone: 576,
  tablet: 768,
  smallLaptop: 998,
  laptop: 1200,
  desktop: 1440,
};

const Responsive = {
  SM: `@media(max-width: ${sizes.phone}px)`,
  MD: `@media(max-width: ${sizes.tablet}px)`,
  LG: `@media(max-width: ${sizes.smallLaptop}px)`,
  XL: `@media(max-width: ${sizes.laptop}px)`,
  XXL: `@media(max-width: ${sizes.desktop}px)`,
};

export default Responsive;
