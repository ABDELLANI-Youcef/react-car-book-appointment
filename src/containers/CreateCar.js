const CreateCar = () => (
  <div>
    <form>
      <label htmlFor="mark_input">
        Mark:
        {' '}
        <input id="mark_input" type="text" value="Mercedes" />
      </label>
      <label htmlFor="model_input">
        Model:
        {' '}
        <input id="model_input" type="text" value="GLB" />
      </label>
      <label htmlFor="year_input">
        Year:
        {' '}
        <input id="year_input" type="number" value={2021} />
      </label>
      <input type="submit" value="submit" />
    </form>
  </div>
);

export default CreateCar;
