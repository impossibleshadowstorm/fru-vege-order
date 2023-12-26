const cndURL = process.env.REACT_APP_PUBLIC_CND_URL;

export const imageLoader = ({ src }) => {
  return `${cndURL}${src}`;
};
