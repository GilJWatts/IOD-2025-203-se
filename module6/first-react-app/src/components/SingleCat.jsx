function SingleCat({ name, latinName, image }) {
  return (
    <li>
      <img src={image} alt={name} width="200px" />
      <h3>{name}</h3>
      <p>({latinName})</p>
    </li>
  );
}

export default SingleCat;
